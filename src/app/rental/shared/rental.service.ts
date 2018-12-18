import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService {
  constructor(private http: HttpClient) {}

  public getRental(): Observable<any> {
    return this.http.get("/api/v1/rentals");
  }

  /**
   * getRentalById
   */
  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get("/api/v1/rentals/" + rentalId);
  }
}
