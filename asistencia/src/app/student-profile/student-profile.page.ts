import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage implements OnInit {

  constructor(private router: Router) { }

  volver(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
