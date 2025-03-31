import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { Component, OnInit } from '@angular/core';
import { AddEmpComponent } from './component/add-emp/add-emp.component';
import { ListEmpComponent } from './component/list-emp/list-emp.component';
import { StructuralDirectiveComponent } from './component/directives/structural-directive/structural-directive.component';
import { AttributeDirectivesComponent } from './component/directives/attribute-directives/attribute-directives.component';

@Component({
  selector: 'app-root',
  imports: [AddEmpComponent, ListEmpComponent, DataBindingComponent, StructuralDirectiveComponent, AttributeDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'practiceProject';
  age = 20;
  printAge!: number
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // normal check for null and undefined
    // if (this.age != null && this.age != undefined && this.age != 0) {
    //   console.log('sayali');
    // }

    // nullish coalescing (??) checks the null and undefined both.
    if (this.age ?? this.age != 0) {
      this.printAge = this.age;
    }
  }
}
