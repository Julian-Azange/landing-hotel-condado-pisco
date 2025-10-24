import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  lastScrollY = 0;
  isHeaderVisible = true;

  ngOnInit() {
    // Inicializar estado del scroll
    this.onWindowScroll();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevenir scroll del body cuando el menú está abierto
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.pageYOffset;

    // Detectar si se ha hecho scroll hacia abajo o arriba
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      // Scrolling down
      this.isHeaderVisible = false;
    } else {
      // Scrolling up
      this.isHeaderVisible = true;
    }

    // Actualizar estado de scroll
    this.isScrolled = currentScrollY > 50;
    this.lastScrollY = currentScrollY;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    // Cerrar menú móvil en resize
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
  }

  // Método para smooth scroll a secciones
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    this.closeMenu();
  }
}