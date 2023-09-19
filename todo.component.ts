import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Todos } from 'src/app/Model/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements AfterViewInit {
  todo: Todos[] = [];
  newTodo: string = '';
  updatedTask: string = '';
  i: number = 0;
  @ViewChild('cardPopupMsg') cardPopupMsgElem!: ElementRef; //Non-null asseration operation
  @ViewChild('inpPopup') inpPopupElem!: ElementRef; //Non-null asseration operation
  addTask() {
    if (this.newTodo) {
      let task = new Todos();
      task.name = this.newTodo;
      this.todo.push(task);
      this.newTodo = '';
      //!at the end we add an empty new todo so the input will be clear after click on button add
    } else {
      alert('Please Enter a Task , You cannot add an empty Task');
    }
  }
  // saveTask() {
  //   this.updatedTask = this.newTodo;
  //   this.cardPopupMsgElem.nativeElement.classList.replace('d-block', 'd-none');
  // }
  updateTask(i: number) {
    this.cardPopupMsgElem.nativeElement.classList.add('d-block');
    this.updatedTask = this.todo[i].name;
    this.inpPopupElem.nativeElement.value = this.updatedTask;

    //// return (this.updatedTask = this.newTodo[i]);
    //// if (this.newTodo) {
    // //  this.updatedTask = this.newTodo;
    // //}
  }

  saveTask(i: number) {
    this.todo[i].name = this.updatedTask;
    this.cardPopupMsgElem.nativeElement.classList.replace('d-block', 'd-none');
  }
  closeCard() {
    this.cardPopupMsgElem.nativeElement.classList.replace('d-block', 'd-none');
  }
  ngAfterViewInit(): void {
    this.updateTask;
  }
  //// ngAfterViewInit(): void {
  ////   this.removetask();
  //// }
  // //removetask() {
  ////   this.removeTaskElem.nativeElement.classList.add('d-none');
  //// }
  //// removetask(event: Event, index: number) {
  ////   this.todo.removeAt(index, 1);
  //// }
  //!we add index.1 so it will delete only one row not the whole loop
  removetask(event: Event, index: number) {
    this.todo.splice(index, 1);
  }
}
