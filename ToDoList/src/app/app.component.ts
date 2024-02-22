import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from './tasks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, TasksListComponent],
  template: ` 
    <h1 class="text-orange-500 bg-black py-4 text-xl text-center">
      {{title}}
    </h1> 
    <app-tasks-list [tasks]="tasks" />
  `,
})
export class AppComponent {
  title = 'To Do List';
  tasks = [
    {
      name: "Study",
      done: false,
    },
    {
      name: "Eat",
      done: false,
    },
    {
      name: "Sleep",
      done: false,
    }
  ]
}
