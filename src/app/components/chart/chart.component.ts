import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 0,
        position: 'bottom',
        grid : {
          display: false
        },
      },
      y: {
        min: 0,
        max: 20,
        position: 'bottom',
        grid : {
          display: false
        },
        ticks : {
          stepSize: 5,
          callback : function(value:any){
            if(value % 5 === 0){
              return value.toString();
            }
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels : {color : 'black', boxWidth: 10, boxHeight: 10, useBorderRadius : true, borderRadius: 5 }
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['91% STR', '97% FIN', '92% QLT', '100% MAN', '100% STO', '91% HR'],
    datasets: [
      { data: [19, 7, 9, 15, 5, 10], label: 'Total', barThickness: 10, backgroundColor: '#025AAB', borderRadius: 5 },
      { data: [], label: '', backgroundColor: 'white', barThickness: 8, },
      { data: [14, 6, 8, 15, 5, 9], label: 'Closed', barThickness: 10, backgroundColor: '#5AA647', borderRadius: 5 }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 20),
      0,
      10,
      Math.round(Math.random() * 20),
      0,
      10,
      Math.round(Math.random() * 20),
      0, 10];

    this.chart?.update();
  }
}
