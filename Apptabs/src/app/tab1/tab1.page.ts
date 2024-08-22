import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { iFilme } from '../model/iFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: iFilme[] = [
    {
    nome: 'mortal kombar',
    lancamento: '15/05/2022',
    duracao:'1h50',
    classificacao: 9,
    cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/44aCR6cjH0FbzW6PMw3Ega178iW.jpg',
    generos:['acao', 'fantasia', 'aventura'],
    pagina: '/mortal-kombat',
    favorito: false
    },
    {
      nome: 'Alien: Romulus (2024)',
      lancamento: '15-08-2024',
      duracao:'1h 59m',
      classificacao: 7,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6rr7r6cMWMYlgJFBGyPkSHEBDkk.jpg',
      generos:['Terror', 'ficção cientifica'],
      pagina: '/alien-romulus',
      favorito: false
      },
  ];

}
