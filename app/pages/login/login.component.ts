import {Router} from "@angular/router";
import {Component} from "@angular/core";
import http = require("http");
import {User} from "../../shared/user/user";
import {Item} from "../../shared/itemsList/item";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  /*template: `
    
  `,*/
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginPage {
  user: User;
  item: Item;
  loginStatus = false;

  constructor(private _router: Router, private _userService: UserService){
    this.user = new User();
    this.user.email = "niranjan";
    this.user.passcode = "niranjan";
  }

  validateLogin(){
    var that = this;
    console.log("INPUTS: UserID= '" + this.user.email + "', Password= '" + this.user.passcode + "'");
    if(this.user.email != undefined && this.user.email != undefined){
      if(this.user.email.length != 0 && this.user.email.length != 0){
        if(this.user.email != "username@domain.name"){
          http.getJSON(Config.apiUrl + "login?loginId=" + this.user.email + "&password=" + this.user.passcode).then(
            function(response: any){
              console.log("SERVER Response: " + JSON.stringify(response));

              if(response.status === "TRUE"){
                //console.log("LOGIN SUCCESSFUL.....");
                //console.log("Now Setting Flag.....");
                that.loginStatus = true;
                //console.log("Flag is Set.....");
                that._router.navigate(["/list"]);
              } else {
                //console.log("LOGIN FAILED.....");
                alert("!!! Login Failed. Please check your credentials. Sign Up instead...");
                //this.loginStatus = false;
              }
            }, function(e){
              console.log("EEEEEEEE: " + e);
            }
          );
        }
      }else{
        alert("\"Email Address\" and \"Password\" can't be empty!!!!!");
      }
    }else{
      alert("\"Email Address\" and \"Password\" can't be empty!!!!!");
    }
  }

  login() {
    //console.log("LOGIN initiated..........");
    //if(this._userService.validateLogin(this.user)){
      console.log("LOGIN SUCCESSFUL. NOW FETCHING ITEMS LIST.....");
      this._userService.getItemsList(new Item(null,null,null,null))
      .subscribe(
        () => this._router.navigate(["/list"]),
        (error) => alert("Unfortunately we could not find your account.")
      );
    //}
  }

  signUp() {
    this._userService.registerUser(this.user);
  }
}
