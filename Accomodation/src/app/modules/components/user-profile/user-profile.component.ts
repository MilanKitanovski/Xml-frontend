import { Component, OnInit } from '@angular/core';
import { UserProfileDto } from 'src/app/core/dtos/userProfileDto';
import { UserProfileService } from 'src/app/core/services/user-profile.service';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {HttpStatusCode} from "@angular/common/http";



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfileDto = new UserProfileDto();
  isEditing: boolean = false;
  userRole: string = '';

  constructor(
    private userProfileService: UserProfileService,
    private router: Router
  ) {}

  changeInfoForm!: FormGroup

  changeInfo() {
    console.log(this.userProfile)
    this.userProfile.name = this.changeInfoForm.get("name")?.value;  //preuzimanje param forme
    this.userProfile.surname = this.changeInfoForm.get("surname")?.value;
    this.userProfile.email = this.changeInfoForm.get("email")?.value;
    this.userProfile.password = this.changeInfoForm.get("email")?.value;

    console.log(this.changeInfoForm.get("gender")?.value)
    this.userProfileService.updateUserProfile(this.userProfile).subscribe()
  }

  ngOnInit(): void {

    this.changeInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),  //validacija
      surname: new FormControl('', Validators.required),
    })

    this.userProfileService.get(this.userProfile.id).subscribe(response => {
      this.userProfile = response;

      this.changeInfoForm.controls['name'].setValue(response.name);  //set param forme
      this.changeInfoForm.controls['surname'].setValue(response.surname);
      this.changeInfoForm.controls['email'].setValue(response.email);
      this.changeInfoForm.controls['password'].setValue(response.password);

      console.log(response)
    })

  }
}
