import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/message';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.component.html',
  styleUrls: ['./messagedetail.component.css']
})
export class MessagedetailComponent implements OnInit {
  id!: number;
  message!: Message;

  constructor(private route: ActivatedRoute,private router: Router,private  contactService:ContactService) { }

  ngOnInit(): void {
    this.message = new Message();
    this.id = this.route.snapshot.params['id'];
    this.contactService.getMessage(this.id)
    .subscribe({
      next: data => {
        console.log(data)
        this.message = data;
      },
      error:err =>{
        console.log(err);
      }
    });
  }
  detail(){
    this.router.navigate(['admin/message-list']);
  }

}
