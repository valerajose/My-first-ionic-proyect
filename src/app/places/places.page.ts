import { Component, OnInit } from '@angular/core';
import { PlacesServicesService } from '../places/places-services.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []

  constructor(private placeService:PlacesServicesService) { }

  ngOnInit() {

    this.places = this.placeService.getPlaces()

  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }

}
