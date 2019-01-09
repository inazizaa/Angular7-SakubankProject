import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SakuBank';

constructor(private route: Router ){}

  teslogin(){
    if(sessionStorage.getItem("customernumber")){
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
