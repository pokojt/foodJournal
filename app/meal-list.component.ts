import { Meal } from './meal.model';
import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { DisplayDetailsComponent } from './display-details.component';
import { NewMealComponent } from './new-meal.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, EditMealDetailsComponent, DisplayDetailsComponent, NewMealComponent],
  template: `
    <select class="healthFilter" (change)="onChange($event.target.value)">
      <option selected="selected" value="all">All Meals</option>
      <option value="yes">Healthy Meals</option>
      <option value="no">Unhealthy Meals</option>
    </select>

    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
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
