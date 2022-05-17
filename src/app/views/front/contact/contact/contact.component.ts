
 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/message';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
//class
export class ContactComponent implements OnInit {
   //declaration
   message : Message = new Message() ;
   submitted = false;

    myForm:FormGroup;
 // validation formulaire contact
  constructor( private formBuilder: FormBuilder ,private contactService: ContactService ,private router: Router) {
  this.myForm = formBuilder.group({
    fnamectrl: ['',[Validators.required]],
    lnamectrl: ['',[Validators.required]],
    cnamectrl: ['',[Validators.required]],
    emailctrl: ['',[Validators.required , Validators.email]],
    phonectrl: ['',[Validators.required , Validators.pattern('[- +()0-9]+')]],
  })
  }
  get fname(){
    return this.myForm.controls;
  }
  get lname(){
    return this.myForm.controls;
  }
  get cname(){
    return this.myForm.controls;
  }
  get emailid(){
    return this.myForm.controls;
  }
  get phonenumber(){
    return this.myForm.controls;
  }


  ngOnInit(): void {

  }

  newMessage(): void {
    this.submitted = false;
    this.message = new Message();
  }
  save(){
    this.contactService.createMessage(this.message)
    .subscribe({
      next:data => {
        console.log(data)
        this.message = new Message();
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
    this.router.navigate(['/Messagelist']);
  }
  alertmessage(){
    Swal.fire({
      icon: 'success',
      title: 'Thank you! Your message has been successfully sent.',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
