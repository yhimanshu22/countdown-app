const endDate = prompt("Enter the date in this format: 2021-01-01 00:00:00");


const inputs = document.querySelectorAll("input");


function clock(){

    const end = new Date(endDate);
    const now = new Date();
    // calculate total seconds left
    const diff = (end-now)/1000;

    if(diff <= 0){
        return;}
    //calulate days 
    inputs[0].value = Math.floor(diff/3600/24);
    // calculate hours
    inputs[1].value = Math.floor(diff/3600)%24;
    // calculate minutes
    inputs[2].value = Math.floor(diff/60)%60;
    // calculate seconds
    inputs[3].value = Math.floor(diff)%60;


}

clock();

setInterval(clock,1000);
