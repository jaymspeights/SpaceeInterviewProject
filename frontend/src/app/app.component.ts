import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  defaultDate = "2020-11-08";

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.changeDate(this.defaultDate);
    this.photoService.photoChange.subscribe(() => window.scrollTo(0,0));
  }

  changeDate(date: string) {
    console.log(date)
    this.photoService.setPhotoDate(date);
  }
}
