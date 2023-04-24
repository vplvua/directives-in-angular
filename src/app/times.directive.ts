import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
<<<<<<< HEAD

  @Input() set appTimes(count: number) {
    this.viewContainer.clear();

    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
=======
>>>>>>> classApp_directive
}
