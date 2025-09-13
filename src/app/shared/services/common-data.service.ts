import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  private activeModal = new BehaviorSubject<string | null>(null);
  activeModal$ = this.activeModal.asObservable();

  open(modalName: string) {
    this.activeModal.next(modalName);
  }

  close() {
    this.activeModal.next(null);
  }
}
