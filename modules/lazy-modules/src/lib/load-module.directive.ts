/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentRef,
  EventEmitter,
  SimpleChanges,
  Injector,
  OnInit,
  OnDestroy,
  OnChanges
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LazyLoadModule, LazyModuleComponent } from './lazy-module.interface';
import { LoadModuleService } from './load-module.service';
import * as equal from 'fast-deep-equal';

type IOData = { [key in string]: any };
type NgClassSupportedTypes = string[] | null | undefined;
enum LazyModuleInputs {
  moduleInputs = 'moduleInputs',
  moduleOutputs = 'moduleOutputs',
  moduleClass = 'moduleClass',
  class = 'class'
}

@Directive({ selector: '[loadModule]' })
export class LoadModuleDirective implements OnInit, OnDestroy, OnChanges {
  private rawClass: NgClassSupportedTypes = null;

  @Input() loadModule!: LazyLoadModule;
  @Input() set moduleInputs(data: IOData) {
    this.inputs = data;
  }
  @Input() executorInstance: any;
  @Input() set moduleOutputs(data: any) {
    this.outputs = data;
  }
  @Input() set moduleClass(val: string | string[] | Set<string> | { [klass: string]: any }) {
    this.rawClass = this.setRawClasses(val);
  }
  @Input() loadWithSpinner = false;
  private component: ComponentRef<any> | null = null;
  private componentFactory: LazyModuleComponent | null = null;

  private inputs!: IOData;
  private outputs!: IOData;
  private subscription = new Subscription();

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loadModuleService: LoadModuleService
  ) {}

  async ngOnInit() {
    await this.lazyLoadComponent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isChangesNeeded(LazyModuleInputs.moduleClass, changes)) {
      this.toggleClass(this.setRawClasses(changes['moduleClass'].currentValue));
    }

    if (this.isChangesNeeded(LazyModuleInputs.moduleOutputs, changes)) {
      this.handleOutputs();
    }
    if (this.isChangesNeeded(LazyModuleInputs.moduleInputs, changes)) {
      this.handleInputs(changes['moduleInputs'].currentValue);
      this.componentCdrTrigger();
    }
  }

  private setRawClasses(val: string | string[] | { [klass: string]: any }): string[] {
    if (Array.isArray(val)) {
      return val;
    } else if (typeof val === 'object') {
      return Object.keys(val).filter(el => val[el]);
    } else {
      return val.trim().split(/\s+/);
    }
  }

  private isChangesNeeded(checkInput: LazyModuleInputs, changes: SimpleChanges) {
    return (
      this.component &&
      Object.prototype.hasOwnProperty.call(changes, 'checkInput') &&
      this.isNewChangesCame(changes[checkInput].currentValue, changes[checkInput].previousValue)
    );
  }

  private async lazyLoadComponent() {
    this.componentFactory = await this.loadModuleService.loadComponentModule(this.loadModule);
    this.vcr.clear();
    this.component = this.vcr.createComponent(this.componentFactory.moduleData.component, {
      injector: this.injector,
      ngModuleRef: this.componentFactory.moduleRef
    });
    this.handleInputs(this.inputs);
    this.handleOutputs();
    this.toggleClass(this.rawClass);
    this.componentCdrTrigger();
  }

  private handleOutputs() {
    if (!this.outputs) {
      return;
    }
    this.checkForExecutorInstance();
    if (this.component) {
      this.componentFactory?.compFactory.outputs.forEach((output: any) => {
        this.subscription.add(
          (this.component?.instance[output.propName] as EventEmitter<any>).subscribe(res => {
            if (this.outputs[output.propName] instanceof EventEmitter) {
              this.outputs[output.propName].emit(res);
            } else {
              this.outputs[output.propName].bind(this.executorInstance, res)();
            }
          })
        );
      });
    } else {
      throw Error('No component provided!');
    }
  }

  private handleInputs(inputs: Record<string, any>) {
    if (!inputs || !this.component) {
      return;
    }
    const componentInputs =
      this.componentFactory?.compFactory.inputs.map((input: any) => input.propName) ?? [];
    Object.keys(inputs).forEach(input => {
      if (this.component && componentInputs.includes(input)) {
        this.component.instance[input] = inputs[input];
      } else {
        throw Error(
          'No @Input found in lazy component for ' +
            input +
            ' in ' +
            this.component?.instance.selector
        );
      }
    });
  }

  ngOnDestroy() {
    this.component = null;
    this.componentFactory = null;
    this.subscription.unsubscribe();
  }

  // stuff func's
  private componentCdrTrigger() {
    if (this.component && this.component.instance.cdr) {
      this.component.instance.cdr.markForCheck();
    } else {
      throw Error(
        'Lazy loaded component ' +
          this.component?.componentType.name +
          ' should include ChangeDetectorRef'
      );
    }
  }

  private checkForExecutorInstance() {
    if (!this.executorInstance) {
      throw Error(
        'Lazy load component outputs present but executor Instance is missing. Please add [executorInstance]="this"'
      );
    }
  }

  private isNewChangesCame(obj1: any, obj2: any) {
    return !equal(obj1, obj2);
  }

  private toggleClass(klass: NgClassSupportedTypes): void {
    if (this.component && klass && klass.length) {
      this.component.location.nativeElement.setAttribute('class', klass.join(' '));
    }
  }
}
