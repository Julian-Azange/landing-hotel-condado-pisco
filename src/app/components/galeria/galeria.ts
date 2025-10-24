import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class Galeria implements OnInit {
  selectedCategory = 'all';
  selectedImage: GalleryImage | null = null;
  showModal = false;

  images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
      alt: 'Vista del hotel desde el mar',
      category: 'exterior',
      title: 'Vista Panorámica',
      description: 'Vista espectacular del hotel desde el océano Pacífico'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
      alt: 'Habitación matrimonial de lujo',
      category: 'habitaciones',
      title: 'Suite Presidencial',
      description: 'Habitación de lujo con vista al mar'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      alt: 'Piscina infinita',
      category: 'servicios',
      title: 'Piscina Infinita',
      description: 'Piscina con vista panorámica al océano'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      alt: 'Restaurante gourmet',
      category: 'servicios',
      title: 'Restaurante Gourmet',
      description: 'Cocina de autor con ingredientes frescos'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
      alt: 'Spa y wellness',
      category: 'servicios',
      title: 'Spa & Wellness',
      description: 'Tratamientos de lujo para tu relajación'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop',
      alt: 'Lobby del hotel',
      category: 'interior',
      title: 'Lobby Principal',
      description: 'Recepción elegante con diseño moderno'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070&auto=format&fit=crop',
      alt: 'Terraza con vista al mar',
      category: 'exterior',
      title: 'Terraza Privada',
      description: 'Espacio exclusivo con vista al océano'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      alt: 'Habitación familiar',
      category: 'habitaciones',
      title: 'Habitación Familiar',
      description: 'Espaciosa habitación para toda la familia'
    }
  ];

  filteredImages: GalleryImage[] = [];

  categories = [
    { key: 'all', label: 'Todas' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'habitaciones', label: 'Habitaciones' },
    { key: 'servicios', label: 'Servicios' },
    { key: 'interior', label: 'Interior' }
  ];

  ngOnInit() {
    this.filteredImages = this.images;
  }

  filterImages(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(img => img.category === category);
    }
  }

  openModal(image: GalleryImage) {
    this.selectedImage = image;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.selectedImage) {
      const currentIndex = this.filteredImages.findIndex(img => img.id === this.selectedImage!.id);
      const nextIndex = (currentIndex + 1) % this.filteredImages.length;
      this.selectedImage = this.filteredImages[nextIndex];
    }
  }

  prevImage() {
    if (this.selectedImage) {
      const currentIndex = this.filteredImages.findIndex(img => img.id === this.selectedImage!.id);
      const prevIndex = currentIndex === 0 ? this.filteredImages.length - 1 : currentIndex - 1;
      this.selectedImage = this.filteredImages[prevIndex];
    }
  }
}
