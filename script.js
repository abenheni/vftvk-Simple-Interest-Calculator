
function updateRate() 
{
    // get the rate value from range input and sets it as text for the span under it
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    // get values from each input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // calculate values to show on html
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // compute should only edit html if the principal value is correct ( principal > 0 )
    if (principal <= 0) {
        alert('Enter a positive number.');
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
}
        