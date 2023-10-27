import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.scss']
})
export class ExemploPipesComponent {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Valor Assíncrono")
    }, 5000)
  })

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'))
}
