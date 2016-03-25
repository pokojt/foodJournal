import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe ({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var healthy = args[0];
    console.log(args[0]);
    if (healthy === "yes") {
      return input.filter(function(meal) {
        return meal.calories < 301;
      });
    } else if (healthy === "no") {
      return input.filter(function(meal) {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
