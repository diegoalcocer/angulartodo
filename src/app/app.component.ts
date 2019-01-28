import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  // selector: 'app-root',
  selector:'todo-app', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model= new Model();
  getName() {
    return this.model.user;
  }
  getTodoItems(){
    return this.model.items.filter((item: { done: boolean; })=>!item.done);
  }
  addItem(newItem: any){
    if(newItem != ""){
      this.model.items.push(new TodoItem(newItem,false));
    }
  }
}
