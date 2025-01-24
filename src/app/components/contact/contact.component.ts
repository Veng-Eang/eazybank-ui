import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../model/contact.model';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-contact',
  standalone:false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  model = new Contact();

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {

  }

  saveMessage(contactForm: NgForm) {
    this.dashboardService.saveMessage(this.model).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        contactForm.resetForm();
      });

  }
}
