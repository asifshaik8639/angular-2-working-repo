import {Component, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import {ToastrService} from '../common/toastr.service'

@Component({  
  template:`
  <div>
        <h1>Upcoming events list</h1>
        <hr/>
        <div class='row'>
          <div *ngFor="let event of events" class='col-md-5'>
            <event-thumbnail (click)="thumbnailClickHandler(event.name)"  [event]='event'  ></event-thumbnail>
          </div>
        </div>
</div>
  ` 
})
export class EventsListComponent implements OnInit{
   events: any[] 
   constructor(private eventService: EventService, private toastrService: ToastrService) {
     
   }
   
   
   ngOnInit() {
     this.events = this.eventService.getEvents()
   }
   
   thumbnailClickHandler(eventName) {
     this.toastrService.toastrSuccess(eventName)
   }
}