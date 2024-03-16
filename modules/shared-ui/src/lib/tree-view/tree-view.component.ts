import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TreeViewEntity } from '../models/tree-view.model';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  animations: [
    trigger('fade', [
      state(
        'hidden',
        style({
          opacity: '0',
          transform: 'translateY(-100px)',
          visibility: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          opacity: '*',
          transform: '*',
          visibility: '*',
        })
      ),
      transition('hidden => *', animate('200ms ease-in')),
      transition('visible => *', animate('200ms ease-out')),
    ]),
  ],
})
export class TreeViewComponent implements OnChanges {
  @Input() data!: TreeViewEntity[];
  @Input() wrapperClass = '';
  @Output() nodeClick = new EventEmitter<number>();
  @Input()
  get switchHeaderText(): boolean {
    return this._switchHeaderText;
  }
  set switchHeaderText(value: boolean) {
    this._switchHeaderText = coerceBooleanProperty(value);
  }
  private _switchHeaderText = false;


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.initVisible(this.data);
    }
  }

  public toggleFade(event: Event, data: TreeViewEntity) {
    event.stopImmediatePropagation();
    data.visible = !data.visible;
  }

  public initVisible(data: TreeViewEntity[]) {
    data.forEach((item) => {
      item.visible = true;
      if (item.children) {
        this.initVisible(item.children);
      }
    })    
  }

  public _createArray(length: number) {
    return new Array(length);
  }

  public onClick(data: TreeViewEntity): void {
    this.nodeClick.emit(data.id);
  }
}
