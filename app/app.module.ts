import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import {NavbarComponent} from './nav/navbar.component'
import {EventService} from './events/shared/event.service'
import {ToastrService} from './common/toastr.service'
import {EventDetailsComponent} from './events/event-details/event-details.component' 
import {CreateEventComponent} from './events/create-event.component'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavbarComponent, EventDetailsComponent, CreateEventComponent, Error404Component],
  providers: [EventService, ToastrService, EventRouteActivator,
  {
    provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
  
  }
  ],
  bootstrap: [EventsAppComponent]
}) 
export class AppModule {

   
}

 function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('Do you really wanted to cancel this?');
    }
      return true;
 }
