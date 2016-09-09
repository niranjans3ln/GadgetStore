import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {}








/*
import {Component} from "@angular/core";
import http = require("http");
import {User} from "./shared/user/user";
import {Item} from "./shared/itemsList/item";
import {UserService} from "./shared/user/user.service";


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  //template: `
  //`,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  //email = "username@domain.name";
  //passcode = "password";
  user: User;
  item: Item;
  loginStatus = false;

  constructor(private _userService: UserService){
    this.user = new User();
    this.item = new Item();
  }

  validateLogin(){
    var that = this;
    console.log("INPUTS: UserID= " + this.user.email + ", Password= " + this.user.passcode);
    if(this.user.email != undefined || this.user.email != undefined){
      if(this.user.email.length != 0 || this.user.email.length != 0){
        if(this.user.email != "username@domain.name"){
          http.getJSON("http://BS5LNDs-Air:8080/login?loginId=" + this.user.email + "&password=" + this.user.passcode).then(
            function(response: any){
              console.log("SERVER Response: " + JSON.stringify(response));

              if(response.status === "TRUE"){
                console.log("LOGIN SUCCESSFUL.....");
                console.log("Now Setting Flag.....");
                that.loginStatus = true;
                console.log("Flag is Set.....");
              } else {
                console.log("LOGIN FAILED.....");
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

  signUp() {
    this._userService.registerUser(this.user);
  }
}
*/