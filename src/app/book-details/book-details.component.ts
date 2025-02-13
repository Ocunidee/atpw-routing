import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core'
import { bookDetails } from '../data/book-details'
import { BookDetail } from '../models/book-detail'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { interval } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  details: BookDetail | undefined

  constructor(
    private route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.details = bookDetails.get(Number(id))

    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({ next: counter => console.log(counter) })
  }

  ngOnDestroy(): void {
    console.log('Component destroyed')
  }
}
