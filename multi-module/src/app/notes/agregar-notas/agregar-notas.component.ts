import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent implements OnInit {

  newNote:Note = new Note();

  constructor(private notesService:NotesService,private router: Router) { }

  ngOnInit(): void {
  }

  addNote(){
    this.notesService.addNote(this.newNote).subscribe(result => {
      console.log(result);
      this.newNote = new Note();
      this.router.navigate(['/notes']);
    })
  }

}
