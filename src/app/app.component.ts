import { Component } from '@angular/core';
import { TrepComputoService } from './services/trep-computo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'fraudefront';

  items = Array.from(Array(10).keys()).map( x => x + 1001 );
  data = [];
  dataComp = [];
  minMesa = 1001;
  maxMesa = 1050;
  ci = 0;

  constructor( public compService: TrepComputoService ) {
    this.generate( this.minMesa, this.maxMesa );
  }


  search() {
    console.log( this.maxMesa, this.minMesa );
    this.generate( this.minMesa, this.maxMesa );
  }

  generate( min: number, max: number ) {
    this.items = [];
    this.data = [];
    this.dataComp = [];

    for (let i = min; i <= max; i++) {
      console.log( i );
      this.items.push(i);
      this.data[i] = this.compService.getDataTableTrep( i );
      this.dataComp[i] = this.compService.getDataTableComp( i );
    }
  }

  searchByCI() {
    this.items = [];
    this.data = [];
    this.dataComp = [];

    this.compService.getMesaElector( this.ci ).subscribe( i => {
      console.log( i );
      this.items.push(i);
      this.data[i] = this.compService.getDataTableTrep( i );
      this.dataComp[i] = this.compService.getDataTableComp( i );
    });
  }

}
