import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

@Component({
  selector: 'app-stepper-demo',
  standalone: true,
  imports: [StepperModule, ButtonModule, Step1Component, Step2Component, Step3Component],
  templateUrl: './stepper-demo.component.html',
  styleUrl: './stepper-demo.component.css',
})
export class StepperDemoComponent {
  activeStep = 0;
  readonly maxStep = 2;

  nextStep() {
    if (this.activeStep < this.maxStep) {
      this.activeStep++;
    }
  }

  prevStep() {
    if (this.activeStep > 0) {
      this.activeStep--;
    }
  }
}
