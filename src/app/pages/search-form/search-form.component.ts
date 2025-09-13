import { Component } from '@angular/core';
import { SHARED_MODULES } from '../../shared/common/shared-module';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [SHARED_MODULES],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  fromTo = '';
  trip = 'Return';
  date = '';
  travelClass = 'All Class';

  search() {
    console.log('search', {
      fromTo: this.fromTo,
      trip: this.trip,
      date: this.date,
      travelClass: this.travelClass,
    });
    // navigate or call API
  }
}
