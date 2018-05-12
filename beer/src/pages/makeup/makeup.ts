import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MakeupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makeup',
  templateUrl: 'makeup.html',
})
export class MakeupPage {
  public item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.item = this.navParams.data;

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Thanks for buying',
      subTitle: 'AutoDebit',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeupPage');
  }

}
