var backdrop=document.querySelector('.backdrop');
var modal=document.querySelector('.modal')
var selectedPlanButtons=document.querySelectorAll('.plan button');
var noModalButton=document.querySelector('.close__modal');
var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');


for(var i=0; i<selectedPlanButtons.length; i++){
  selectedPlanButtons[i].addEventListener("click", ()=>{
    // backdrop.style.display='block';
    // modal.style.display='block';
    backdrop.classList.add('open');
    modal.classList.add('open');
    
  })
}

backdrop.addEventListener("click", function(){
  mobileNav.classList.remove('open');
  closeModal();
});


if(noModalButton){
  noModalButton.addEventListener("click",closeModal);
}



function closeModal(){
  if(modal){
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  
}

toggleButton.addEventListener('click', function(){
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
})
