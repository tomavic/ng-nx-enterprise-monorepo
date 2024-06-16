import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFound4O4Component } from './NotFound4O4.component';

describe('NotFound4O4Component', () => {
  let component: NotFound4O4Component;
  let fixture: ComponentFixture<NotFound4O4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound4O4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFound4O4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
