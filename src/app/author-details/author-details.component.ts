import { Component, OnInit } from '@angular/core'
import { AuthorDetail } from '../models/author-detail'
import { authorDetails } from '../data/author-details'

@Component({
  selector: 'app-author-details',
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss'
})
export class AuthorDetailsComponent implements OnInit {
  details: AuthorDetail | undefined

  ngOnInit(): void {
    this.details = authorDetails.get(1)
  }
}
