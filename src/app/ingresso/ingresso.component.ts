import { Component, OnInit, Input } from '@angular/core';
import { IngressoModel } from './ingresso.model';

@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.css']
})
export class IngressoComponent implements OnInit {

  ingresso: IngressoModel = new IngressoModel();

  filmes = ['Clube da Luta', 'Titanic', 'Senhor dos Anéis'];

  @Input() filme: Array<string> = new Array();

  constructor() { }

  ngOnInit() {

  }

  comprar(event: any){
    console.log('Evento: ', event);
    console.log('Ingresso: ', this.ingresso);

    alert('Compra realizada com sucesso!');
    alert('Filme selecionado: ' + this.ingresso.filme);
  }

}
