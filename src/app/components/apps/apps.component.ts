import { Component, OnInit } from '@angular/core';
import { Apps } from "../../apps"
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  apps = Apps
  constructor() { }

  ngOnInit(): void {
  }

}
