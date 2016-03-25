import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="mealItem">
      <h3>{{ meal.name }}</h3>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
