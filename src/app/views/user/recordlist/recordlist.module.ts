import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordlistRoutingModule } from './recordlist-routing.module';
import { RecordlistComponent } from './recordlist/recordlist.component';


@NgModule({
  declarations: [
    RecordlistComponent
  ],
  imports: [
    CommonModule,
    RecordlistRoutingModule
  ]
})
export class RecordlistModule { }
