import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})

//class
export class LoginuserComponent implements OnInit {
  user!: User;
  email!:string;
  password!:string;

 //declaration champ formulaire
 form:any={
   email:null,
   password:null,
 }
 //show &hide password
 public showPassword: boolean=false;
 public togglePasswordVisibility():void{
 this.showPassword = !this.showPassword;
 }
ngOnInit(): void {
  this.user = new User();

}
//confirm formulaire login
formGrp:FormGroup;
constructor(formBuilder: FormBuilder,private authService : AuthService , private router : Router ) {
  this.formGrp = formBuilder.group({
    emailctrl: ['', [Validators.required, Validators.email]],
      passwordctrl: ['',[Validators.required, Validators.minLength(6),]],

  })

}
get emailid(){
  return this.formGrp.controls;
}
get passwordid(){
  return this.formGrp.controls;
}
submit() {



  this.authService.login(this.email, this.password)
  .subscribe({
    next:data => {
      console.log("999999999999999999999999999 "+data);

      //this.user = data;
      this.user = data;


      localStorage.setItem("id",this.user.id.toString());

       const data2 = JSON.stringify(data)



      if(this.user.role == 'client'){
        this.router.navigate(['/user']);
      }else if(this.user.role == 'admin'){
        this.router.navigate(['admin'])
      }

      if(!this.user.password){
        console.error('error: test log, yo...');
      }

     // if(data['role'])


    },
    error :err =>{
      console.log("+++++++++++++++++++++++++++++++ "+err);
    }
  });
}
/*submit() {+
  this.authService.login(this.formGrp.value)
  .subscribe({
    next:data => {
      console.log("999999999999999999999999999 "+data);

    },
    error :err =>{
      console.log("+++++++++++++++++++++++++++++++ "+err);
    }
  });
}*/

/*
if(user.role == "admin") {

} else {

}
*/

}
