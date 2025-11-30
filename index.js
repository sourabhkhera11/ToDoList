
let ar=[];
function addElement(event){
    const input=document.getElementById('input');
    if(input.value.trim()===""){
        console.log("Empty");
    }
    else{
        const original=document.getElementById('-2');
        const clone=original.cloneNode(true);
        ar.push(input.value);
        clone.id=ar.indexOf(input.value);
        clone.style.display = "flex";
        clone.querySelector("p").textContent = input.value;
        console.log(clone);
        const list=document.getElementById('TaskList');
        list.appendChild(clone);
        input.value="";
        console.log(ar);
    }
}

const TaskList =document.getElementById("TaskList");
TaskList.addEventListener("click", (e) => {
    const svg = e.target.closest("svg");
    if (!svg) return;   
    const element = svg.closest(".element");
    const eleid=element.id;
    const task=document.getElementById(eleid);
    if(eleid!="-1"){
        ar.splice(eleid,1);
        console.log(eleid);
        // Re-assign IDs to remaining tasks
        const tasks = TaskList.querySelectorAll(".element");
        tasks.forEach((task, index) => {
            if(task.id!="-1"){
                task.id = index;
            }
        });
    }
    console.log(ar);
    TaskList.removeChild(task);
});
















// const btn=document.getElementById('enterBtn');
// const input=document.getElementById('input')
// const list=document.getElementById('TaskList');
// let idCount=0;
// btn.addEventListener("click",()=>{
//     if(input.value.trim()===""){
//         console.log("Empty");
//     }
//     else{
//         console.log(input.value);
//         const ele=document.createElement('p');
//         ele.innerText=input.value;
//         input.value="";
//         const dive=document.createElement('div');
//         dive.innerHTML='<span><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="#c51616"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51616"/></svg></span>';
//         dive.prepend(ele);
//         dive.classList.add("element");
//         idCount++;
//         dive.id=idCount;
//         list.appendChild(dive);
//         // console.log(dive);
//     }
// })











// const svgtag=document.querySelectorAll('span svg');


// svgtag.forEach((svg)=>{
    //     svg.addEventListener("click",(e)=>{
        //         console.log(e.target.closest('.element').id);
        //         console.log(svgtag);
        //     })
        // })