import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('-----1. CONSTRUCTOR-----');
  }

  ngOnInit(): void {
    console.log('-----2. ngOnInit-----');
  }
  // ngOnChanges() {
  //   console.log('-----3. ngOnChanges');
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('Current Value: ', changes['text'].currentValue);
    console.log('Previous Value: ', changes['text'].previousValue);
  }
  ngDoCheck() {
    console.log('-----4. ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('-----5. ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('-----6. ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('-----7. ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('-----8. ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('-----9. ngOnDestroy');
  }
}

// import {
//   Component,
//   Input,
//   OnInit,
//   OnChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy,
//   SimpleChanges,
// } from '@angular/core';

// @Component({
//   selector: 'app-lifecycle',
//   templateUrl: './lifecycle.component.html',
//   styleUrls: ['./lifecycle.component.css'],
// })
// export class LifecycleComponent
//   implements
//     OnInit,
//     OnChanges,
//     DoCheck,
//     AfterContentInit,
//     AfterContentChecked,
//     AfterViewInit,
//     AfterViewChecked,
//     OnDestroy
// {
//   // @Input() text?: string;
//   // text = 'Hello';

//   constructor() {
//     console.log('-----1. CONSTRUCTOR-----');
//   }

//   ngOnInit(): void {
//     console.log('-----2. ngOnInit-----');
//   }
//   ngOnChanges() {
//     console.log('-----3. ngOnChanges');
//   }

//   // ngOnChanges(changes: SimpleChanges) {
//   //   console.log('ngOnChanges');
//   //   console.log('Current Value: ', changes['text'].currentValue);
//   //   console.log('Previous Value: ', changes['text'].previousValue);
//   // }
//   ngDoCheck() {
//     console.log('-----4. ngDoCheck');
//   }

//   ngAfterContentInit() {
//     console.log('-----5. ngAfterContentInit');
//   }

//   ngAfterContentChecked() {
//     console.log('-----6. ngAfterContentChecked');
//   }

//   ngAfterViewInit() {
//     console.log('-----7. ngAfterViewInit');
//   }

//   ngAfterViewChecked() {
//     console.log('-----8. ngAfterViewChecked');
//   }

//   ngOnDestroy() {
//     console.log('-----9. ngOnDestroy');
//   }
// }
