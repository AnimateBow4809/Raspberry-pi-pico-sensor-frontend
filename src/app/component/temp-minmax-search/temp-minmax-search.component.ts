import { Component, OnInit } from '@angular/core';
import { Data } from '../../entity/data';
import { DataService } from '../../services/data.service';
import { Mydate } from '../../entity/mydate';

@Component({
  selector: 'app-temp-minmax-search',
  templateUrl: './temp-minmax-search.component.html',
  styleUrl: './temp-minmax-search.component.css'
})
export class TempMinmaxSearchComponent implements OnInit {

  datas:Data[];
  lowTemp:number;
  highTemp:number;

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.listTemps(-200,200);
  }

  onSubmit(){
    this.listTemps(this.lowTemp,this.highTemp);
  }
 

  listTemps(ltemp:number,htemp:number){
    this.dataService.getDataByMinAndMaxTemp(ltemp,htemp)
    .subscribe(
      list =>{
        this.datas=list;
        this.datas.forEach(d=> d.shTime=Mydate.parse(d.time +' '))
      }
    )
  }

}
