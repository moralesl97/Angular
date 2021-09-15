import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoClientesComponent } from '../../clientes/listado-clientes/listado-clientes.component';
import { ListadoPostsComponent } from '../../clientes/listado-posts/listado-posts.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListadoClientesComponent, ListadoPostsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListadoClientesComponent,
    ListadoPostsComponent
  ]
})
export class ClientesModule { }
