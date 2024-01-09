function home(){
    document.getElementById("homes").style.color="rgb(135, 206, 235)";
    document.getElementById("feedback").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";

}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("plans").style.color="rgb(135, 206, 235)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";

}
function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(135, 206, 235)";

}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("feedback").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(135, 206, 235)";
    document.getElementById("blogs").style.color="white";

}

// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == "")
    {
        alert("Please Enter Name");
    }else if(number.value == "")
    {
        alert("Please Enter Number");
    }else
    {
        alert("Thanks For join : " + name.value);
    }
}