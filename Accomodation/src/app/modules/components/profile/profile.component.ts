import { Component, OnInit } from '@angular/core';
import {UserProfileDto} from "../../../core/dtos/userDto";
import {Router} from "@angular/router";
import {ProfileServiceTsService} from "../../../core/services/profile-service.ts.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpStatusCode } from '@angular/common/http';
import {TokenService} from "../../../core/services/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token!: string | null;
  user : UserProfileDto = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    cityId: '',

  }
  isEditing: boolean = false;
  userRole: string = '';
  constructor(private tokenService: TokenService,
              private router: Router,
              private profilService: ProfileServiceTsService) { }

  changeInfoForm!: FormGroup
  successfully : boolean = false;
  email: string | null = localStorage.getItem("email")



  ngOnInit(): void {
    this.changeInfoForm = new FormGroup({
      name: new FormControl('', Validators.required),  //validacija
      surname: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
    })
    this.profilService.get(this.user.id).subscribe(response => {
      this.user = response;

      this.changeInfoForm.controls['name'].setValue(response.name);
      this.changeInfoForm.controls['surname'].setValue(response.surname);
  })


    }

  changeInfo() {
    this.user.name = this.changeInfoForm.get("name")?.value;  //preuzimanje param forme
    this.user.surname = this.changeInfoForm.get("surname")?.value;
    this.user.cityId = this.changeInfoForm.get("cityId")?.value;
    this.profilService.updateUserProfile(this.user).subscribe((response: HttpStatusCode) => {
      if(HttpStatusCode.Ok){
        this.successfully = true
      }
    })
  }
}
