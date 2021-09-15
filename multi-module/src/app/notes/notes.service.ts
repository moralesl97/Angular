import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Note } from '../models/note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  url = "http://localhost:3000/notes/";

  constructor(private httpClient:HttpClient) { }

  getNotes():Observable<Note[]>{
    let notes:Observable<Note[]>;
    notes = this.httpClient.get<Note[]>(this.url).pipe(
      catchError(this.handleError)
    );
    return notes;
    
  }

  getNote(id:string):Observable<Note>{
    let note:Observable<Note>;
    note = this.httpClient.get<Note>(this.url+id).pipe(
      catchError(this.handleError)
    );
    return note;
  }

  addNote(note:Note):Observable<Note>{
    return this.httpClient.post<Note>(this.url, note, httpOptions)
    .pipe(
      catchError(
        this.handleError
      )
    );
  }

  updateNote(note:Note):Observable<Note>{
    let url = this.url + `${note._id}`;
    return this.httpClient.put<Note>(url, note, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteNote(id:string):Observable<unknown>{
    let url =  this.url + `${id}`
    return this.httpClient.delete(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error:HttpErrorResponse){
    let mensaje = "error desconocido";
    if(error.error instanceof ErrorEvent){
      mensaje = `Error: ${error.error.message}`;
    }
    else{
      mensaje = `Error: ${error.status} ${error.message}`;
    }
    return throwError(mensaje);
  }
}
