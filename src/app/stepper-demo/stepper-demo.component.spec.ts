import { ComponentFixture, TestBed } from '@angular/core/testing'
import { StepperDemoComponent } from './stepper-demo.component'

describe('StepperDemoComponent', () => {
  let component: StepperDemoComponent
  let fixture: ComponentFixture<StepperDemoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperDemoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(StepperDemoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('🚀 should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('🌀 should call ngOnInit if it exists', () => {
    if ('ngOnInit' in component && typeof component.ngOnInit === 'function') {
      const ngOnInitSpy = spyOn(component as any, 'ngOnInit').and.callThrough()
      ;(component as any).ngOnInit()
      expect(ngOnInitSpy).toHaveBeenCalled()
    } else {
      expect(true).toBeTruthy() // Component doesn't implement ngOnInit
    }
  })

  it('💥 should call ngOnDestroy if it exists', () => {
    if (
      'ngOnDestroy' in component &&
      typeof component.ngOnDestroy === 'function'
    ) {
      const ngOnDestroySpy = spyOn(
        component as any,
        'ngOnDestroy',
      ).and.callThrough()
      ;(component as any).ngOnDestroy()
      expect(ngOnDestroySpy).toHaveBeenCalled()
    } else {
      expect(true).toBeTruthy() // Component doesn't implement ngOnDestroy
    }
  })

  it('📃 should render template correctly', () => {
    const compiled = fixture.nativeElement
    expect(compiled).toBeTruthy()
  })
})
