// Q1
            // ID,name,workyear,salary,bonus,gift
let employee : [number,string,number,number,number,string][];
employee =[
    [1001,"Pantira",3,15000,0,""],
    [1002,"Chatbunta",4,20000,0,""],
    [1003,"Jakrit",1,10000,0,""],
    [1004,"Wasok",6,35000,0,""],
    [1005,"Kongpop",2,15000,0,""]    
]
// console.log(employee)
let bonus: number[]=[];
employee.forEach((a)=>{
    if(a[2] <= 1){
        bonus.push(a[2]*0);
    }
    else if(a[2] <=3){
        bonus.push(a[2]*1);
    }
    else if(a[2] <=5){
        bonus.push(a[2]*2);
    }
    else{
        bonus.push(a[2]*3);
    }
});

    
     


employee.forEach(t=>{
    console.log(`ID: ${employee[0]} Name: ${employee[1]} WorkYear: ${employee[2]} Salary: ${employee[3]} Bonus: ${employee[4]} Gift: ${employee[5]} `)
});
    
// console.log(`ID : ${employee[0]}`)


