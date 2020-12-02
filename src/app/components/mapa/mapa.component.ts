import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeolocationPosition } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { MapaService } from 'src/app/services/mapa.service';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit
{
  localizacion: GeolocationPosition;
  direccion: string;
  map: any;
  latitude: number;
  longitude: number;

  @ViewChild('map', { static: false }) mapElement: ElementRef;

  constructor(private mapaService: MapaService, private platform: Platform) 
  {
  }

  ngOnInit()
  {
    this.localizar();

  }

  async localizar()
  {
    await this.mapaService.locate();
    this.localizacion = this.mapaService.coords;
    this.latitude = this.localizacion.coords.latitude;
    this.longitude = this.localizacion.coords.longitude;
    this.cargarMapa();
    console.log(this.mapaService.coords);
  }

  async obtenerDireccion()
  {
    this.mapaService.reverse(this.localizacion.coords.latitude, this.localizacion.coords.longitude)
      .then(() => 
      {
        let result = this.mapaService.direccion;
        this.direccion = `${result.thoroughfare} ${result.subThoroughfare} -
                        ${result.locality} ${result.subAdministrativeArea} -
                        ${result.administrativeArea} ${result.countryName} - ${result.postalCode}`;
        console.log(this.direccion);
      });
  }

  cargarMapa()
  {
    let latLng = new google.maps.LatLng(this.localizacion.coords.latitude,
      this.localizacion.coords.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map.addListener('dragend', () =>
    {
      this.latitude = this.map.center.lat();
      this.longitude = this.map.center.lng();
    });
  }





}
