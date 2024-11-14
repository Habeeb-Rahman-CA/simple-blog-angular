import { Injectable } from '@angular/core';
import { IBlog } from './model/interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: IBlog[] = [
    { id: 1, title: 'Angular Basics', content: 'Angular is a powerful framework for building dynamic web applications. It uses components as building blocks, each consisting of a template (HTML), class (logic), and styles (CSS). Apps are organized into modules, with the root module bootstrapping the app. Data binding allows communication between the component and the UI, while directives like *ngIf and *ngFor add behavior to elements. Services provide reusable logic and are injected into components through dependency injection. Angular’s router handles navigation, and the CLI streamlines development tasks. These basics lay the foundation for creating scalable, maintainable web apps with Angular.' },
    { id: 2, title: 'Routing in Angular', content: 'Angular Routing allows navigation between different views or pages in a single-page application (SPA). It maps URLs to components, enabling seamless transitions without reloading the page. By defining routes in the app’s routing module, you can specify which component should be displayed for each URL path. The RouterLink directive is used in templates to link to different views, while RouterOutlet acts as a placeholder for the routed component. Additionally, Angular supports features like route guards for controlling access and lazy loading for optimizing performance by loading modules only when needed.' },
    { id: 3, title: 'Angular Services', content: 'An Angular Service is a class that provides business logic, data management, or functionality to components and other services. Services promote code reusability and separation of concerns. They are typically injected into components or other services using Angular’s Dependency Injection system. This allows components to focus on the UI while services handle the logic. Services can be used for tasks like fetching data from an API, managing state, or encapsulating complex operations. By keeping logic in services, Angular applications become more modular, maintainable, and testable.' },
  ]

  getPosts(): IBlog[] {
    return this.posts
  }

  getPostById(id: number): IBlog | undefined {
    return this.posts.find((item) => item.id === id)
  }

}
