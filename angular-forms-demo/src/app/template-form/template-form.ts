import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateFormComponent {
  user = {
    name: '',
    email: '',
    age: null,
    password: '',
    confirmPassword: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Template Form Submitted:', this.user);
      alert('Template form submitted successfully!');
    }
  }
}