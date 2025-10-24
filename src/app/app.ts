import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Habitaciones } from './components/habitaciones/habitaciones';
import { Servicios } from './components/servicios/servicios';
import { Galeria } from './components/galeria/galeria';
import { Testimonios } from './components/testimonios/testimonios';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    Hero,
    Habitaciones,
    Servicios,
    Galeria,
    Testimonios,
    Contacto,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  title = 'hotel-condado-pisco';
}
