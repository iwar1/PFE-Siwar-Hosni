import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendMessageRoutingModule } from './send-message-routing.module';
import { SendMessageComponent } from './send-message/send-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SendMessageComponent
  ],
  imports: [
    CommonModule,
    SendMessageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SendMessageModule { }
