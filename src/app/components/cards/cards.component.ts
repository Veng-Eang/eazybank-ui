import { Component, OnInit } from '@angular/core';
import { Cards } from '../../model/cards.model';
import { DashboardService } from '../../service/dashboard.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  user = new User();
  cards = new Array();
  currOutstandingAmt:number = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dashboardService.getCardsDetails(this.user.id).subscribe(
        responseData => {
        this.cards = <any> responseData.body;
        this.cards.forEach(function (this: CardsComponent, card: Cards) {
          this.currOutstandingAmt = this.currOutstandingAmt+card.availableAmount;
        }.bind(this));
        });
    }
  }
}
