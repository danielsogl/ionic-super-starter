import { IonicPage } from 'ionic-angular/umd/navigation/ionic-page';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
