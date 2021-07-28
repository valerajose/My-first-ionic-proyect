import { Injectable } from '@angular/core';
import {Place} from '../places/place.interfaz';

@Injectable({
  providedIn: 'root'
})
export class PlacesServicesService {

  constructor() { }

  private places: Place[] = [
    {
      id: '1',
      title: 'Leon',
      imageURL: 'https://t1.ea.ltmcdn.com/es/images/1/3/4/tipos_de_leones_nombres_y_caracteristicas_24431_600_square.jpg',
      comments: ['esto es un ejeplo pára este beta','berro mano esta fino']
    },
    {
      id: '2',
      title: 'Tigre',
      imageURL: 'https://www.diainternacionalde.com/imagenes/dias/07-29_dia-internacional-del-tigre.jpg',
      comments: ['esto es otro ejeplo pára este otro beta','berro mano esta fino']
    },
    {
      id: '3',
      title: 'Tigre2.0',
      imageURL: 'https://www.diainternacionalde.com/imagenes/dias/07-29_dia-internacional-del-tigre.jpg',
      comments: []
    }
  ]
   
  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place =>{
        return place.id === placeId
      })
    }
  }

  addPlaces(title: string, imageURL:string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    })
  }


  deletePlace(placeId: string) {
    this.places = this.places.filter(place =>{
      return place.id !== placeId
    })
  }


}
