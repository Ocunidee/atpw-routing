import { Component } from '@angular/core'
import { authors } from '../data/author-list'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-author-list',
  imports: [RouterLink],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {
  protected readonly authors = authors
}
