import { Component } from '@angular/core';
import { TemplateFormComponent } from '../template-form/template-form';
import { ReactiveFormComponent } from '../reactive-form/reactive-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-comparison',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent, CommonModule],
  templateUrl: './forms-comparison.html',
  styleUrl: './forms-comparison.css'
})
export class FormsComparisonComponent {
  showComparison = false;

  toggleComparison() {
    this.showComparison = !this.showComparison;
  }
}