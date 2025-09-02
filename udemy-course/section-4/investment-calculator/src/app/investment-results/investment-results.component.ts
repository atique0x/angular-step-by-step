import { Component, inject, OnInit } from '@angular/core';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultsComponent implements OnInit {
  investmentService: InvestmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.annualData;
  }

  ngOnInit(): void {}
}
