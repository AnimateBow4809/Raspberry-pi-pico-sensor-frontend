export class Mydate{
    constructor(public year:number,public month:number,public day:number,public hour:number,public minutes:number,public sec:number){
    }

    public static parse(str:string):Mydate{
        let array:string[]=str.split("T");
        let ymd:number[]=array[0].split('-').map(Number)
        let hmsString:string[]=array[1].split(':')
        hmsString[2]=hmsString[2].slice(0,2);
        let hms:number[]=hmsString.map(Number);
        return new Mydate(ymd[0],ymd[1],ymd[2],hms[0],hms[1],hms[2]);
    }

    public toString():string{
        let str:string=this.year.toString().concat("-").concat(this.month.toString()).concat("-")
        .concat(this.day.toString()).concat(" ")
        .concat((this.hour).toString()).concat(":").concat(this.minutes.toString()).concat(":").concat(this.sec.toString());
        return str
    }
}
