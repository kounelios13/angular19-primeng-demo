import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StepperModule } from 'primeng/stepper'

export interface StepConfig {
  label: string
  value: number
}

/**
 * A reusable stepper component that provides control over content lifecycle.
 *
 * This component wraps PrimeNG's Stepper and adds the ability to control whether
 * step content is destroyed or kept alive when navigating between steps.
 *
 * @example
 * ```html
 * <app-reusable-stepper
 *   [steps]="stepConfigs"
 *   [destroyInactiveSteps]="true"
 *   [(activeStep)]="currentStep">
 *
 *   <ng-container *stepContent="0">
 *     <app-step1></app-step1>
 *   </ng-container>
 *
 *   <ng-container *stepContent="1">
 *     <app-step2></app-step2>
 *   </ng-container>
 * </app-reusable-stepper>
 * ```
 */
@Component({
  selector: 'app-reusable-stepper',
  standalone: true,
  imports: [CommonModule, StepperModule],
  templateUrl: './reusable-stepper.component.html',
  styleUrl: './reusable-stepper.component.css',
})
export class ReusableStepperComponent {
  /**
   * Configuration for the stepper steps (labels and values)
   */
  @Input() steps: StepConfig[] = []

  /**
   * Controls whether inactive step components are destroyed or kept alive.
   * - When true: Components are destroyed when leaving the step (ngOnDestroy is called)
   * - When false: Components remain alive and are only hidden with CSS (default behavior)
   * @default false
   */
  @Input() destroyInactiveSteps = false

  /**
   * The currently active step index
   * @default 0
   */
  @Input() activeStep = 0

  /**
   * Event emitted when the active step changes
   */
  @Output() activeStepChange = new EventEmitter<number>()

  /**
   * Handles step change from the stepper
   */
  onStepChange(newStep: number | undefined): void {
    if (newStep !== undefined) {
      this.activeStep = newStep
      this.activeStepChange.emit(newStep)
    }
  }
}
