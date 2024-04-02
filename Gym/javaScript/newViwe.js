var username=document.getElementById("userName");
var email=document.getElementById("email");
var userNumber=document.getElementById("userNumber");
var age=document.getElementById("age");
var price=document.getElementById("price");
var btn=document.getElementById("btn");
var type=document.getElementById("type");
var countRow=document.getElementById("row")
var selectOptions;

//function return options 

function option(){
var d=document.getElementById("select");
var op=d.options[d.selectedIndex].text;
selectOptions=op;
}

var info=[];

btn.addEventListener("click",function(){

    var data={
        name:username.value,
        email:email.value,
        number:userNumber.value,
        age:age.value,
        price:price.value,
        select:selectOptions

    };

    if(type.value=="create"){
        info.push(data)
    }
    else if (type.value=="update"){
        info[countRow]=data;
    }

    getDate();
    reset();
})

//get data function


function getDate(){
    var row=""
    for(i=0;i<info.length;i++){
        row+=`<tr>
         <td>`+info[i].name+`</td>
         <td>`+info[i].email+`</td>
         <td>`+info[i].number+`</td>    
         <td>`+info[i].age+`</td> 
         <td>`+info[i].price+`</td>
         <td>`+info[i].select+`</td>
         <td> <button type="button" class="btn btn-danger"  onclick="deletee(`+i+`)">delete</button> </td>
        <td><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="update(`+i+`)" >update </button></td>
        
               </tr>`
    }
    document.getElementById("tbody").innerHTML=row;
}


// function user for delete 
function deletee(i){
    info.splice(i,1);
    getDate();
} 


// function update 

function update(i){
    type.value="update";
    username.value=info[i].name;
    email.value=info[i].email;
    userNumber.value=info[i].number;
    age.value = info[i].age
    price.value=info[i].price;
    selectOptions=info[i].select;
    countRow=i;
}

//reset function 

function reset(){
    type.value="create";
    username.value="";
    email.value="";
    userNumber.value="";
    age.value = "";
    price.value="";
}
reset();
