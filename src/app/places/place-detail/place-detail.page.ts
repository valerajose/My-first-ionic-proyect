import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Place } from '../place.interfaz';
import { PlacesServicesService } from '../places-services.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place

  constructor(private activatedRoute:ActivatedRoute, private placesServices:PlacesServicesService, private router: Router, private alertCtrl:AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      //redirect
      const recipeId = paramMap.get('placeId');
      this.place = this.placesServices.getPlace(recipeId);
      console.log(this.place);
    })
  }

  async deletePlace(){
    const alerElement = await this.alertCtrl.create({
      header: '¿Estas seguro de eliminar?',
      message: 'Be careful',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () =>{
            this.placesServices.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]      
    });
    await alerElement.present();
  }


}
