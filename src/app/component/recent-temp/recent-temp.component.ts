import { Component, OnInit } from '@angular/core';
import { Data } from '../../entity/data';
import { DataService } from '../../services/data.service';
import { Mydate } from '../../entity/mydate';

@Component({
  selector: 'app-recent-temp',
  templateUrl: './recent-temp.component.html',
  styleUrl: './recent-temp.component.css'
})
export class RecentTempComponent implements OnInit {

   data:Data;
   constructor(private dataService:DataService){this.data={
    id: 452,
    temp: 0,
    humidity: 50,
    time: '2024-04-11T06:47:47.812+03:30',
    shTime:new Mydate(2024,4,11,6,47,47)
  }}

    ngOnInit(): void {
    this.getNewTemp();
    }

    getNewTemp():void{
      this.dataService.getRecentData().subscribe(d=>{
        console.log(d);
        this.data=d;
        this.data.shTime=Mydate.parse(d.time +' ')
        console.log(this.data);

      })
    }
}
