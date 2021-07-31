import { Component, OnInit } from '@angular/core';
import { Icons } from "../../icons"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  icons = Icons
  selected$ = "Home"
  navClosed$ = true
  constructor() { }

  ngOnInit(): void {
  }

}
