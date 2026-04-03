const btnCollection=document.getElementsByClassName('interview-btn');
for(let i=0;i<btnCollection.length;i++){
    btnCollection[i].addEventListener('click',function(event){
        const parentSection=event.target.parentElement;
        const grantSection=parentSection.parentElement;
        const newSection=document.createElement('section');
        newSection.innerHTML=grantSection.innerHTML;
        newSection.classList.add(
            "bg-white",
            "m-[40px]",
            "p-[10px]",
            "space-y-[15px]",
            "rounded-[20px]"
        )
        const findSection=document.getElementById('container-html');
        findSection.appendChild(newSection);
   findSection.classList.add('hidden');
  
    })
}

document.getElementById('interview-container').addEventListener('click',function(){
const liteall=document.getElementById('all');
liteall.classList.add('hidden');
const findRejectedBtn=document.getElementById('rejected-html');
findRejectedBtn.classList.add('hidden');
const removeHidden=document.querySelector('#container-html');
removeHidden.classList.remove('hidden');

})

let sum=0;
const checkIntervewClick=document.querySelectorAll('#all .interview-btn');
for(let j=0;j<checkIntervewClick.length;j++)
checkIntervewClick[j].addEventListener('click',function(event){
    // for(i=0;i<checkIntervewClick.length;i++)
         event.stopPropagation();
        sum++;
//   console.log(sum);
 const findInterviewNumber=document.getElementById('interview-number');
 findInterviewNumber.innerHTML=Number(sum);

 const findByDefault=document.getElementById("container-by-default");
 findByDefault.classList.add('hidden');
})