import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserlistComponent
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    RouterModule
  ]
})
export class UserlistModule { }
