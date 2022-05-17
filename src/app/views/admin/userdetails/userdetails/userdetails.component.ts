import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  id!: number;
  user!: User;

  constructor(private route: ActivatedRoute,private router: Router,private userService: UserService) { }

  ngOnInit(): void {

    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id)
    .subscribe ({
      next: data =>{
        console.log(data)
        this.user = data;

      },
      error:err =>{
        console.log(err);
      }
    });
  }
  list(){
    this.router.navigate(['admin/userlist']);
  }

}
