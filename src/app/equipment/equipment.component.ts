import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['1', '2', '3'];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(name: string) {
    let index = this.equipment.indexOf(this.itemBeingEdited);
    this.equipment[index] = name;
    this.itemBeingEdited = null;
  }

  add(name: string) {
    if (!this.equipment.includes(name)) {
      this.equipment.push(name);
    }
  }

  remove(name: string) {
    let index = this.equipment.indexOf(name);
    this.equipment.splice(index, 1);
  }
}
