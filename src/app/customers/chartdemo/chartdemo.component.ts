import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartdemo',
  templateUrl: './chartdemo.component.html',
  styleUrls: ['./chartdemo.component.css']
})
export class ChartdemoComponent implements OnInit {
  first=false;
  second=false;
  data: any;
  data1:any;
  graph_type:any;

    constructor() {
     
    }

    selectData(event) {

      this.second=true;
   
     if(event.element._datasetIndex===0){
       this.graph_type="line";
      this.data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#4bc0c0'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#565656'
            }
        ]
    }
   

     }
     else if(event.element._datasetIndex===1){
      this.graph_type="doughnut";
      this.data1 = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
}
     }
  
  

  ngOnInit() {
    this.first=true;
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
  }

}
