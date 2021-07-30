import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesServicesService } from '../places-services.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private  placesService:PlacesServicesService, private router:Router) { }

  ngOnInit() {
  }  

  saveNewPlace(title,imageURL){
    this.placesService.addPlaces(title.value,imageURL.value);
    this.router.navigate(['/places']);
  }

}
