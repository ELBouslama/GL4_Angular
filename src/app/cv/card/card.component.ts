import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { EmbaucheService } from './../services/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      this.toastr.warning(`
        ${this.personne.name} est déjà sélectionnée
      `);
    } else {
      this.toastr.info(`
        ${this.personne.name} a été sélectionné pour l'embauche
      `);
    }
  }

  details() {
    this.router.navigate(['/cv', this.personne.id]);
  }
}
