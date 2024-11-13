import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { IBlog } from '../../model/interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  posts: IBlog[] = []

  blogService = inject(BlogService)
  router = inject(Router)

  ngOnInit(): void {
    this.posts = this.blogService.getPosts()
  }

  goToPost(id: number){
    this.router.navigate(['/post-details', id])
  }

}
