import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterformapiComponent } from './registerformapi.component';

describe('RegisterformapiComponent', () => {
  let component: RegisterformapiComponent;
  let fixture: ComponentFixture<RegisterformapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterformapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterformapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
