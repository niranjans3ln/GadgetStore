import {Component, ChangeDetectionStrategy, EventEmitter, Input, Output, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Item} from "../../shared/ItemsList/item";
import {ItemsListService} from "../../shared/itemsList/itemslist-service";
import {TextField} from "ui/text-field";
import {Config} from "../../shared/config";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: "list",
  templateUrl: "pages/list/listview.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers: [ItemsListService]
})

export class ListPage implements OnInit {
  @Input() showDeleted: boolean;
  @Input() row;
  itemsList: Array<Item> = [];
  testList: Array<any> = [];
  @ViewChild("itemsToAddField") itemsToAddField: ElementRef;

  constructor(private _itemsListService: ItemsListService, private _http: Http) {
    this.testList.push({name: "Niranjan"});
    this.testList.push({name: "Lokanath"});
    this.testList.push({name: "Santoshi"});
    this.testList.push({name: "Bobby"});
    this.testList.push({name: "Mommy"});
    this.testList.push({name: "Delisha"});
  }

  onItemTap(args) {
    console.log("Item Tapped: " + args);
  }

  ngOnInit() {
    //console.log("NGONINIT.....");
      //console.log("testList SIZE: " + this.testList.length);
    //this._itemsListService.load()
    this._http.get(Config.apiUrl + "itemsList")
    .map(res => res.json())
    .subscribe(loadedItems => {
      //console.log("loadedItems: " + loadedItems);
      //console.log("itemsList SIZE 0: " + this.itemsList.length);
      let jsonObj = JSON.parse(loadedItems);
      jsonObj.forEach((item) => {
        //console.log("Item: id= " + item.id);
        console.log("Item: name= " + item.name);
        //console.log("Item: price= " + item.price);
        //console.log("Item: stock= " + item.stock);
        this.itemsList.unshift(item);
        //console.log("itemsList SIZE 1: " + this.itemsList.length);
      //console.log("item: " + item.toString());
      //console.log("itemsList SIZE 2: " + this.itemsList.length);
      });
      //console.log("itemsList: " + this.itemsList.toString());
      console.log("itemsList SIZE 3: " + this.itemsList.length);
    });
    //console.log("itemsList SIZE 4: " + this.itemsList.length);
  }

/*
  add() {
    if (this.item.trim() === "") {
      alert("Add a New item.....");
      return;
    }

    // Dismiss the keyboard
    let textField = <TextField>this.itemsToAddField.nativeElement;
    textField.dismissSoftInput();

    this._itemsListService.add(this.item)
      .subscribe(
        itemOb => {
          this.itemsList.unshift(itemOb);
          this.item = "";
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
          this.item = "";
        }
      )
  }
*/

/*
  imageSource(item) {
    if (item.deleted) {
      return item.done ? "res://selected" : "res://nonselected";
    }
    return item.done ? "res://checked" : "res://unchecked";
  }

  toggleDone(item: Item) {
    this._itemsListService.toggleDoneFlag(item, this.showDeleted)
      .catch(() => {
        alert("An error occurred managing your grocery list.");
      });
  }

  delete(item: Item) {
    this._itemsListService.setDeleteFlag(item)
      .catch(() => {
        alert("An error occurred while deleting an item from your list.");
      });
  }
  */

  toggleDone(item: Item) {
    
  }
 
  imageSource(item) {
    /*if (item.deleted) {
      return item.done ? "res://selected" : "res://nonselected";
    }
    return item.done ? "res://checked" : "res://unchecked";*/
    return "res://unchecked";
  }

  delete(item: Item) {
    
  }

}