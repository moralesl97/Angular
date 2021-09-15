import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes/notes.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { AgregarNotasComponent } from './notes/agregar-notas/agregar-notas.component';
import { EditarNotaComponent } from './notes/editar-nota/editar-nota.component';


const routes: Routes = [
  {path: "notes", component: NotesComponent},
  {path: "agregar-notas", component: AgregarNotasComponent},
  {path: "editar-nota/:id", component: EditarNotaComponent},
  {path: "clients", component: ListadoClientesComponent},
  {path: "facturas", component: ListadoFacturasComponent},
  {path: "", redirectTo:"clients", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
