const btnElement=document.getElementById("btn")
const birthdayElement=document.getElementById("birthday")
const resultbtnElement=document.getElementById("result")
const resetElement=document.getElementById("reset")

function calculateAge()
{
    // console.log("clicked");
    const birthdayValue=birthdayElement.value;
    // console.log(birthdayValue);
    if(birthdayValue==="")
    {
        alert("Please enter your birthdate");
    }
    else
    {
        const age=getAge(birthdayValue);
        resultElement.innerText=`Your age is ${age} ${age>1?"years":"year"} old`;
    }
}

function getAge(birthdayValue)
{
    const currentDate=new Date();
    // console.log(currentDate);
    const birthdayDate=new Date(birthdayValue);
    let age=currentDate.getFullYear()-birthdayDate.getFullYear();
    // console.log(age);
    const month=currentDate.getMonth()-birthdayDate.getMonth();

    if(month<0 || (month===0 && currentDate.getDate() < birthdayDate.getDate()))
    {
        age--;
    }

    return age;
}

function resetAll()
{
    window.location.reload();
    // location.reload();
}

btnElement.addEventListener("click",calculateAge)
reset.addEventListener("click",resetAll)