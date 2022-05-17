import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    UserLayoutComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class LayoutsModule { }
