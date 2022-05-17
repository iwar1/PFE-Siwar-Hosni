import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserupdateRoutingModule } from './userupdate-routing.module';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserupdateComponent
  ],
  imports: [
    CommonModule,
    UserupdateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserupdateModule { }
