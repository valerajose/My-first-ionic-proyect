import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesServicesService } from '../places/places-services.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []

  constructor(private placeService:PlacesServicesService, private router:Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }

  ionViewWillEnter() {
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
   this.router.navigate(['/new-place']);
  }

}
