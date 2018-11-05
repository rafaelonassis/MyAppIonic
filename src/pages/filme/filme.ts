import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/model_filme';
import { DestinoPage } from '../destino/destino';



@IonicPage()
@Component({
  selector: 'page-filme',
  templateUrl: 'filme.html',
})
export class FilmePage {

  public filmes: Filme[];

  constructor(public navCtrl: NavController) {

    var f1 = { nome: 'Venom', descricao: 'San Francisco, Estados Unidos. Eddie Brock (Tom Hardy) é um jornalista investigativo, que tem um quadro próprio em uma emissora local. Um dia, ele é escalado para entrevistar Carlton Drake (Riz Ahmed), o criador da Fundação Vida, que tem investido bastante em missões espaciais de forma a encontrar possíveis usos medicinais para a humanidade.' };
    var f2 = { nome: 'Gladiador', descricao: 'Commodus toma o poder e se livra de Maximus, um dos generais favoritos de seu predecessore pai, o grande filósofo, rei e imperador Marcus Aurelius. O bravo guerreiro é forçado a se tornar gladiador nas arenas e precisa lutar pela vida.' };
    var f3 = { nome: 'O Protetor 2', descricao: 'Massachusetts, Estados Unidos. Robert McCall (Denzel Washington) agora trabalha como motorista, ajudando pessoas que enfrentam dificuldades decorrentes de injustiças. Quando sua amiga Susan Plummer (Melissa Leo) é morta durante a investigação de um assassinato na Bélgica, ele decide sair do anonimato e encontrar seu antigo parceiro, Dave (Pedro Pascal), no intuito de encontrar pistas sobre o autor do crime.' };
    
    this.filmes = [f1, f2, f3];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmePage');
  }

  irParaDestino(filme:Filme):void{
    this.navCtrl.push(DestinoPage, {filmeSelecionado: filme});//navctrl > atributo .....tem o metodo push...vai mandar para o Destino Page Passando como paramentro livro selecionado
    }

}
