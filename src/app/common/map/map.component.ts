import { MapService } from "./map.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  @Input() location: string;
  title: string = "My first AGM project";
  lat: number;
  lng: number;
  constructor(private mapService: MapService) {}

  ngOnInit() {}

  mapReadyHandler() {
    this.mapService.geocodeLocation(this.location).subscribe(coordinates => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    });
  }
}
