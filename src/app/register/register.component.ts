import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Utils } from './utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const { name, email, cpf, phone, password, repassword } = this.form;

    if(!Utils.validarCpf(cpf)) {
      this.errorMessage = "CPF inválido.";
      this.isSignUpFailed = true;
    } else if(password != repassword) {
      this.errorMessage = "As senhas digitadas são diferentes.";
      this.isSignUpFailed = true;
    } else {
      this.authService.register(name, email,cpf, phone, password).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  }
}
