import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  size: string;
  capacity: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
  checkIn: string;
  checkOut: string;
  available: boolean;
  popular?: boolean;
  premium?: boolean;
}

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habitaciones.html',
  styleUrls: ['./habitaciones.css']
})
export class Habitaciones implements OnInit {
  selectedFilter = 'all';
  showDetails = false;
  selectedRoom: Room | null = null;

  rooms: Room[] = [
    {
      id: 1,
      name: 'Matrimonial',
      type: 'couple',
      price: 120,
      size: '35m²',
      capacity: 2,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
      description: 'Habitación espaciosa con cama king size, vista al mar y todas las comodidades modernas.',
      amenities: ['WiFi Premium', 'TV 55"', 'Minibar', 'Aire acondicionado', 'Vista al mar', 'Balcón privado'],
      checkIn: '15:00',
      checkOut: '11:00',
      available: true,
      popular: true
    },
    {
      id: 2,
      name: 'Doble',
      type: 'family',
      price: 95,
      size: '28m²',
      capacity: 2,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
      description: 'Perfecta para amigos o familia, con dos camas individuales y vista panorámica.',
      amenities: ['WiFi Premium', 'TV 43"', 'Aire acondicionado', 'Vista panorámica', 'Escritorio'],
      checkIn: '15:00',
      checkOut: '11:00',
      available: true
    },
    {
      id: 3,
      name: 'Suite Presidencial',
      type: 'suite',
      price: 280,
      size: '65m²',
      capacity: 4,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
      description: 'La experiencia más lujosa con terraza privada, jacuzzi y servicio personalizado.',
      amenities: ['WiFi Premium', 'TV 75"', 'Minibar Premium', 'Jacuzzi privado', 'Terraza privada', 'Servicio personalizado', 'Vista 360°'],
      checkIn: '15:00',
      checkOut: '12:00',
      available: true,
      premium: true
    },
    {
      id: 4,
      name: 'Individual',
      type: 'single',
      price: 75,
      size: '20m²',
      capacity: 1,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
      description: 'Habitación cómoda y funcional para viajeros individuales con todas las comodidades necesarias.',
      amenities: ['WiFi Premium', 'TV 32"', 'Aire acondicionado', 'Escritorio', 'Vista al jardín'],
      checkIn: '15:00',
      checkOut: '11:00',
      available: true
    },
    {
      id: 5,
      name: 'Familiar',
      type: 'family',
      price: 150,
      size: '45m²',
      capacity: 4,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop',
      description: 'Espaciosa habitación familiar con dos camas dobles y área de estar separada.',
      amenities: ['WiFi Premium', 'TV 55"', 'Minibar', 'Aire acondicionado', 'Área de estar', 'Vista al mar', 'Balcón'],
      checkIn: '15:00',
      checkOut: '11:00',
      available: true
    }
  ];

  filteredRooms: Room[] = [];

  ngOnInit() {
    this.filteredRooms = this.rooms;
  }

  filterRooms(filter: string) {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredRooms = this.rooms;
    } else {
      this.filteredRooms = this.rooms.filter(room => room.type === filter);
    }
  }

  showRoomDetails(room: Room) {
    this.selectedRoom = room;
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
    this.selectedRoom = null;
  }

  openWhatsApp(room: Room) {
    const message = `Hola! Me interesa reservar la habitación ${room.name} por $${room.price}/noche. ¿Podrían ayudarme con la reserva?`;
    const url = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  getFilterLabel(filter: string): string {
    const labels: { [key: string]: string } = {
      'all': 'Todas',
      'single': 'Individual',
      'couple': 'Pareja',
      'family': 'Familia',
      'suite': 'Suite'
    };
    return labels[filter] || filter;
  }
}
