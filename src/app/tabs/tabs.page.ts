import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  alojamientos = [
    {
      titulo: 'Paine, Chile',
      distancia: 'A 52 kilómetros de distancia',
      precio: '$103,099 CLP noche',
      imagen: 'ruta-a-la-imagen.jpg',
    },
    // Más datos...
  ];
  constructor(private router: Router) {}

  irAlMapa() {
    this.router.navigate(['/map']);
  }

}
