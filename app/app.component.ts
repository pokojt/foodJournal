import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="pageWrapper">
    <div class="container">
      <div class="header">
        <h1>Food Journal</h1>
        <p class="lead">Log your meals and keep track of the hamburgers in your life.</p>
      </div>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
        </meal-list>
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
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
