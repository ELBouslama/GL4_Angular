import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectPersonneSubject = new Subject<Personne>();
  
  personnes: Personne[] = [];
  constructor(private http : HttpClient ) {
  }

  getPersonnes():Observable<Personne[]> {
    return this.http.get<Personne[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }

}
