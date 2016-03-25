import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="new-meal-form">
    <input placeholder="Meal Name" #newName>
    <textarea placeholder="Details" #newDetails></textarea>
    <input placeholder="Calories" type="number" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)" type="button" id="addMealButton">Add Meal</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userFood: HTMLInputElement, userDetails: HTMLTextAreaElement, userCalories: HTMLInputElement) {
    var newMeal = new Meal(userFood.value, userDetails.value, parseInt(userCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    
    userFood.value="";
    userDetails.value="";
    userCalories.value="";
  }
}
