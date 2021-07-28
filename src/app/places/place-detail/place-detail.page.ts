import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place.interfaz';
import { PlacesServicesService } from '../places-services.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(private activatedRoute:ActivatedRoute, private placesServices:PlacesServicesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      //redirect
      const recipeId = paramMap.get('placeId');
      this.place = this.placesServices.getPlace(recipeId);
      console.log(this.place);
    })
  }

  deletePlace(){
    this.placesServices.deletePlace(this.place.id)
    console.log("klk perro")
  }


}
