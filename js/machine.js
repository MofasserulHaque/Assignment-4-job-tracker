
document.getElementById('all-container').addEventListener('click',function(){
    const findall=document.getElementById('all');
   findall.classList.remove('hidden')
})

 const tabs=document.querySelectorAll('#btn-container button');
 for(j=0;j<tabs.length;j++){
     tabs[j].addEventListener('click',function(event){
    for(i=0;i<tabs.length;i++){
        tabs[i].classList.remove('btn-info')
    }
  event.target.classList.add('btn-info')
})
 }
 