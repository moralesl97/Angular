import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {

  noteToEdit:Note = new Note();
  id:string;

  constructor(private notesService:NotesService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.notesService.getNote(this.id).subscribe(result =>{
      this.noteToEdit = result;
    })
  }

  editNote(){
    this.notesService.updateNote(this.noteToEdit).subscribe(result =>{
      console.log(result);
      this.router.navigateByUrl("/notes");
    })
  }

  cancelEdit(){
    this.router.navigateByUrl("/notes");
  }

}
