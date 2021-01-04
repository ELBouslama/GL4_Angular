import { InterceptorProvider } from './interceptors/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';

import { ColorComponent } from './components/color/color.component';

import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CardComponent } from './cv/card/card.component';

import { WordComponent } from './directives/word/word.component';
import { EuroDollarPipe } from './pipes/euro-dollar.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/pages/todo/todo.component';
;
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsPersonneComponent } from './cv/details-personne/details-personne.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './login/login.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ColorComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    WordComponent,
    EuroDollarPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    DetailsPersonneComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestHttpComponent,
    AddPersonneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
