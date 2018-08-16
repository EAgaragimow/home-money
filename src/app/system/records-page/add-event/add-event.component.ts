import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../shared/models/category.model";
import {NgForm} from "@angular/forms";
import {MELEvent} from "../../shared/models/event.model";
import * as moment from 'moment';

@Component({
  selector: 'mel-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories: Category[] = [];
  types = [
    {type: 'income', label: 'доход'},
    {type: 'outcome', label: 'расход'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let {amount, description, category, type} = form.value;
    if (amount < 0) amount *= -1;
    let date = new Date();

    const event = new MELEvent(
      type, amount, +category,
      moment().format('DD.MM.YYYY HH.mm.ss'), description
    );
  }

}
