function calculateTotalTip(){
    let billAmt=document.getElementById('billamt').value;
    let serviceQual=document.getElementById('serviceQual').value;
    let numb0fPeople=document.getElementById('peopleamt').value;
//validate input
if (billAmt===''||serviceQual==0){
    console.log('please enter your value');
    return;
}
//check to see if this input is empty or less than equal to 1
if(numb0fPeople===''||numb0fPeople<=1){
    numb0fPeople=1;
    document.getElementById('each').style.display='none';
}
else{
document.getElementById('each').style.display='block';
}

//calculate tip
let total=(billAmt *serviceQual)/numb0fPeople;

//round to 2 decimal place
total=Math.round(total *100)/100;
//next line allows us to always have 2 digits after decimal points
total=total.toFixed(2);
//display the tip

document.getElementById('totalTip').style.display='block';
document.getElementById('tip').innerHTML=total;
}
//hide the tipamount on load
document.getElementById('totalTip').style.display='none';
document.getElementById('each').style.display='none';
//click to call function;

document.getElementById('calculate').onclick=function(){
    calculateTotalTip();
};