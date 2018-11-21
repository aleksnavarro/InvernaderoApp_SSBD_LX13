import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the PlantaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planta',
  templateUrl: 'planta.html',
})
export class PlantaPage {
  plantas=[
  {
    'id':4,
    'cultivo':"planta uno",
    'fecha':"Sun, 23 Apr 1972 00:00:00 GMT",
    'id_clasi':2,
    'id_inv':4
  },
  {
    'id':4,
    'cultivo':"planta uno",
    'fecha':"Sun, 23 Apr 1972 00:00:00 GMT",
    'id_clasi':2,
    'id_inv':4
  }
  ];
  nombre='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http) {
    let id=this.navParams.get('id');
    console.log(id);
    this.nombre=this.navParams.get('nombre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantaPage');
  }

  getPlantas(id){
    this.http.get('/planta/?=id='+id.toString())
    .subscribe(data=>{
      console.log(data.text());
      this.plantas=data.json();
    },error1=>{
      console.log('error');
    });
  }

}
