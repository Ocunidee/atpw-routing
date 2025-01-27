import { Component, OnInit } from '@angular/core'
import { bookDetails } from '../data/book-details'
import { BookDetail } from '../models/book-detail'
import { ActivatedRoute, RouterLink } from '@angular/router'

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
  details: BookDetail | undefined

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.details = bookDetails.get(Number(id))
  }
}
