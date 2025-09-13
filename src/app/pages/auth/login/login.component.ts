import { Component } from '@angular/core';
import { SHARED_MODULES } from '../../../shared/common/shared-module';
import { CommonDataService } from '../../../shared/services/common-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isOpen = false;

  constructor(private commonDataService: CommonDataService) {
    this.commonDataService.activeModal$.subscribe((name) => {
      this.isOpen = name === 'login';
    });
  }

  switchToRegister() {
    this.commonDataService.open('register');
  }

  close() {
    this.commonDataService.close();
  }

  openModal() {
    this.commonDataService.open('login');
  }
}
