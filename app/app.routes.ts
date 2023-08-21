import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "app/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "app/restaurant-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "app/order-summary/order-summary.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', loadChildren: 'app/order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: '**', component: NotFoundComponent}
]
