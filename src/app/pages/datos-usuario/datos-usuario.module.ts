import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosUsuarioPageRoutingModule } from './datos-usuario-routing.module';

import { DatosUsuarioPage } from './datos-usuario.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosUsuarioPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [DatosUsuarioPage]
})
export class DatosUsuarioPageModule { }
