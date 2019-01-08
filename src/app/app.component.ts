import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enigma-api';

constructor(private route: Router ){}

  teslogin(){
    if(sessionStorage.getItem("username")){
      return true;
    }
    else
    return false;
  }

  thislogout(){
    sessionStorage.clear();
    this.route.navigate(['/LoginForm']);
  }
}
