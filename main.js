
    let todothings =document.getElementsByClassName("input")[0];
    let todobtn=document.getElementsByClassName("btn")[0];
    const inputTask=document.getElementsByClassName("input-task")[0];
    
 addTask=(task)=>{
    let date=new Date();
    let yy=date.getFullYear();
    let mm=date.getMonth()+1;
    let dd=date.getDate();
    if(dd<10){dd='0'+dd;}
    if(mm<10){mm='0'+mm;}
let listItem=document.createElement('li');
     showItem= inputTask.appendChild(listItem);
     const div_holder =document.createElement("div");
     div_holder.classList.add("div-holder");
     listItem.appendChild(div_holder);
     const taskElem=document.createElement("p");
     taskElem.classList.add("todo-info");
     taskElem.innerHTML=task+`<br><span>${dd+"/"+mm+"/"+yy}</span>`;
     div_holder.appendChild(taskElem);
     const deleteBtn =document.createElement("button");
     deleteBtn.classList.add("delete-button");
     deleteBtn.innerHTML=`<img src="deleteicon.png">`;
     div_holder.appendChild(deleteBtn);
     deleteBtn.addEventListener("click",()=>{
        deleteTask(deleteBtn);
     })
     const div_holder1=document.createElement("div");
     div_holder1.classList.add("todo-info1");
     listItem.appendChild(div_holder1);
     const Status=document.createElement("p");
     Status.classList.add("status");
     Status.innerHTML=`<lablel>Status</lablel> : Pending`;
     div_holder1.appendChild(Status);
     const editBtn=document.createElement("button");
     editBtn.classList.add("edit-button");
     editBtn.innerHTML=`<img src="editicon1.png">`;
     div_holder1.appendChild(editBtn);
     editBtn.addEventListener("click",()=>{
        editTask(listItem);
     })
    saveData();
}
const deleteTask=(deleteBtn)=>{
     const chosenItem=deleteBtn.closest("li");
     inputTask.removeChild(chosenItem);
    saveData()
}
const editTask=(editBtn)=>{
    editBtn.contentEditable="true";  
    setTimeout(()=>{
        editBtn.contentEditable="false";
       saveData();
    },5000)
   
}
todobtn.addEventListener("click",()=>{
    const task=todothings.value;
    if(task ==""){
        return;
    }
addTask(task);
todothings.value="";
});
function saveData(){
    localStorage.setItem("data",inputTask.innerHTML);
}
function showList(){
    inputTask.innerHTML=localStorage.getItem("data");
}
showList();

