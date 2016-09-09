import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../config";
import {Item} from "./item";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import http = require("http");

@Injectable()
export class ItemsListService {
  private allItems: Array<Item> = [];

  //constructor(private zone: NgZone, private backend: BackendService) { }
  constructor(private _http: Http) {}

  load() {
    return this._http.get(Config.apiUrl + "itemsList");
    /*.map(res => res.json())
    .map(data => {
      let itemsList = [];
      data.forEach((item) => {
        itemsList.push(new Item(item.id, item.name, item.price, item.stock));
      });
      return itemsList;
    })*/
    //.cache(this.handleErrors);
  }
/*
load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this._http.get(Config.apiUrl + "Groceries", {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let groceryList = [];
      data.Result.forEach((grocery) => {
        groceryList.push(new Grocery(grocery.Id, grocery.Name));
      });
      return groceryList;
    })
    .catch(this.handleErrors);
  }


*/





    //console.log("Inside LOAD function. Fetching Items List.....");
    //let itemsList = [];

    //let result = this._http.get("http://BS5LNDs-Air:8080/itemsList", null);
    /*
    http.getJSON("http://BS5LNDs-Air:8080/itemsList").then(
        function(response: Array<Item>){
          console.log("SERVER Response: " + JSON.stringify(response));
          response.forEach((item: Item) =>{
            console.log("Item: " + item.name);
            itemsList.push(new Item(null, item.name));
          });
    console.log("ITEMSLIST OBJECT: " + itemsList + " => Number of Items in the Array: " + itemsList.length);
        })//.catch(this.handleErrors);
    return itemsList;
    */

    
    //console.log("RESULT: " + JSON.stringify(result));
    /*
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    return this._http.get(Config.apiUrl + "Groceries", {
      headers: headers
    })
    */

    //let headers = new Headers();
    //headers.append("Content Type", "application/json");

    //return this._http.get(Config.apiUrl + "itemsList");//, {headers: headers})
    //.map(res => res.json());
    /*.map(data => {
      let itemsList = [];
      console.log("DATA: " + JSON.stringify(data));
      data.forEach((item) => {
        console.log("Item: " + item.name);
        itemsList.push(new Item(item[0].id, item.name));//, item.price, item.stock));
      });
      //console.log("ITEMSLIST OBJECT: " + itemsList + " => Number of Items in the Array: " + itemsList.length);
      //return itemsList;
      
    })
    .catch(this.handleErrors);
    */
    
  //}

/*
  private syncItem(item: Item) {
    //return this.backend.el.data("Items")
    //  .updateSingle({ Id: item.id, Name: item.name, Price: item.price, Stock: item.stock })
    //  .catch(this.handleErrors);
  }

  private updateSingleItem(item: Item, newItem: Item) {
    const index = this.allItems.indexOf(item);
    this.allItems.splice(index, 1, newItem);
  }

  setDeleteFlag(item: Item) {
    const newItem = new Item(item.id, item.name, item.price, item.stock);
    this.updateSingleItem(item, newItem);

    this.publishUpdates();
    return this.syncItem(newItem);
  }

  toggleDoneFlag(item: Item, skipSync: boolean = false) {
    const newItem = new Item(item.id, item.name, item.price, item.stock);
    this.updateSingleItem(item, newItem);

    this.publishUpdates();
    if (skipSync) {
      return Promise.resolve(true);
    } else {
      return this.syncItem(newItem);
    }
  }

  private publishUpdates() {
    // Make sure all updates are published inside NgZone so that change detection is triggered if needed
    //this.zone.run(() => {
      // must emit a *new* value (immutability!)
    //  this.items.next([...this.allItems]);
    //});
  }
*/

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}