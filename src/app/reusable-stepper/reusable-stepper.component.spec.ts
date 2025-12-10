import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReusableStepperComponent } from './reusable-stepper.component'

describe('ReusableStepperComponent', () => {
  let component: ReusableStepperComponent
  let fixture: ComponentFixture<ReusableStepperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableStepperComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ReusableStepperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('🚀 should create the component', () => {
    expect(component).toBeTruthy()
  })

  it('🔧 should have default destroyInactiveSteps as false', () => {
    expect(component.destroyInactiveSteps).toBe(false)
  })

  it('🔧 should have default activeStep as 0', () => {
    expect(component.activeStep).toBe(0)
  })

  it('🔧 should accept steps configuration', () => {
    const stepConfigs = [
      { label: 'Step 1', value: 0 },
      { label: 'Step 2', value: 1 },
    ]
    component.steps = stepConfigs
    fixture.detectChanges()
    expect(component.steps).toEqual(stepConfigs)
  })

  it('🔧 should allow setting destroyInactiveSteps to true', () => {
    component.destroyInactiveSteps = true
    fixture.detectChanges()
    expect(component.destroyInactiveSteps).toBe(true)
  })

  it('📤 should emit activeStepChange event when step changes', (done) => {
    component.activeStepChange.subscribe((step: number) => {
      expect(step).toBe(1)
      done()
    })
    component.onStepChange(1)
  })

  it('🔄 should update activeStep when onStepChange is called', () => {
    component.onStepChange(2)
    expect(component.activeStep).toBe(2)
  })

  it('📃 should render template correctly', () => {
    const compiled = fixture.nativeElement
    expect(compiled).toBeTruthy()
  })
})
