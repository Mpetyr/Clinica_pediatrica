import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user-interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onGoogleLogin(){
    try{
      const user = await this.authSvc.loginGoogle();
      if(user){
        this.checkUserIsVerified(user);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private checkUserIsVerified(user:User){

    if(user && user.emailVerified){
      
      this.router.navigate(['/inicio']);

    }else if(user){
      this.router.navigate(['/verification-email']);

    }else {
      this.router.navigate(['/register']);
    }
  }

}
