import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  investmentService: InvestmentService = inject(InvestmentService);

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    const data: InvestmentInput = {
      initialInvestment: Number(this.enteredInitialInvestment),
      duration: Number(this.enteredDuration),
      expectedReturn: Number(this.enteredExpectedReturn),
      annualInvestment: Number(this.enteredAnnualInvestment),
    };

    this.investmentService.calculateInvestmentResults(data);
  }
  ngOnInit(): void {}
}
