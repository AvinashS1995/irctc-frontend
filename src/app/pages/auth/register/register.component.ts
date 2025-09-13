import { Component } from '@angular/core';
import { SHARED_MODULES } from '../../../shared/common/shared-module';
import { CommonDataService } from '../../../shared/services/common-data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isOpen = false;

  constructor(private commonDataService: CommonDataService) {
    this.commonDataService.activeModal$.subscribe((name) => {
      this.isOpen = name === 'register';
    });
  }

  close() {
    this.commonDataService.close();
  }

  openModal() {
    this.commonDataService.open('register');
  }
}
