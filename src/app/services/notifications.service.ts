import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import
  {
    Plugins,
    PushNotification,
    PushNotificationToken,
    PushNotificationActionPerformed,
  } from '@capacitor/core';

const { PushNotifications } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class NotificationsService
{



  constructor(private router: Router) { }

  public initPush()
  {
    if (Capacitor.platform != 'web')
    {
      this.registerPush();
      console.log('Registrando...');
    }
  }

  private registerPush()
  {

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then(result =>
    {
      if (result.granted)
      {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else
      {
        // Show some error
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) =>
      {
        /* alert('Push registration success, token: ' + token.value); */
      },
    );

    PushNotifications.addListener('registrationError', (error: any) =>
    {
      /* alert('Error on registration: ' + JSON.stringify(error)); */
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) =>
      {
        /* alert('Push received: ' + JSON.stringify(notification)); */
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) =>
      {
        /* alert('Push action performed: ' + JSON.stringify(notification)); */
      },
    );
  }

}