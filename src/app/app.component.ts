import { Component, OnInit } from '@angular/core';
import { Item } from './models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-angular';
  itemList: Item[] = [];
  item_title: string = ""; 
  item_desc: string = "";

  constructor(){}

  ngOnInit(){}

  add(item_title: string, item_desc: string) {
    this.itemList.push(new Item(item_title, item_desc));
    this.item_title = "";
    this.item_desc = "";
  }

  delete(index: number) {
    this.itemList.splice(index, 1);
  }
}
