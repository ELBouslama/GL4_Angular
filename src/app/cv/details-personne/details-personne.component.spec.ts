import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonneComponent } from './details-personne.component';

describe('DetailsPersonneComponent', () => {
  let component: DetailsPersonneComponent;
  let fixture: ComponentFixture<DetailsPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
