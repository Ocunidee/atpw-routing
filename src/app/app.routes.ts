import { Routes } from '@angular/router'
import { AuthorDetailsComponent } from './author-details/author-details.component'
import { AuthorListComponent } from './author-list/author-list.component'
import { BookDetailsComponent } from './book-details/book-details.component'
import { BookListComponent } from './book-list/book-list.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'authors',
    children: [
      { path: '', component: AuthorListComponent, pathMatch: 'full' },
      { path: ':id', component: AuthorDetailsComponent }
    ]
  },
  {
    path: 'books',
    children: [
      { path: '', component: BookListComponent, pathMatch: 'full' },
      { path: ':id', component: BookDetailsComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
]
