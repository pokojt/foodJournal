import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
    <div class="mealItem">
      <h4>{{ meal.name }}</h4>
      <div class="mealDetails">
        <p>{{ meal.details }}</p>
        <p>{{ meal.calories}} Calories</p>
        <button (click)="editMeal(meal)" type="button" id="editButton">Edit Meal</button>
      </div>
    </div>

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
