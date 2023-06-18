import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnChanges {
  @Input() message = '';
  @Input() trigger = false;

  showSnackbar = false;

  ngOnChanges() {
    if (this.trigger) {
      this.showSnackbar = true;
      setTimeout(() => this.showSnackbar = false, 3000);
    }
  }
}
