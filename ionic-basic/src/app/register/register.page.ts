import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../auth-firebase.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(
    private autSvc: AuthFirebaseService,
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onRegister(){
    this.autSvc.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.menuService.setTitle('login');
        this.router.navigate(['/login']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  } 
}