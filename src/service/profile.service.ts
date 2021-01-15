import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  response1: any;

  constructor(private http:HttpClient) { }

  public getProfile() {
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json');
  }
}
