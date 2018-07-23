import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'mel-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  time = new Date();

  ngOnInit() {
    setInterval(() => {this.time = new Date()}, 1000);
  }
}
