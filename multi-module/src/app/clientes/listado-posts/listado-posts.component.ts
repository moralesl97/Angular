import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-listado-posts',
  templateUrl: './listado-posts.component.html',
  styleUrls: ['./listado-posts.component.css']
})
export class ListadoPostsComponent implements OnInit {

  posts:Post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(result =>{
      this.posts = result;
    })
  }

}
