import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';

/**
 * Generated class for the AdicionaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-cliente',
  templateUrl: 'adiciona-cliente.html',
})
export class AdicionaClientePage {
  public cliente: Cliente;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = new Cliente();
  }

  cadastraCliente() {
    console.log(this.cliente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaClientePage');
  }

}
