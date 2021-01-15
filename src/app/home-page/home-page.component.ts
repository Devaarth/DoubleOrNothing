import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../service/profile.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public profileData: any;
  public displayedColumns: any;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProfile().subscribe((response) => {
      this.profileData = response ;
      //  const tempResponse = JSON.parse(this.profileData);
      //this.profileData = JSON.stringify(tempResponse);
    })
    this.displayedColumns = ['Select', 'Player Name', 'Level', 'Avatar', 'Bet', 'Wins', 'Lost', 'Price'];
    console.log(this.profileData);
    this.updateAvatar();
  }
  public updateAvatar() {

  }

  public renameKey(obj: any, oldKey: string, newKey: string) {
    obj[newKey] = obj[oldKey]
    delete obj[oldKey];
  }

}
