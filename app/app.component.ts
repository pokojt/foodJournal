import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="pageWrapper">
    <div class="container">
      <h1>Meal Tracker</h1>
      <h3 *ngFor="#meal of meals">{{ meal.name }}</h3>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Mujadara", "Lebanese lentil dish", 300),
      new Meal("Asada Tacos", "Cha Cha Cha!", 500),
      new Meal("Spaghetti Squash", "Pasta Bowl Style", 250)
    ];
  }
}
