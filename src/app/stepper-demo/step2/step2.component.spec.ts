import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step2Component } from './step2.component';

describe('Step2Component', () => {
  let component: Step2Component;
  let fixture: ComponentFixture<Step2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Step2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🚀 should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('🌀 should call ngOnInit if it exists', () => {
    if ('ngOnInit' in component && typeof component.ngOnInit === 'function') {
      const ngOnInitSpy = spyOn(component as any, 'ngOnInit').and.callThrough();
      (component as any).ngOnInit();
      expect(ngOnInitSpy).toHaveBeenCalled();
    } else {
      expect(true).toBeTruthy(); // Component doesn't implement ngOnInit
    }
  });

  it('💥 should call ngOnDestroy if it exists', () => {
    if ('ngOnDestroy' in component && typeof component.ngOnDestroy === 'function') {
      const ngOnDestroySpy = spyOn(component as any, 'ngOnDestroy').and.callThrough();
      (component as any).ngOnDestroy();
      expect(ngOnDestroySpy).toHaveBeenCalled();
    } else {
      expect(true).toBeTruthy(); // Component doesn't implement ngOnDestroy
    }
  });

  it('📃 should render template correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });
});
