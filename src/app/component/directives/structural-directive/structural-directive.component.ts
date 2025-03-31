import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss'
})
export class StructuralDirectiveComponent {
  div1: boolean = true;
  div2: boolean = true;
  input1: string = '';
  input2: string = '';
  checkboxValue: boolean = true;
  checkOption: string = '';
  cityArray: string[] = ['sangli', 'kolhapur', 'pune', 'mumbai', 'nagpur'];

  studentList: any[] = [
    { count: '1', name: 'Sayali', age: 25, status: false },
    { count: '12', name: 'Anu', age: 23, status: false },
    { count: '14', name: 'Viraj', age: 13, status: false },
    { count: '11', name: 'Nita', age: 45, status: true },
    { count: '14', name: 'Rupesh', age: 50, status: true },
  ]

  div1Hide() {
    this.div1 = false;
  }

  div1Show() {
    this.div1 = true;
  }

  div2Toggle() {
    this.div2 = !this.div2;
  }
}
