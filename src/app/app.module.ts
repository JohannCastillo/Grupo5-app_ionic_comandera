import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ComponentsModule } from './components/components.module';
import { environment } from 'src/environments/environment';
import { ProfileGuardService } from './services/profile-guard.service';
import { HttpClientModule } from '@angular/common/http';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Plugins
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
    [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      ComponentsModule,
      ReactiveFormsModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      ComponentsModule,
      AngularFireStorageModule,
      HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireDatabase,
    ProfileGuardService,
    GooglePlus,
    NotificationsService,
    NativeGeocoder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
