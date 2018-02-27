import {Component, Directive} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
//const R = require('ramda');
//import * as Ramda from 'ramda';

@Component({
   template: `   
   <h1>new Event reated</h1>
   <hr>
    <div>
     <h1> Dummy data</h1>
     <br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" class="btn btn-primary" (click)="cancel()" >Cancel</button>
    </div>
   `
})
export class CreateEventComponent {
  isDirty: true;
  constructor(private router: Router ) {
  
  }
  
  cancel() {     
  //let double = x => x * 2;

  //console.log("done  with es6 modules ",Ramda.map(double, [1, 2, 3]));
   this.router.navigate(['/events']);    
  }

}