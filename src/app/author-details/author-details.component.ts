import { Component, inject, OnInit, signal } from '@angular/core'
import { AuthorDetail } from '../models/author-detail'
import { authorDetails } from '../data/author-details'
import { ActivatedRoute, RouterLink } from '@angular/router'

@Component({
  selector: 'app-author-details',
  imports: [RouterLink],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss'
})
export class AuthorDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  protected readonly details = signal<AuthorDetail | undefined>(undefined)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.details.set(authorDetails.get(Number(id)))
  }
}
