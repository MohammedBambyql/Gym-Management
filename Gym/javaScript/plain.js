// new DataTable('#example', {
//     ajax: 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=fd80f4ca0a7645b4ad9a7fb57e6ea6dd',
//     columns:"articles" [
//         { data: 'author' },
//         { data: 'description' },
//         { data: 'publishedAt' },
//         { data: 'extn' },
//         { data: 'start_date' },
//         { data: 'salary' }
//     ]
// });



var url="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=fd80f4ca0a7645b4ad9a7fb57e6ea6dd";
var data;

function get_Data(){
    var req=new XMLHttpRequest();
     req.open("GET",url);
     req.onreadystatechange=function(){
    if(req.readyState==4 && req.status==200){
       data=JSON.parse(req.response);
       data=data.articles;
       console.log(data)
    //    show_data();
    //  
    
     }
     req.send();
}};

get_Data();

function show_data(){
    row="";

for(i=0;i<data.length;i++)
{
row+=`<tr>
<td>`+data[i].author+`</td>
<td>`+data[i].author+`</td>
<td>`+data[i].author+`</td>
<td>`+data[i].author+`</td>
<td>`+data[i].author+`</td>
</tr>`

}
document.getElementById("tbody").innerHTML=row;
};