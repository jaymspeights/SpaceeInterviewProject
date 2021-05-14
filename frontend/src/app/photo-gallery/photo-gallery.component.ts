import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  photos: Array<any> = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.photoChange.subscribe(val => {
      this.photos = val;
    });
  }

}
