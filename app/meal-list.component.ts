import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, NewMealComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    
    <select class="healthFilter" (change)="onChange($event.target.value)">
      <option selected="selected" value="all">All Meals</option>
      <option value="yes">Healthy Meals</option>
      <option value="no">Unhealthy Meals</option>
    </select>

    <h3> Your Meals </h3>
    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
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
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
