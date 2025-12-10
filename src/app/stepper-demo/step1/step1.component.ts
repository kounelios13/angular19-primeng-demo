import { Component, OnInit, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputTextModule } from 'primeng/inputtext'
import { FloatLabelModule } from 'primeng/floatlabel'

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule, InputTextModule, FloatLabelModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css',
})
export class Step1Component implements OnInit, OnDestroy {
  ngOnInit(): void {
    const initTimestamp = new Date().toISOString()
    console.log(`[Step1Component] ngOnInit called at: ${initTimestamp}`)
  }

  ngOnDestroy(): void {
    const destroyTimestamp = new Date().toISOString()
    console.log(`[Step1Component] ngOnDestroy called at: ${destroyTimestamp}`)
  }
}
