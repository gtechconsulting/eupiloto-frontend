import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  userName?: string;

  constructor(private userService: UserService, private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
    this.userName = this.storageService.getUser().name;
  }

  goToSimulado() {
    this.router.navigate(['/simulados']);
  }
}
