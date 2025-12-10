import { Component } from '@angular/core'
import { StepperModule } from 'primeng/stepper'
import { ButtonModule } from 'primeng/button'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Step1Component } from './step1/step1.component'
import { Step2Component } from './step2/step2.component'
import { Step3Component } from './step3/step3.component'
import {
  ReusableStepperComponent,
  StepConfig,
} from '../reusable-stepper/reusable-stepper.component'

@Component({
  selector: 'app-stepper-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StepperModule,
    ButtonModule,
    Step1Component,
    Step2Component,
    Step3Component,
    ReusableStepperComponent,
  ],
  templateUrl: './stepper-demo.component.html',
  styleUrl: './stepper-demo.component.css',
})
export class StepperDemoComponent {
  activeStep = 0
  readonly maxStep = 2

  // Configuration for reusable stepper
  stepConfigs: StepConfig[] = [
    { label: 'Personal Info', value: 0 },
    { label: 'Address Details', value: 1 },
    { label: 'Confirmation', value: 2 },
  ]

  // Control flags for different stepper modes
  destroyInactiveSteps = false
  activeStepReusable = 0

  nextStep() {
    if (this.activeStep < this.maxStep) {
      this.activeStep++
    }
  }

  prevStep() {
    if (this.activeStep > 0) {
      this.activeStep--
    }
  }

  nextStepReusable() {
    if (this.activeStepReusable < this.maxStep) {
      this.activeStepReusable++
    }
  }

  prevStepReusable() {
    if (this.activeStepReusable > 0) {
      this.activeStepReusable--
    }
  }
}
