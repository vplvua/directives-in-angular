import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private elementRef: ElementRef) {}

  // @Input('appClass') set backgroundColor(color: string) {
  //   this.elementRef.nativeElement.style.backgroundColor = color;
  // }

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }
}
