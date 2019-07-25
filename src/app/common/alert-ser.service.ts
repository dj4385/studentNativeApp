import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertSerService {

  constructor(private _alertController: AlertController) { }

  async failure(_msg) {
    const alert = await this._alertController.create({
      header: 'Error',
      message: _msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async setSupplierErrorMsg(status) {
    const alert = await this._alertController.create({
      header: 'Error',
      // subHeader: 'Subtitle',
      message: status,
      buttons: ['OK']
    });

    await alert.present();
  }
  async success(msg) {
    const alert = await this._alertController.create({
      header: 'Success',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
