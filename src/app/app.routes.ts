import { Routes } from '@angular/router'
import { StepperDemoComponent } from './stepper-demo/stepper-demo.component'

export const routes: Routes = [
  { path: '', redirectTo: '/stepper', pathMatch: 'full' },
  { path: 'stepper', component: StepperDemoComponent },
]
