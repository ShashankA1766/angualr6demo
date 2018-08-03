import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild, ViewEncapsulation } from '@angular/core';
import { StockChart, Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit, OnDestroy {
  barchart: Chart;
  chart: Chart;
  columnchart: Chart;
  constructor() { }

  ngOnInit() {
    this.createcharts("", "line");
    this.createcharts("", "bar");
    this.createcharts("", "column");
  }

  createcharts(typechart, typename) {
    switch (typename) {
      case "line":
        this.chart = new Chart({
          chart: {
            type: 'line'
          },
          title: {
            text: 'Linechart'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Line 1',
              data: [1, 2, 3]
            }
          ]
        });
        break;
      case "bar":
        this.barchart = new Chart({
          chart: {
            type: 'bar'
          },
          title: {
            text: 'Barchart'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Bar 1',
              data: [1, 2, 3]
            },
            {
              name: 'Bar 2',
              data: [6, 5, 2]
            },
            {
              name: 'Bar 3',
              data: [2, 9, 10]
            }
          ]
        });
        break;
        case "column":
        this.columnchart = new Chart({
          chart: {
            type: 'column'
          },
          title: {
            text: 'Columnchart'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Column 1',
              data: [1, 2, 3]
            },
            {
              name: 'Column 2',
              data: [6, 5, 2]
            },
            {
              name: 'Column 3',
              data: [2, 9, 10]
            }
          ]
        });
        break;
    }
  }

  ngOnDestroy() {
    this.chart.destroy();
    this.chart = null;
    this.barchart.destroy();
    this.barchart = null;
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  addSeries() {
    var serisearrayPoint = new Array();
    serisearrayPoint.push(Math.floor(Math.random() * 10));
    serisearrayPoint.push(Math.floor(Math.random() * 10));
    serisearrayPoint.push(Math.floor(Math.random() * 10));
    var nameofserise = "Line " + Math.floor(Math.random() * 10);
    this.chart.addSerie({
      name: nameofserise,
      data: serisearrayPoint
    });
  }

}
