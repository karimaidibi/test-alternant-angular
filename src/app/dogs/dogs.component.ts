import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = []

  snackbarMessage = '';
  showSnackbar = false;

  constructor(private dogService: DogService) {
  }

  ngOnInit(): void {
    this.getDogs();
  }
  
  ngOnChanges() {
    // Set the showSnackbar back to false (hide it) after 3 seconds
    if (this.showSnackbar) {
      setTimeout(() => this.showSnackbar = false, 3000);
    }
  }
  

  getDogs(): void {
    this.dogService.getDogs()
    .subscribe(dogs => this.dogs = dogs);
  }

  updateDog(dog: Dog): void {
    this.dogService.updateDog(dog).subscribe(() => {
      this.snackbarMessage = 'Dog updated successfully!';
      this.showSnackbar = true;
    });
  }

  deleteDog(dog: Dog): void {
    this.dogs = this.dogs.filter(dog2 => dog2.id !== dog.id);
    this.dogService.deleteDog(dog.id).subscribe(() => {
      this.snackbarMessage = 'Dog deleted successfully!';
      this.showSnackbar = true;
    });
  }

}
