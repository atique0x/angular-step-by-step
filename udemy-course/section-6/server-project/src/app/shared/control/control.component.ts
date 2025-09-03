import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements OnInit, AfterContentInit {
  @ContentChild('input') control?: ElementRef<HTMLInputElement>;

  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked');
  // }

  // private el = inject(ElementRef);

  ngOnInit(): void {
    console.log('---------NG ON INIT----------');
    console.log(this.control);
  }

  ngAfterContentInit(): void {
    console.log('----------NG AFTER CONTENT----------');
    console.log(this.control);
  }

  onClick() {
    console.log('Clicked');
    // console.log(this.el);
    console.log(this.control?.nativeElement.value);
  }

  @Input() label!: string;
  constructor() {}
}
