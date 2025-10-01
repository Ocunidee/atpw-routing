import { Component } from '@angular/core'
import { authors } from '../data/author-list'

@Component({
  selector: 'app-author-list',
  imports: [],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {
  protected readonly authors = authors
}
