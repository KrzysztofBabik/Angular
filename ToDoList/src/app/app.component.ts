import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from './tasks-list.component';
import { SubmitTextComponent } from './submit-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, TasksListComponent, SubmitTextComponent],
  template: ` 
    <h1 class="text-orange-500 bg-black py-4 text-xl text-center">
      {{title}}
    </h1> 
    <app-submit-text (submitText)="addTask($event)" />
    <app-tasks-list [tasks]="tasks" />
  `,
    styles: [
      `
        input:focus + button {
          @apply text-orange-400;
        }
      `,
    ],
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
  ];

  addTask(name: string){
    this.tasks.push({
      name,
      done: false
    })
  }
}
