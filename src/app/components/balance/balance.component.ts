import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-balance',
  standalone: false,
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit {
  user = new User();
  transactions = new Array();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dashboardService.getAccountTransactions(this.user.id).subscribe(
        responseData => {
        this.transactions = <any> responseData.body;
        });
    }
  }
}
