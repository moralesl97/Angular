import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './Components/encabezado/encabezado.component';
import { MenuLateralComponent } from './Components/menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './Components/pie-pagina/pie-pagina.component';
import { ContenidoPrincipalComponent } from './Components/contenido-principal/contenido-principal.component';
import { AvisosComponent } from './Components/avisos/avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuLateralComponent,
    PiePaginaComponent,
    ContenidoPrincipalComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
