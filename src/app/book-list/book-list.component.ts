import { Component } from '@angular/core'
import { books } from '../data/book-list'

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  protected readonly books = books
}
