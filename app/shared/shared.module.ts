import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RatingComponent } from "app/shared/rating/rating.component";
import { RadioComponent } from "app/shared/radio/radio.component";
import { InputComponent } from "app/shared/input/input.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { OrderService } from "app/order/order.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "app/shared/messages/notification.service";
import { LoginService} from '../security/login/login.service'
import { LoggedInGuard } from "app/security/loggedin.guard";

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService, LoginService, LoggedInGuard]
    }
  }
}
