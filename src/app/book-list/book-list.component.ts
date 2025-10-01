import { Component } from '@angular/core'
import { books } from '../data/book-list'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  protected readonly books = books
}
