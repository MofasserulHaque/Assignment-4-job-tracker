const btnCollection=document.getElementsByClassName('interview-btn');
for(i=0;i<btnCollection.length;i++){
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
liteall.classList.add('hidden')
const removeHidden=document.getElementById('container-html');
removeHidden.classList.remove('hidden');
const findRejectedBtn=document.getElementById('rejected-html');
findRejectedBtn.classList.add('hidden');
})

