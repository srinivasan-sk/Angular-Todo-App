import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Todo App';
  newTask: string = ''
  taskList: string[] = [];
  textSearch: string = '';

  addTodo() {
    this.taskList.unshift(this.newTask)
    localStorage.setItem('my_task',JSON.stringify(this.taskList))
    this.newTask = ''
  }

  clear(index: number) {
    this.taskList.splice(index, 1)
    localStorage.setItem('my_task',JSON.stringify(this.taskList) )
  }
  ngOnInit(): void {
    if (localStorage.getItem('my_task')) {
      this.taskList =JSON.parse(localStorage.getItem('my_task')!)
    }
   
  }
}
