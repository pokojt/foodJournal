import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { DisplayDetailsComponent } from './display-details.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, DisplayDetailsComponent, NewMealComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
      {{ currentMeal.name }}
    </meal-display>

    <display-details *ngIf="selectedMeal"           [meal]="selectedMeal"></display-details>

    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>

    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
}
