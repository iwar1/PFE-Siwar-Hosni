import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users !: Observable<User[]> ;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUserList();// lmethode elli fel userservice(traja3li liste ta3 l user)
  }


  //fonction wa9teli nenzel al bouton delete
   deleteUser(id: number){
     this.userService.deleteUser(id)
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
          'User has been deleted.',
          'success'
        )
      }
    })
   }
  //router ta3 detail
  userDetails(id: number){
    this.router.navigate(['/admin/userdetails', id]);
  }//router ta3 update
  updateUser(id: number){
    console.log("111111111111111111111111111111111 "+this.router.url);
    this.router.navigate(['/admin/userupdate', id]);
    console.log("2222222222222222222222222222222222222222  "+this.router.url);
  }

}
