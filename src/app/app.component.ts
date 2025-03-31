import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
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
