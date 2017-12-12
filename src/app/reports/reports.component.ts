import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports: Report[];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
  }

  selected: Report;

  onSelect(report: Report): void {
    this.selected = report;
  }

  getReports(): void {
    this.reportService.get().subscribe(reports => this.reports = reports);
  }

}
