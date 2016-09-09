import {Injectable} from "@angular/core";
import {User} from "./user";
import {Item} from "../itemsList/item";
import http = require("http");
import {Http, Headers, Response} from "@angular/http";
import {Config} from "../config";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private _http: Http) {
  }
  

  registrationStatus = false;
  loginStatus = false;

  registerUser(user: User){
    var that = this;
    console.log("INPUTS: UserID= " + user.email + ", Password= " + user.passcode);
    if(user.email != undefined && user.email != undefined){
      if(user.email.length != 0 && user.passcode.length != 0){
        if(user.email != "username@domain.name"){
          http.getJSON(Config.apiUrl + "register?loginId=" + user.email + "&password=" + user.passcode).then(
            function(response: any){
              console.log("SERVER Response: " + JSON.stringify(response));

              if(response.status === "SUCCESS"){
                console.log("REGISTRATION SUCCESSFUL.....");
                console.log("Now Setting Flag.....");
                that.registrationStatus = true;
                console.log("Flag is Set.....");
                alert("User Registration Successful.....");
              } else {
                console.log("REGISTRATION FAILED.....");
                alert("Registration Failed !!!");
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

  /*
  validateLogin(user: User){
    var that = this;
    var status = false;
    console.log("INPUTS: UserID= " + user.email + ", Password= " + user.passcode);
    if(user.email != undefined && user.email != undefined){
      if(user.email.length != 0 && user.email.length != 0){
        if(user.email != "username@domain.name"){
          http.getJSON("http://BS5LNDs-Air:8080/login?loginId=" + user.email + "&password=" + user.passcode).then(
            function(response: any){
              console.log("SERVER Response: " + JSON.stringify(response));

              if(response.status === "TRUE"){
                status = true;
                console.log("LOGIN SUCCESSFUL.....");
                console.log("Now Setting Flag.....");
                that.loginStatus = true;
                console.log("Flag is Set.....");
              } else {
                status = false;
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
    console.log("Returning STATUS: " + status);
    return status;
  }
  */


  getItemsList(item: Item){
    //var that = this;
    //return http.getJSON("http://BS5LNDs-Air:8080/itemsList");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.post(Config.apiUrl + "itemsList", null)
    .map(response => response.json()).catch(this.handleErrors);


    //if(loginStatus != false){
      /*
      http.getJSON("http://BS5LNDs-Air:8080/itemsList").then(
        function(response: any){
          console.log("SERVER Response: " + JSON.stringify(response));

          if(response.status === "SUCCESS"){
            console.log("REGISTRATION SUCCESSFUL.....");
            console.log("Now Setting Flag.....");
            that.registrationStatus = true;
            console.log("Flag is Set.....");
            alert("User Registration Successful.....");
          } else {
            console.log("REGISTRATION FAILED.....");
            alert("Registration Failed !!!");
            //this.loginStatus = false;
          }
        }, function(e){
          console.log("EEEEEEEE: " + e);
        }
      );
      */
    //}
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  
}