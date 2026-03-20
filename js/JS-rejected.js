const rejectedbtnCollection=document.getElementsByClassName('rejected-btn');
for(i=0;i<rejectedbtnCollection.length;i++){
    rejectedbtnCollection[i].addEventListener('click',function(rejectedevent){
        const rejectedparentSection=rejectedevent.target.parentElement;
        const rejectedgrantSection=rejectedparentSection.parentElement;
        const rejectednewSection=document.createElement('section');
        rejectednewSection.innerHTML=rejectedgrantSection.innerHTML;
        rejectednewSection.classList.add(
            "bg-white",
            "m-[40px]",
            "p-[10px]",
            "space-y-[15px]",
            "rounded-[20px]"
        )
        const rejectedfindSection=document.getElementById('rejected-html');
        rejectedfindSection.appendChild(rejectednewSection);
             const rejectedremoveHidden=document.getElementById('rejected-html');
rejectedremoveHidden.classList.add('hidden');
    })
}
document.getElementById('rejected-container').addEventListener('click',function(){
const rejectedliteall=document.getElementById('all');
rejectedliteall.classList.add('hidden');
const rejectedremoveHidden=document.getElementById('rejected-html');
rejectedremoveHidden.classList.remove('hidden');
const findrejected=document.getElementById('container-html')
findrejected.classList.add('hidden')
})