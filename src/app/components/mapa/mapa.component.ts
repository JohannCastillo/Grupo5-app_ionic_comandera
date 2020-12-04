import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GeolocationPosition } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { MapaService } from 'src/app/services/mapa.service';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit
{
  usuario: Usuario = AuthService.usuario;
  localizacion: GeolocationPosition;
  direccion: string;
  map: any;
  latitude: number;
  longitude: number;
  origen: string;
  destino: string;
  servicioDirecciones = new google.maps.DirectionsService;
  visualizacionDirecciones = new google.maps.DirectionsRenderer;

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
    this.localizacion = this.mapaService.posicion;
    this.latitude = this.localizacion.coords.latitude;
    this.longitude = this.localizacion.coords.longitude;
    this.cargarMapa();
    console.log(this.mapaService.posicion);
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

  calcularDistancia()
  {
    const that = this;

    this.servicioDirecciones.route({
      origin: this.origen,
      destination: this.destino,
      travelMode: 'DRIVING'
    }, (response, status) =>
    {
      if (status === 'OK')
      {
        that.visualizacionDirecciones.setDirections(response);
      }
      else
      {
        console.error("ERROR!");
      }
    });
  }

  cargarMapa()
  {
    let latLng = new google.maps.LatLng(this.localizacion.coords.latitude, this.localizacion.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Se crea mapa
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.map.setCenter(latLng);

    this.map.addListener('dragend', () =>
    {
      this.latitude = this.map.center.lat();
      this.longitude = this.map.center.lng();
    });

    const icon = {
      url: this.usuario.foto.url,
      scaledSize: new google.maps.Size(50, 50)
    };

    const shape = {
      coords: [this.localizacion.coords.longitude, this.localizacion.coords.latitude, 50],
      type: 'circle'
    }

    // Se crea marcador para el mapa
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      label: 'Mi ubicación',
      title: 'Mi ubicación',
      icon: icon
    });

    marker.addListener('click', () =>
    {
      console.log(marker.getPosition());
    })

    this.visualizacionDirecciones.setMap(this.map);
  }





}
