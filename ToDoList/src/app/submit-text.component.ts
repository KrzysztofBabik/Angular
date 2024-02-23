import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-submit-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <input 
        #newTaskInput 
        (keyup.enter)="submitText.emit(newTaskInput.value); newTaskInput.value = ''" 
        class="border-b border-b-orange-400 outline-none" 
      />
      <button 
        (click)="submitText.emit(newTaskInput.value); newTaskInput.value = ''" 
        class="border border-orange-400 ml-4 px-4">
        Add
      </button>
    </div>
  `,
  styles: [],
})
export class SubmitTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
