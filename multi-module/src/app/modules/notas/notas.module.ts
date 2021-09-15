import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from '../../notes/notes/notes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgregarNotasComponent } from '../../notes/agregar-notas/agregar-notas.component';
import { EditarNotaComponent } from '../../notes/editar-nota/editar-nota.component';



@NgModule({
  declarations: [NotesComponent, AgregarNotasComponent, EditarNotaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NotesComponent
  ]
})
export class NotasModule { }
