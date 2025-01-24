import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { User } from '../../model/user.model';
import { Loans } from '../../model/loans.model';



@Component({
  selector: 'app-loans',
  standalone: false,
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  user = new User();
  loans = new Array();
  currOutstandingBalance: number = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dashboardService.getLoansDetails(this.user.id).subscribe(
        responseData => {
        this.loans = <any> responseData.body;
        this.loans.forEach(function (this: LoansComponent, loan: Loans) {
          this.currOutstandingBalance = this.currOutstandingBalance+loan.outstandingAmount;
        }.bind(this));
        });
    }
  }
}
