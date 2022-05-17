import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagedetailRoutingModule } from './messagedetail-routing.module';
import { MessagedetailComponent } from './messagedetail/messagedetail.component';


@NgModule({
  declarations: [
    MessagedetailComponent
  ],
  imports: [
    CommonModule,
    MessagedetailRoutingModule
  ]
})
export class MessagedetailModule { }
