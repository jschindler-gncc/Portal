import { Directive, OnDestroy, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  selector: '[hideParentContent]',
})
export class HideParentContentDirective implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        const isChildRoute = this.activatedRoute.firstChild !== null;

        this.toggleContentVisibility(isChildRoute);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private toggleContentVisibility(isChildRoute: boolean): void {
    const element = this.elementRef.nativeElement;
    this.renderer.setStyle(element, 'display', isChildRoute ? 'none' : 'block');
  }
}
