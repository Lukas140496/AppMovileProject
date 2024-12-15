import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlojamientosService } from '../services/alojamientos.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false
})
export class TabsPage {

  // alojamientos = [
  //   {
  //     titulo: 'Paine, Chile',
  //     distancia: 'A 52 kilómetros de distancia',
  //     precio: '$103,099 CLP noche',
  //     imagen: 'ruta-a-la-imagen.jpg',
  //   },
  //   // Más datos...
  // ];

  alojamientos: any[] = [];

  constructor(private router: Router, private alojamientosService: AlojamientosService) {}

  ngOnInit() {
    this.alojamientosService.getAlojamientos().subscribe(data => {
      this.alojamientos = data.alojamientos;
    });
  }

}
