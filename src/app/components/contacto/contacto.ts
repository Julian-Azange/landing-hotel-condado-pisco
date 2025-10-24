import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Teléfono',
      value: '+51 987 654 321',
      link: 'tel:+51987654321'
    },
    {
      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      value: 'reservas@hotelcondadopisco.com',
      link: 'mailto:reservas@hotelcondadopisco.com'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Dirección',
      value: 'Av. Costanera 123, Pisco, Perú'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Horarios',
      value: '24/7 - Siempre disponibles'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      checkIn: [''],
      checkOut: [''],
      guests: [''],
      roomType: ['']
    });
  }

  ngOnInit() {
    // Initialize form
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;

        // Reset form after 3 seconds
        setTimeout(() => {
          this.submitSuccess = false;
          this.contactForm.reset();
        }, 3000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  openWhatsApp() {
    const formData = this.contactForm.value;
    const message = `Hola! Me interesa hacer una reserva en Hotel Condado Pisco.

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Asunto: ${formData.subject}
Mensaje: ${formData.message}
${formData.checkIn ? `Check-in: ${formData.checkIn}` : ''}
${formData.checkOut ? `Check-out: ${formData.checkOut}` : ''}
${formData.guests ? `Huéspedes: ${formData.guests}` : ''}
${formData.roomType ? `Tipo de habitación: ${formData.roomType}` : ''}`;

    const url = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${this.getFieldLabel(fieldName)} es requerido`;
      if (field.errors['email']) return 'Email inválido';
      if (field.errors['minlength']) return `${this.getFieldLabel(fieldName)} debe tener al menos ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['pattern']) return `${this.getFieldLabel(fieldName)} tiene un formato inválido`;
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      'name': 'Nombre',
      'email': 'Email',
      'phone': 'Teléfono',
      'subject': 'Asunto',
      'message': 'Mensaje'
    };
    return labels[fieldName] || fieldName;
  }
}
