import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicprojComponent } from './basicproj.component';

describe('BasicprojComponent', () => {
  let component: BasicprojComponent;
  let fixture: ComponentFixture<BasicprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
