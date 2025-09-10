import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  host: {
    '(click)': 'isVisit($event)',
  },
})
export class SafeLinkDirective {
  @Input()
  appSafeLink!: string;

  hostElementRef = inject(ElementRef);

  constructor() {
    console.log('Safe Link Directive');
  }
  isVisit(event: Event) {
    const visited = confirm('Want to visit the link');
    if (visited) {
      // const link = (event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement).href = link + this.appSafeLink;
      this.hostElementRef.nativeElement.href =
        this.hostElementRef.nativeElement.href + '?from=' + this.appSafeLink;
      return;
    } else {
      event.preventDefault();
    }
  }
}
