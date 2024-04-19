import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Data } from '../../entity/data';
import { DataService } from '../../services/data.service';
import { Mydate } from '../../entity/mydate';


@Component({
  selector: 'app-temp-list',
  templateUrl: './temp-list.component.html',
  styleUrl: './temp-list.component.css'
})
export class TempListComponent implements OnInit {

  datas:Data[];
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;


  constructor(private dataService:DataService){}

  click(){
    let dateS:Mydate=Mydate.parse(this.startDate.concat("T").concat(this.startTime).concat(":00"));
    let dateE:Mydate=Mydate.parse(this.endDate.concat("T").concat(this.endTime).concat(":00"));
    this.listTemps(dateS,dateE);
  }
  ngOnInit(): void {
    this.listTemps((new Mydate(2020,1,20,18,34,22)),new Mydate(2055,12,20,20,34,22));
  }


 

  listTemps(date1:Mydate,date2:Mydate){
    this.dataService.getDataByTime(date1.toString(),date2.toString())
    .subscribe(
      list =>{
        this.datas=list;
        this.datas.forEach(d=> d.shTime=Mydate.parse(d.time +' '))
      }
    )
  }
}

