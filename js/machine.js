
document.getElementById('all-container').addEventListener('click',function(){
    const bydefault=document.getElementById('by-default');
    bydefault.classList.add('hidden')
    const findall=document.getElementById('all');
   findall.classList.remove('hidden');

   const findRejectedBtn=document.getElementById('rejected-html');
findRejectedBtn.classList.add('hidden');
const removeHidden=document.querySelector('#container-html');
removeHidden.classList.add('hidden');
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
 