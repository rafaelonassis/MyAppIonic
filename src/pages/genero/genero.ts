import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/model_filme';
import { Destino1Page } from '../destino1/destino1';



@IonicPage()
@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {

  public generos: Genero[];
  
  constructor(public navCtrl: NavController) {

    var g1 = { nome: 'Venom', genero: 'Ação, Ficção científica, Suspense' };
    var g2 = { nome: 'Gladiador', genero: 'Drama, Ação, Épico' };
    var g3 = { nome: 'O Protetor 2', genero: 'Ação' };
    
    this.generos = [g1, g2, g3];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }

 irParaDestino1(genero:Genero):void{
    this.navCtrl.push(Destino1Page, {generoSelecionado: genero});//navctrl > atributo .....tem o metodo push...vai mandar para o Destino Page Passando como paramentro livro selecionado
    }

}
