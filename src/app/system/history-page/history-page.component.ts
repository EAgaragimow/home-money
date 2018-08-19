import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from "../shared/services/categories.service";
import {EventsService} from "../shared/services/events.service";
import {Observable} from "rxjs/Observable";
import {Category} from "../shared/models/category.model";
import {MELEvent} from "../shared/models/event.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'mel-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  s1: Subscription;

  isLoaded = false;

  categories: Category[] = [];
  events: MELEvent[] = [];

  chartData = [];

  constructor(private categoriesService: CategoriesService,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    this.s1 = Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Category[], MELEvent[]]) => {
      this.categories = data[0];
      this.events = data[1];

      this.calculateChartData();

      this.isLoaded = true;
    });
  }

  calculateChartData(): void {
    this.chartData = [];

    this.categories.forEach((c) => {
      const cEvents = this.events.filter((e) => e.category === c.id && e.type === 'outcome');
      this.chartData.push({
        name: c.name,
        value: cEvents.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }

  ngOnDestroy() {
    if (this.s1) this.s1.unsubscribe();
  }


}
