import { Component, OnInit } from '@angular/core';
import { FakeService } from 'src/app/services/fake.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  date = new Date();
  selectedPersonne: Personne = null;
  constructor(
    private loggerService: LoggerService,
    private fakeService: FakeService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('cc je suis cvComponent');
    this.fakeService.test();
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
