import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../../models/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes:Note[] = [];
  noteToEdit:Note = new Note();
  editUrl = "/editar-nota/";

  constructor(private notesService:NotesService, private router:Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notesService.getNotes().subscribe(result => {
      this.notes = result;
    })
  }

  deleteNote(id:string){
    this.notesService.deleteNote(id).subscribe(result =>{
      alert(result['message']);
      console.log(result);
      this.getNotes();
    })
  }

  editNote(id:string){
    console.log(id);
    this.router.navigateByUrl(this.editUrl+id);
  }

}
