import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)},
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'adduser',loadChildren:()=>import('./views/admin/adduser/adduser.module').then(m=>m.AdduserModule)},
    {path:'userlist',loadChildren:()=>import('./views/admin/userlist/userlist.module').then(m=>m.UserlistModule)},
    {path:'userdetails/:id',loadChildren:()=>import('./views/admin/userdetails/userdetails.module').then(m=>m.UserdetailsModule)},
    {path:'userupdate/:id',loadChildren:()=>import('./views/admin/userupdate/userupdate.module').then(m=>m.UserupdateModule)},
    {path:'message-list',loadChildren:()=>import('./views/admin/message-list/message-list.module').then(m=>m.MessageListModule)},
    {path:'messagedetail/:id',loadChildren:()=>import('./views/admin/messagedetail/messagedetail.module').then(m=>m.MessagedetailModule)},
  ]},
  {path:'user',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/user-dashboard/user-dashboard.module').then(m=>m.UserDashboardModule)},
    {path:':id',loadChildren:()=>import('./views/user/profile/profile.module').then(m=>m.ProfileModule)},
    {path:'record',loadChildren:()=>import('./views/user/record/record.module').then(m=>m.RecordModule)},
    {path:'recordlist',loadChildren:()=>import('./views/user/recordlist/recordlist.module').then(m=>m.RecordlistModule)},
    {path:'send-message',loadChildren:()=>import('./views/user/send-message/send-message.module').then(m=>m.SendMessageModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
