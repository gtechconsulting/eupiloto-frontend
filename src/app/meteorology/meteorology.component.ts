import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-meteorology',
  templateUrl: './meteorology.component.html',
  styleUrls: ['./meteorology.component.css']
})
export class MeteorologyComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

}
