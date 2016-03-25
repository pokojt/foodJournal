import {Component} from 'angular2/core';
import {Meal} from './meal.model';


@Component({
  selector: 'display-details',
  inputs: ['meal'],
  template: `
    <div class="mealDetails">
      <h4>{{ meal.details }}</h4>
      <p>{{ meal.calories }}</p>
      <button (click)="editMeal(meal)" type="button" id="editMealButton">Edit Meal</button>
    </div>
  `
})
export class DisplayDetailsComponent {
  public meal: Meal;
}
