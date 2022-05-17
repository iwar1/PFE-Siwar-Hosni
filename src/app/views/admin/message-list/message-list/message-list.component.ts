import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/message';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  //declaration
  messages !: Observable<[Message]> ;

  constructor(private contactService:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.messages = this. contactService.getMessageList();
  }

  //fonction pour le boutton delete
  deleteMessage(id:number){
    this.contactService.deleteMessage(id)
    .subscribe({
      next: data=>{
       console.log(data);
       this.reloadData();
      },
      error: err=> {
        console.log(err);
      }
    });
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Message has been deleted.',
          'success'
        )
      }
    })
  }
   //router ta3 detail
   messageDetails(id: number){
    this.router.navigate(['/admin/messagedetail', id]);
  }

}
