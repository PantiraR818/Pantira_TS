// Q2
// 2.1
interface Car{
    id: number,
    name: string,
    color?: string,
    distanceUsed: number,
    showCar():string,
    use(disstance:number): number
}


class EuropCar implements Car{
    id: number;
    name: string;
    color?: string;
    distanceUsed: number;
    
    //arg-constructor
    constructor(id:number, name:string, color:string, distanceUsed:number){
        this.id = id;
        this.name = name;
        this.distanceUsed = distanceUsed;
    }
    showCar(){
        return `${this.name} `;
    }
    use(disstance:number){

        return `${this.distanceUsed}`;
    }
}