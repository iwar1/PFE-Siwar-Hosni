import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
//class
export class AdduserComponent implements OnInit {
  user : User = new User();
  submitted = false;
  //show &hode password
public showPassword: boolean = false;
public togglePasswordVisibility(): void {
 this.showPassword = !this.showPassword;
}

formGrp: FormGroup;
//constructor
  constructor(private userService: UserService,private router: Router,formBuilder: FormBuilder) {
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

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save(){
    this.userService.createUser(this.user)
    .subscribe({
      next:data => {
        console.log(data)
        this.user = new User();
        this.gotoList();
      },
      error: err => {
        console.log(err);
      }
    });
  }


  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/userlist']);
  }
  added(){
    Swal.fire({
      icon: 'success',
      title: 'Your user has been added successfully.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
