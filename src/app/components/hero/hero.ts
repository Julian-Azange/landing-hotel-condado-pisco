import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements OnInit {
  isVisible = false;
  parallaxOffset = 0;

  ngOnInit() {
    // Activar animaciones después de un breve delay
    setTimeout(() => {
      this.isVisible = true;
      this.activateFadeInAnimations();
    }, 300);
  }

  private activateFadeInAnimations() {
    // Activar todas las animaciones fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200); // Escalonar las animaciones
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Efecto parallax suave
    this.parallaxOffset = window.pageYOffset * 0.5;
  }

  // Método para scroll suave a secciones
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Método para abrir WhatsApp
  openWhatsApp() {
    const phoneNumber = '51987654321';
    const message = 'Hola! Me interesa hacer una reserva en Hotel Condado Pisco.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
