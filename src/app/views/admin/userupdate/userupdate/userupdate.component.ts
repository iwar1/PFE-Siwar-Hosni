import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  //declaration
  id!: number;
  user!: User;

  constructor(private route: ActivatedRoute,private router: Router,formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

   this.userService.getUser(this.id)
    .subscribe({
      next: data =>{
        console.log(data);
        this.user = data;
      },
      error :err =>{
        console.log(err);
      }
    });
  }
  //update user
  updateUser() {
    this.userService.updateUser(this.id, this.user)
    .subscribe({
      next: data =>{
        console.log(data);
        this.user = new User();
        this.gotoList();
        console.log("11111111111111");
      },
      error :err =>{
        console.log(err);
      }
    });

  }
  onSubmit() {
    this.updateUser();
  }
  gotoList() {
    this.router.navigate(['/userlist']);
  }

  list(){
    this.router.navigate(['admin/userlist']);
  }
  clicked(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
