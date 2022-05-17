import { Message } from './../../../../message';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//class register
export class RegisterComponent implements OnInit {
// declaration les variables
user : User = new User();
submitted =false



 //show &hode password
 public showPassword: boolean = false;
 public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}
// confirmation formulaire register
formGrp: FormGroup;

  constructor(formBuilder: FormBuilder,private authService : AuthService, private router :Router) {
    this.formGrp = formBuilder.group({
      fnamectrl: ['', [Validators.required]],
      lnamectrl: ['', [Validators.required]],
      emailctrl: ['', [Validators.required, Validators.email]],
      passwordctrl: ['',[Validators.required, Validators.minLength(6),]],
      phonenumberclr:['',[Validators.required,Validators.pattern('[- +()0-9]+')]],

    });
  }
  get fname(){
    return this.formGrp.controls;
  }
  get lname(){
    return this.formGrp.controls;
  }

  get emailid(){
    return this.formGrp.controls;
  }
  get passwordid(){
    return this.formGrp.controls;
  }
  get phonenumber(){
    return this.formGrp.controls;
  }

  //les methodes de register
  ngOnInit(): void {
  }
  newUser():void{
    this.submitted =false;
    this.user = new User();
  }

  save(){

    this.authService.register(this.user)
    .subscribe({
      next:data => {
        /*console.log("777777777777777777777777777  "+data)
        this.user = new User();*/
       // console.log("8888888888888888888888888888"+this.user);
       // this.user.role = "client";
       // console.log("*********************************"+this.user);
        /*this.gotoList();*/
        console.log(data)
        this.user = new User();

      },
      error :err =>{
        console.log("+++++++++++++++++++++++++++++++ "+err);
      }
    });
  }
  onSubmit(){
   this.submitted = true;
   this.save();
  }

 /* gotoList(){
    this.router.navigate(['/userlist'])
  }*/

  signup(){
    Swal.fire({
      icon: 'success',
      title: 'Registration successful ! Please login to access your account.',
      showConfirmButton: false,
      timer: 1500
    })

  }
}


/* onSubmit(): void{
    const { firstName, lastName , email , password } = this.form;
    this.authService.register( firstName, lastName, email,password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }*/
 //declaration champ formulaire
  /*form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null
 };*/