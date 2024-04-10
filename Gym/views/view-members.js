// const getNewCases = async() => {
//     const response = await fetch('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=fd80f4ca0a7645b4ad9a7fb57e6ea6dd');
//     const data = await response.json();
//     let usa = data.filter(val => {
//       return val.articles[1] === "Abendzeitung";
//     });
//     $('#myTable').DataTable({
//       data: usa,
//       bLengthChange: false,
//       columns: [
//         { data: 'provinceState', title: 'State' },
//         { data: 'countryRegion', title: 'Country' },
//         { data: 'lastUpdate', title: 'Last Update' },
//         { data: 'confirmed', title: 'Confirmed' },
//         { data: 'deaths', title: 'Deaths' },
//         { data: 'recovered', title: 'Recovered' }
//       ]
//     });
//   };
  
//   scrollToPager = () => {
//     var y = $(window).scrollTop();
//     $('html, body').animate({
//       scrollTop: y + $('#myTable').height()
//     })
//   }
  
//   getNewCases();

// var datainfo=[];

// for(i=0;i<3;i++){

// var data={
//     name: "ali",
//     email : "yamani@" ,
//     number:12345,
//     mes:12324

// }
// datainfo.push(data);
// showdata();
// }

// function showdata(){

// var row="";
// for(i=0;i<datainfo.length;i++){
//     row+=`
//     <tr>
//     <td>`+datainfo[i].name+`</td>
//     <td>`+datainfo[i].email+`</td>
//     <td>`+datainfo[i].number+`</td> 
//     <td>`+datainfo[i].mes+`</td>
//     <td><button class="btn btn-danger" onclick=del(`+i+`)>Delete</button></td>
//     </tr>

//     `;
// }
// document.getElementById("tbody").innerHTML=row;

// }

var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var number=document.getElementById("number");
var age=document.getElementById("age");
var price=document.getElementById("price");
var chooseCoach=document.getElementById("select");
var sendBtn=document.getElementById("sendBtn");
var tbody=document.getElementById("tbody");
var type=document.getElementById("type");
var currentRow=document.getElementById("currentRow");

var chose=document.getElementById("select");
var d=chose.options[chose.selectedIndex].text;

// start 

// array that collate the objects


var data=[];



// sendBtn used to save value and show it in table
sendBtn.addEventListener("click",function(){
    var user={
        namee:fullname.value,
        email:email.value,
        phone:number.value,
        age:age.value,
        price:price.value,
        coach:cho
    };
    if(type.value==="create"){
         data.push(user);
    }
    else if (type.value === "update"){
        data[currentRow.value]=user;
    }
    showData();
    reset();
})


// function get the data from api and put the data to data array
function getdata(){}


// function that show the data to table 
function showData(){
var row="";
for(i=0;i<data.length;i++){
    row+=`
       <tr>
       
       <td>`+data[i].namee+`</td>
       <td>`+data[i].email+`</td>
       <td>`+data[i].phone+`</td>
       <td>`+data[i].age+`</td>
       <td>`+data[i].price+`</td>
       
       <td><button class="btn btn-danger" onclick="deletee(`+i+`)">delete</button></td>
       <td><button class="btn btn-info" onclick="updatee(`+i+`)">update</button></td>
       </tr>
       
    
    `;
}
document.getElementById("tbody").innerHTML=row;
}

// function used to delete the object 

function deletee(i){
    data.splice(i,1);
    showData();
};
// update button will be work when click on

function updatee(i){
   
    fullname.value=data[i].namee;
    email.value=data[i].email;
    number.value=data[i].phone;
    age.value=data[i].age;
    price.value=data[i].price;
    currentRow.value=i;
     type.value="update";
}

function reset(){
    type.value="create";
    fullname.value="";
    email.value="";
    number.value="";
    age.value="";
    price.value="";

}

let cho;
// function used in select option 
function selectValue(){

    var chose=document.getElementById("select");
    var option =chose.options[chose.selectedIndex].text;
    cho=option;
    console.log(option);
    console.log(cho);



}









