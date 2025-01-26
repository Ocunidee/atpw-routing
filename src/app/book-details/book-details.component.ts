import { Component, OnInit } from '@angular/core'
import { bookDetails } from '../data/book-details'
import { BookDetail } from '../models/book-detail'

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
  details: BookDetail | undefined

  ngOnInit(): void {
    this.details = bookDetails.get(1)
  }
}
