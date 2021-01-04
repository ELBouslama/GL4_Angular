import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tostr: ToastrService
  ) {}

  ngOnInit(): void {}
  login(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.tostr.info('Bienvenu :)');
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.tostr.error('Veuillez vérifier vos credentials ');
        console.log(erreur);
      }
    );
  }
}
