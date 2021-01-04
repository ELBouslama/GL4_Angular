import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = null;
  @Input() size = 50;
  @Input() isDiv = true;
  /*
  1- crée mon evenement
  */
  @Output() selectPersonne = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  /*
  2- Emet l'evenement et elle y met la personne
  */
  sendSelectedPersonne() {
    this.selectPersonne.emit(this.personne);
  }
}
