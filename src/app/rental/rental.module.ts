import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RentalComponent } from "./rental.component";
import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalListItemComponent } from "./rental-list/rental-list-item/rental-list-item.component";

import { RentalService } from "./shared/rental.service";

const routes: Routes = [
  {
    path: "rentals",
    component: RentalComponent,
    children: [
      { path: "", component: RentalListComponent }
      // { path: ':rentalId', component: RentalDetailComponent}
    ]
  }
];
@NgModule({
  declarations: [RentalComponent, RentalListComponent, RentalListItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [RentalService]
})
export class RentalModule {}
