import { Component, OnInit } from '@angular/core';
import { UserProfileDto } from 'src/app/core/dtos/userProfileDto';
import { UserProfileService } from 'src/app/core/services/user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfileDto = new UserProfileDto();
  isEditing: boolean = false;
  userRole: string = '';

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.userProfileService.get(3).subscribe(
      userProfile => {
        this.userProfile = userProfile;
        if(userProfile.userType===0){
          this.userRole='Host'
        }else{
          this.userRole = 'Guest'
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  editUserProfile(): void {
    this.isEditing = true;
  }

  saveUserProfile(): void {

    this.userProfileService.updateUserProfile(this.userProfile).subscribe(
      response => {
        console.log('User profile saved successfully');
        this.isEditing = false;
      },
      error => {
        console.error(error);
      }
    );
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.ngOnInit();
  }

}
