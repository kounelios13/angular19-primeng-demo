# Reusable Stepper Component

A reusable Angular stepper component built with PrimeNG that provides control over component lifecycle management.

## Features

- **Configurable Content Lifecycle**: Control whether step components are destroyed or kept alive when navigating between steps
- **PrimeNG Integration**: Built on top of PrimeNG v19 Stepper component
- **Type-Safe Configuration**: TypeScript interfaces for step configuration
- **Two-Way Binding**: Supports `[(activeStep)]` for reactive state management
- **Event Emission**: Emits `activeStepChange` events when navigation occurs

## Usage

### Basic Example

```typescript
import { ReusableStepperComponent, StepConfig } from './reusable-stepper/reusable-stepper.component';

@Component({
  // ...
  imports: [ReusableStepperComponent]
})
export class MyComponent {
  stepConfigs: StepConfig[] = [
    { label: 'Step 1', value: 0 },
    { label: 'Step 2', value: 1 },
    { label: 'Step 3', value: 2 },
  ];
  
  activeStep = 0;
  destroyInactiveSteps = false;
}
```

```html
<app-reusable-stepper 
  [steps]="stepConfigs" 
  [destroyInactiveSteps]="destroyInactiveSteps"
  [(activeStep)]="activeStep">
  
  <!-- Step content with conditional rendering -->
  <div *ngIf="destroyInactiveSteps ? activeStep === 0 : true"
       [style.display]="!destroyInactiveSteps ? (activeStep === 0 ? 'block' : 'none') : 'block'">
    <my-step1-component></my-step1-component>
  </div>
  
  <div *ngIf="destroyInactiveSteps ? activeStep === 1 : true"
       [style.display]="!destroyInactiveSteps ? (activeStep === 1 ? 'block' : 'none') : 'block'">
    <my-step2-component></my-step2-component>
  </div>
</app-reusable-stepper>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `steps` | `StepConfig[]` | `[]` | Array of step configurations with labels and values |
| `destroyInactiveSteps` | `boolean` | `false` | When `true`, components are destroyed when leaving a step. When `false`, components remain in DOM but hidden with CSS |
| `activeStep` | `number` | `0` | The currently active step index (supports two-way binding) |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `activeStepChange` | `EventEmitter<number>` | Emitted when the active step changes |

### Types

```typescript
export interface StepConfig {
  label: string;  // Display label for the step
  value: number;  // Step index/value
}
```

## Behavior Modes

### Keep-Alive Mode (default)

When `destroyInactiveSteps = false`:
- All step components are rendered and kept in memory
- Navigation between steps only changes CSS visibility
- Component state is preserved across navigation
- Lifecycle hooks (`ngOnInit`/`ngOnDestroy`) are only called once
- Better for: Forms with user input, complex state management

### Destroy Mode

When `destroyInactiveSteps = true`:
- Only the active step component is rendered
- Navigation destroys the previous component and creates the new one
- Component state is lost when navigating away
- Lifecycle hooks are called on every navigation
- Better for: Memory-intensive components, fresh state on each visit

## Demo

See the `stepper-demo` component for a complete working example that demonstrates both modes side-by-side.

## Requirements

- Angular 19+
- PrimeNG 19+
- @primeng/themes package
