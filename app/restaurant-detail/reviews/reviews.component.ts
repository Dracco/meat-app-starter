import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service'
import {ActivatedRoute} from '@angular/router'
import { Observable } from "rxjs/observable";
import { Reviews } from "app/restaurant-detail/reviews/reviews.model";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<Reviews[]>

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurants(this.route.parent.snapshot.params['id'])
  }

}
