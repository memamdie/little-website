import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
