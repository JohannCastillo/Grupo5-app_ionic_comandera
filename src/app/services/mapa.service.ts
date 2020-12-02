import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { GeolocationPosition, Plugins } from "@capacitor/core";

const { Geolocation, Network } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class MapaService
{
  coords: GeolocationPosition;

  constructor(private nativeGeocoder: NativeGeocoder) 
  {

  }

  async locate()
  {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates;
  }

  public reverse(latitude: number, longitude: number): string
  {
    let direccion;

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) =>
      {
        console.log(JSON.stringify(result[0]));
        direccion = JSON.stringify(result[0]);
      })
      .catch((error: any) => console.log(error));

    return direccion;
  }

}

