import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachTask } from './each-task';

describe('EachTask', () => {
  let component: EachTask;
  let fixture: ComponentFixture<EachTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
