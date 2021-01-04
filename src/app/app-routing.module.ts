import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsPersonneComponent } from './cv/details-personne/details-personne.component';
import { WordComponent } from './directives/word/word.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/pages/todo/todo.component';
// cv/add
const routes: Routes = [
  { path: '', component: WordComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddPersonneComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id', component: DetailsPersonneComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color/:couleur', component: ColorComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
