import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
    <div class="mealItem">
      <h3>{{ meal.name }}</h3>
      <p>{{ meal.details }}</p>
      <p>{{ meal.calories}} Calories</p>
    </div>
    <button (click)="editMeal(meal)" type="button" id="editButton">Edit Meal</button>

    <edit-meal-details
     *ngIf="mealToEdit" (onSubmitMealEdit)="submitEdit($event)" [meal]="meal">
    </edit-meal-details>


  `
})
export class MealComponent {
  public meal: Meal;
  public mealToEdit: Meal;
  public notMeal: Meal;
  editMeal(meal: Meal) {
    this.mealToEdit = meal;
  }
  submitEdit(boolean) {
    this.mealToEdit = this.notMeal;
  }
}

// <h4>{{ meal.details }}</h4>
// <p>{{ meal.calories }}</p>
// <button (click)="editMeal(meal)" type="button" id="editMealButton">Edit Meal</button>
