import {Component, OnInit} from '@angular/core';
import {UtentiService} from '../service/utenti.service';
import {Utente} from '../model/utente';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit {

  utente: Utente[] = [];

  //
  // page = 1;
  // pageSize = 10;
  //
  // sortIconName = 'expand_less';
  // key = 'data';
  // reverse = true;
  // tabellaEsiste = true;
  displayedColumns: string[] = ['userId'];

  constructor(private utenteService: UtentiService) {
  }

  ngOnInit(): void {
    this.getUtente();
    console.log(this.utente);
  }

  getUtente(): void {
    this.utenteService.getUtenti().subscribe((utente: Utente[]) => {
      this.utente = utente;
      console.log('utente' + utente);
    });
  }

  // sort(key: any): void {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  //   if (this.reverse) {
  //     this.sortIconName = 'expand_more';
  //   } else {
  //     this.sortIconName = 'expand_less';
  //   }
  // }
}
