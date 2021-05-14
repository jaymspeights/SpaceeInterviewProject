import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public photoChange: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  setPhotoDate(date: string) {
    this.http.get<Array<any>>(`/api/photos?date=${date}`).subscribe(val => {
      this.photoChange.next(val);
    });
  }
}
