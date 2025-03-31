import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  div1Color: string = 'bg-success';
  div2Color: boolean = true
  input1: string = '';
  input2: string = '';
  checkboxValue: boolean = true;
  checkOption: string = '';
  studentList: any[] = [
    { count: '1', name: 'Sayali', age: 25, marks: 50, status: false },
    { count: '12', name: 'Anu', age: 23, marks: 90, status: false },
    { count: '14', name: 'Viraj', age: 13, marks: 80, status: false },
    { count: '11', name: 'Nita', age: 45, marks: 60, status: true },
    { count: '14', name: 'Rupesh', age: 50, marks: 99, status: true },
  ]

cssProperty: any = {
  'height': '5rem',
  'width':'15rem',
  'background':'Yellow',
  'border-radius':'20px',
  'border':'2px solid black',
  'font-size': '20px',
}

  div1Red() { this.div1Color = 'bg-danger' }

  div1Blue() { this.div1Color = 'bg-primary' }

  div2Toggle() {
    this.div2Color = !this.div2Color;
  }
}
