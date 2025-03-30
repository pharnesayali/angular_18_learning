import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name: string = 'Angular_18_tutorial';
  age = 25;
  isActive: boolean = true;
  currentDate: Date = new Date();
  inputType = "radio";
  successClass = "text-success";
  isChecked = true;
  selectState = "Maharashtra";
  myName = signal("Sayali Pharne");
  receivedName = signal('Viraj')
  constructor() { }

  onClick(Message: string) {
    alert(Message)
  }

  changeValue() {
    this.name = "React JS";
    this.myName.set('Sayali Rupesh Pharne');
    this.receivedName.set('Viraj Pharne');
  }
  
  changeSignal() {
    this.myName.set('Sayali Rupesh Pharne');
    this.receivedName.set('Viraj Pharne');
  }
}
