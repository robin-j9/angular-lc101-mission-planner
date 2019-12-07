import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentToEdit: string = null;

  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ];

  constructor() { }

  ngOnInit() {
  }

  add(test: string) {
    if (!this.experiments.includes(test)) {
      this.experiments.push(test);
    }
  }

  edit(test: string) {
    this.experimentToEdit = test;
  }

  save(test: string) {
    let index: number = this.experiments.indexOf(this.experimentToEdit);
    this.experiments[index] = test;
    this.experimentToEdit = null;
  }

  remove(test: string) {
    let index: number = this.experiments.indexOf(test);
    this.experiments.splice(index, 1);
  }
}
