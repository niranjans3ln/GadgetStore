import {setStatusBarColors} from "./utils/status-bar-util";
import "reflect-metadata";
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {NS_HTTP_PROVIDERS} from "nativescript-angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

setStatusBarColors();
nativeScriptBootstrap(AppComponent, [NS_HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);





/*
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";

nativeScriptBootstrap(AppComponent);
*/



/*
ON TERMINAL SET ANDROID_HOME EVERY TIME YOU LAUNCH

export ANDROID_HOME=/usr/local/Cellar/android-sdk/24.4.1_1


PATH VARIABLES ARE ALREADY CONFIGURED


*/