import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { User } from '../../model/user.model';
import { Account } from '../../model/account.model';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  user = new User();
  account = new Account();
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    if(this.user){
      this.dashboardService.getAccountDetails(this.user.id).subscribe(
        responseData => {
        this.account = <any> responseData.body;
        });
    }

  }
}
