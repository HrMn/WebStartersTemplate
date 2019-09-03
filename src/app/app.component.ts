import { Component } from '@angular/core';
import { ApplicationFrameService } from './services/application-frame.service';
import { Router } from '@angular/router';
import { User } from './model/user';
import { RoleType } from './model/user-role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private applicationFrameService:ApplicationFrameService,
    private router: Router)
  {
    this.title = this.applicationFrameService.productName;

    
  }
}
