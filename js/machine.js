
document.getElementById('all-container').addEventListener('click',function(){
    const bydefault=document.getElementById('by-default');
    bydefault.classList.add('hidden')
    const findall=document.getElementById('all');
   findall.classList.remove('hidden');

   const findRejectedBtn=document.getElementById('rejected-html');
findRejectedBtn.classList.add('hidden');
const removeHidden=document.querySelector('#container-html');
removeHidden.classList.add('hidden');
const findJObsNumber=document.getElementById('job-number');
findJObsNumber.classList.remove('hidden')
 const interviewNumber=document.getElementById("interview-jobs-number");
 interviewNumber.classList.add('hidden');
 const rejectedNumber=document.getElementById("rejected-jobs-number");
 rejectedNumber.classList.add('hidden');
})

 const tabs=document.querySelectorAll('#btn-container button');
 for(let j=0;j<tabs.length;j++){
     tabs[j].addEventListener('click',function(event){
    for(i=0;i<tabs.length;i++){
        tabs[i].classList.remove('btn-info')
    }
  event.target.classList.add('btn-info');

})
 }

let jobsNumber=document.getElementById('job-number').innerText;
const deleteSection=document.getElementsByClassName('delete-btn');
for(let j=0;j<deleteSection.length;j++){
    deleteSection[j].addEventListener('click',function(event){
      const findTheMain=event.target.parentElement;
      const parentFind=findTheMain.parentElement.parentElement;
      parentFind.classList.add('hidden');
      event.stopPropagation();
      jobsNumber--;
      const findDeleteNumber=document.getElementById('job-number');
     findDeleteNumber.innerText=jobsNumber;
    //  console.log(jobsNumber)
    
    })
}




