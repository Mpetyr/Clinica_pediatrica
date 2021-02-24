import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user-interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{
  public user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router:Router) { }


  async onLogout(){
    try{
    await this.authSvc.logout();
    this.router.navigate(['/login'])
    }
    catch(error){
      console.log(error)
    }
    
  }

}
