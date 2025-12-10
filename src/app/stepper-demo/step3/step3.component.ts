import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css',
})
export class Step3Component implements OnInit, OnDestroy {
  ngOnInit(): void {
    const initTimestamp = new Date().toISOString()
    console.log(`[Step3Component] ngOnInit called at: ${initTimestamp}`)
  }

  ngOnDestroy(): void {
    const destroyTimestamp = new Date().toISOString()
    console.log(`[Step3Component] ngOnDestroy called at: ${destroyTimestamp}`)
  }
}
