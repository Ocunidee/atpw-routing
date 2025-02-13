import { Component, inject, OnInit, signal, OnDestroy } from '@angular/core'
import { bookDetails } from '../data/book-details'
import { BookDetail } from '../models/book-detail'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { interval } from 'rxjs'

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute)
  protected readonly details = signal<BookDetail | undefined>(undefined)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.details.set(bookDetails.get(Number(id)))

    interval(1000)
      .subscribe({ next: counter => console.log(counter) })
  }

  ngOnDestroy(): void {
    console.log('Component destroyed')
  }
}
