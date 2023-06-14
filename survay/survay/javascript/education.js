
function option() {

  let answer=document.getElementById("option").value
  console.log(answer)
  if (answer=="Yes")
  {
      
    document.getElementById("grade").value = "12"

  }
  else{

    document.getElementById("grade").value = ""

  }
  
}


let count = 1 
let arrSubject = []
let locStorage = localStorage.getItem("subjects")
let data = JSON.parse(locStorage)

if (data !== "") {
  
arrSubject = data

}

     function addSubject()
     {


        var mySubject =document.getElementById("subject").value
        var myLevel = document.getElementById("level").value

       
         let subjects={x:count,subject:mySubject, level:myLevel}
         arrSubject.push(subjects)
         localStorage.setItem("subjects", JSON.stringify(arrSubject))

        //  arrSubject.forEach(student => {
             
             copyToHtml(subjects)
             count++
             
            //  })
     
     
            document.getElementById("subject").value =""
            document.getElementById("level").value= ""
       
     
     }




// let div = '';  
let html = '';

function copyToHtml(subject) 
{
    let parenDiv=document.getElementById("sub")
    let tr = document.createElement("tr")
   
    tr.innerHTML=
    `
        <td>${subject.x}</td>
        <td>${subject.subject}</td>
        <td>${subject.level}</td>
        <td><button class="delete">Delete</button></td>
     
    `
    parenDiv.appendChild(tr)
    
    
}

let parentDiv = document.getElementById("sub")

parentDiv.addEventListener( 'click', (e) =>{

  deleteCourse(e.target)

} )

function getLocalStorage() {

const storage = localStorage.getItem("subjects")
let data = JSON.parse(storage)
  console.log(data)

  data.forEach(subject => {
    
    copyToHtml(subject) 

  });
}

function deleteCourse(listener) {
  
    if (listener.classList.contains("delete")) {
       
       listener.parentElement.parentElement.remove()
       
    }


  }
  function process2(){
    location.href="institution.html"
 }
 function previous() {
    location.href="nextOfKin.html"
 }
 