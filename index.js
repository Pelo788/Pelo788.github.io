// Date //
var d=new Date, month=new Array;
month[0]="January", 
month[1]="February", 
month[2]="March", 
month[3]="April", 
month[4]="May", 
month[5]="June", 
month[6]="July", 
month[7]="August", 
month[8]="September", 
month[9]="October", 
month[10]="November", 
month[11]="December";
var month_name=month[d.getMonth()], 
day_of_month=d.getDate(), 
current_year=d.getFullYear(),
dayOfMonthElement=document.getElementById("current_day"),
currentMonthElement=document.getElementById("current_month"),
currentYearElement=document.getElementById("current_year");
!function(){currentMonthElement.innerHTML=month_name,
    dayOfMonthElement.innerHTML=day_of_month,
    currentYearElement.innerHTML=current_year}();