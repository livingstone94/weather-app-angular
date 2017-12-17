import { Component, OnInit } from '@angular/core';
import { DateService } from './date.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  private _clockSubscription: Subscription;
  date: string;

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this._clockSubscription = this.dateService.getDate().subscribe(
      date => this.date = this.dateService.formatDate(date)
    );
  }
}
