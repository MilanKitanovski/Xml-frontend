export class UserProfileDto {
  id: number = 0;
  name    : string = "";
  surname : string = "";
  email  :  string = "";
  password  : string = "";
  cityId : string = "";
  userType :    number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.surname = obj.surname;
      this.email = obj.email;
      this.password = obj.password;
      this.cityId = obj.cityId;
      this.userType = obj.userType;
    }

  }
}

