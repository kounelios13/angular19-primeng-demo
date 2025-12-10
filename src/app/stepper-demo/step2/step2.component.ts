import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, InputTextModule, FloatLabelModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css',
})
export class Step2Component implements OnInit, OnDestroy {
  ngOnInit(): void {
    const initTimestamp = new Date().toISOString()
    console.log(`[Step2Component] ngOnInit called at: ${initTimestamp}`)
  }

  ngOnDestroy(): void {
    const destroyTimestamp = new Date().toISOString()
    console.log(`[Step2Component] ngOnDestroy called at: ${destroyTimestamp}`)
  }
}
