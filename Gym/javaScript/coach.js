var username=document.getElementById("userName");
var email=document.getElementById("email");
var userNumber=document.getElementById("userNumber");
var age=document.getElementById("age");
var price=document.getElementById("price");
var btn=document.getElementById("btn");
var type=document.getElementById("type");
var countRow=document.getElementById("row")
var selectOptions;
let row="";
let tbody=document.getElementById("tbody");

//function return options 

// function option(){
// var d=document.getElementById("select");
// var op=d.options[d.selectedIndex].text;
// selectOptions=op;
// }

// var info=[];

// btn.addEventListener("click",function(){

//     var data={
//         name:username.value,
//         email:email.value,
//         number:userNumber.value,
//         age:age.value,
//         price:price.value,
//         select:selectOptions

//     };

//     if(type.value=="create"){
//         info.push(data)
//     }
//     else if (type.value=="update"){
//         info[countRow]=data;
//     }

//     getDate();
//     reset();
// })

//get data function


// function getDate(){
//     var row=""
//     for(i=0;i<info.length;i++){
//         row+=`<tr>
//          <td>`+info[i].name+`</td>
//          <td>`+info[i].email+`</td>
//          <td>`+info[i].number+`</td>    
//          <td>`+info[i].age+`</td> 
//          <td>`+info[i].price+`</td>
//          <td>`+info[i].select+`</td>
//          <td> <button type="button" class="btn btn-danger"  onclick="deletee(`+i+`)">delete</button> </td>
//         <td><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="update(`+i+`)" >update </button></td>
        
//                </tr>`
//     }
//     document.getElementById("tbody").innerHTML=row;
// }


// function user for delete 
// function deletee(i){
//     info.splice(i,1);
//     getDate();
// } 


// function update 

// function update(i){
//     type.value="update";
//     username.value=info[i].name;
//     email.value=info[i].email;
//     userNumber.value=info[i].number;
//     age.value = info[i].age
//     price.value=info[i].price;
//     selectOptions=info[i].select;
//     countRow=i;
// }

//---------reset function ------------------

function reset(){
    type.value="create";
    username.value="";
    email.value="";
    userNumber.value="";
    age.value = "";
    price.value="";
}
reset();

// ----------------end -------------------------


//------------- function used for fetch data ----------
const renderPost=(post)=>{
    post.forEach((post)=>{
         
            row+=`
           
            <tr >
             <td class="id" >`+post.Id+`</td>
             <td class="name">`+post.name+`</td>
             <td>`+post.email+`</td>
             <td>`+post.number+`</td>    
             <td>`+post.age+`</td> 
             <td>`+post.price+`</td>
             <td> <button type="button" class="btn btn-danger" id="delrow" data-id="${post.Id}">delete</button> </td>
            <td><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="editrow">update </button></td>
            
                   </tr> 
            
                 `;
                
     
      
        
    
    
 })
 document.getElementById("tbody").innerHTML=row;
}
 
// -------------------------------------------------------

// url 
const url ="../json/data.json";

fetch(url).then(res => res.json()).then(data => {renderPost(data)});



// - ------   -------create new row and put it table -----------------------

btn.addEventListener("submit",e =>{

e.preventDefault(); 
 fetch(url,{method:"POST",headers:{
    "Content-Type":"application/json"},body:JSON.stringify({
        "ID":"4",
        "name":username.value ,
        "age":age.value,
        "email":email.value,
        "number":userNumber.value,
        "price":price.value})}).then((res) =>console.log( res.json()))
        .then(data => {
            let dataarr=[];
            dataarr.push(data);
            renderPost(dataarr);
           console.log(dataarr);
           arr=dataarr;
           
        })
    });

    //-------------end create-------------------------------
 

//------------------------ delete the row ----------------------------


tbody.addEventListener("click",e =>{
    e.preventDefault();
    // use this to find the current index
    const row = e.target.closest("tr"); // Get the parent row element
    const rowID = row.dataset.id; // 

    let delbtn=e.target.id=="delrow";
    let editbtn=e.target.id="editrow";
   if(delbtn){
    console.log(rowID);
    //this used to fetch and delete the current row
     fetch(`${url}/${id}`,{method:"DELETE"}).then(res =>res.json()).then(window.location.reload());
   }else if (editbtn){
    const parent=e.target.parentElement;
    let  name=parent.querySelector('.id').textContent;
  

   }
})

document.querySelector

// tr.addEventListener("click", e=>{


//   console.log(  e.target.parentElement.dateset.id)
// });


