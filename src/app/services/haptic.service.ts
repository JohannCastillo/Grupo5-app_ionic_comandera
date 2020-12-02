import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import
{
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Haptics } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class HapticService
{

  constructor() { }

  static vibrar()
  {
    if (Capacitor.platform != 'web')
    {
      Haptics.vibrate();
    }
    
  }
}
