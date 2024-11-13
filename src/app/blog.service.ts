import { Injectable } from '@angular/core';
import { IBlog } from './model/interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: IBlog[] = [
    { id: 1, title: 'Angular Basics', content: 'Content of Angular Basics' },
    { id: 2, title: 'Routing in Angular', content: 'Content of Routing in Angular' },
    { id: 3, title: 'Angular Services', content: 'Content of Angular Services' },
  ]

  getPosts(): IBlog[] {
    return this.posts
  }

  getPostById(id: number): IBlog | undefined {
    return this.posts.find((item) => item.id === id)
  }

}
