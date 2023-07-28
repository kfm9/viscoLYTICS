import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-grafana',
  templateUrl: './grafana.component.html',
  styleUrls: ['./grafana.component.scss']
})
export class GrafanaComponent implements OnInit{

  private headers= ({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer glsa_JSLBN0H37XPT4rXNHyGqlMaSkMgA60c4_fa6a1d81'
  })
  
  private url = "http://localhost:3000/api/dashboards/uid/b47d4f7f-7cff-490b-938c-41e099d4a8fd";

  constructor(private http:HttpClient){
    
  }

  ngOnInit() {
    
    fetch(this.url, {
      method: 'GET',
      headers: this.headers,
      mode: 'no-cors'
    })
    .then(response => response.json())
    .then(data => {
      data = JSON.parse(data)
    });

    // this.http.get(this.url, this.options)
    // .subscribe(data => {console.log(data)})
  }






  
    // sample chart with chart js
    
    // const myChartObject = document.getElementById('myChart') as HTMLCanvasElement;
    // const chart = new Chart(myChartObject, {
    //   type: "line",
    //   data:{
    //     labels: ['red', 'blue', 'green'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 6, 3],
    //       borderWidth: 2,
    //       borderColor: 'rgba(223, 26, 26, 0.5)'
    //     }]
    //   },
    //   options:{
    //     scales: {
    //       y:{
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });    

}

