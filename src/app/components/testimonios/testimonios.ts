import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  stayDate: string;
  roomType: string;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrls: ['./testimonios.css']
})
export class Testimonios implements OnInit {
  currentIndex = 0;
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      location: 'Lima, Perú',
      rating: 5,
      text: 'Una experiencia absolutamente increíble. El servicio es excepcional y las vistas al mar son espectaculares. Definitivamente regresaremos.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1000&auto=format&fit=crop',
      stayDate: 'Enero 2024',
      roomType: 'Suite Presidencial'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      location: 'Buenos Aires, Argentina',
      rating: 5,
      text: 'El hotel superó todas nuestras expectativas. La atención al detalle y la elegancia del lugar son incomparables. Altamente recomendado.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
      stayDate: 'Diciembre 2023',
      roomType: 'Habitación Matrimonial'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      location: 'Madrid, España',
      rating: 5,
      text: 'Perfecto para una escapada romántica. El spa es maravilloso y la comida del restaurante es excepcional. Un verdadero paraíso.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
      stayDate: 'Noviembre 2023',
      roomType: 'Habitación Doble'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      location: 'São Paulo, Brasil',
      rating: 5,
      text: 'La ubicación es perfecta y el personal muy atento. Las habitaciones son espaciosas y cómodas. Una experiencia de lujo total.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
      stayDate: 'Octubre 2023',
      roomType: 'Habitación Familiar'
    },
    {
      id: 5,
      name: 'Isabella Torres',
      location: 'Bogotá, Colombia',
      rating: 5,
      text: 'Increíble desde el momento en que llegamos. El concierge nos ayudó con todo y la piscina infinita es espectacular. Volveremos pronto.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
      stayDate: 'Septiembre 2023',
      roomType: 'Suite Presidencial'
    }
  ];

  ngOnInit() {
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
