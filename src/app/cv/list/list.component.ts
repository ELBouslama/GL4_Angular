import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor(
    private cvService: CvService,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => this.personnes = personnes,
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        this.tostr.warning(`Les données sont fake. Prière de contacter l'admin`);
        console.log(erreur);
      }
    );
  }
  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
