import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { CodigoQRService } from 'src/app/services/codigo-qr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit
{

  constructor(private escanerQR: CodigoQRService, private router: Router) { }

  ngOnInit()
  {
  }

  async escanear()
  {
    // Ya debe existir un usuario logueado
    const scan = await this.escanerQR.escanear("Escanee el código QR", 'QR_CODE');

    this.procesarQR(scan);
  }

  procesarQR(scan: BarcodeScanResult)
  {
    let textoQR = scan.text.split(':');
    let entidad = textoQR[1];
    let id = textoQR[2];

    switch (entidad)
    {
      case 'Mesa':
        this.router.navigate(['/info-mesa', id]);
        break;
      case 'Producto':
        break;
      case 'Ingreso':
        break;

    }
  }
}