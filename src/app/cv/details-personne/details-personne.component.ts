import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from './../services/cv.service';
import { Personne } from './../model/personne';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css'],
})
export class DetailsPersonneComponent implements OnInit {
  personne: Personne = null;
  /*
    1- Récupérer l'id de la route
    2- Je demande au service la personne d'id id
      2.1 - Si oui je l'affiche
      2.2 - Si non le rediriger vers le CVComponent
  */
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private tostr: ToastrService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.findPersonneById(+params.id).subscribe(
        (personne) => (this.personne = personne),
        (erreur) => this.router.navigate(['cv'])
      );
    });
  }

  delete() {
    /*
      1- Appelle le service et je lui demande de supprimer l'objet personne
      2- le rediriger vers le CVComponent
    */
    this.cvService.deletePersonneById(this.personne.id).subscribe(
      (success) => this.router.navigate(['cv']),
      (erreur) => {
        this.tostr.error(
          `Problème de suppression, veuillez contacter l'admin :(`
        );
        console.log(erreur);
      }
    );
  }
}
