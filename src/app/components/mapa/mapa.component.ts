import { Component, OnInit } from '@angular/core';
import { GeolocationPosition } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit
{
  localizacion: GeolocationPosition;
  direccion: string;

  constructor(private mapaService: MapaService, private platform: Platform) 
  {
  }

  ngOnInit()
  {
    this.mapaService.locate();
    this.localizacion = this.mapaService.coords;
    console.log(this.mapaService.coords);
  }

  async localizar()
  {
    this.mapaService.locate();
    this.localizacion = this.mapaService.coords;
    console.log(this.mapaService.coords);
  }

  obtenerDireccion()
  {
    this.direccion = this.mapaService.reverse(this.localizacion.coords.latitude,
      this.localizacion.coords.longitude);
  }

}
