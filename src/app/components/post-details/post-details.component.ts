import { Component, inject, OnInit } from '@angular/core';
import { IBlog } from '../../model/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {

  post: IBlog | undefined

  activateRoute = inject(ActivatedRoute)
  blogService = inject(BlogService)
  router = inject(Router)

  ngOnInit(): void {
      const postId = Number(this.activateRoute.snapshot.paramMap.get('id'))
      this.post = this.blogService.getPostById(postId)  
  }

  back(){
    this.router.navigate(['/post-list'])
  }

}
