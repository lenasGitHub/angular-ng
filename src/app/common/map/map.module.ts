import { NgModule } from "@angular/core";

import { MapComponent } from "./map.component";

import { AgmCoreModule } from "@agm/core";

import { MapService } from "./map.service";

@NgModule({
  declarations: [MapComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCgifFgVu4wKT7zdrHcPG5GBCkUpVj3JAs"
    })
  ],
  exports: [MapComponent],
  providers: [MapService],
  bootstrap: []
})
export class MapModule {}
