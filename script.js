
const navMenu = document.getElementById('navmenu');
const Hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('closeicon');

Hamburger.addEventListener('click', function() {
  if (navMenu.style.display = "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
});
Hamburger.addEventListener('click', function() {
    if(closeIcon.style.display= 'none'){
      closeIcon.style.display = 'block'
    } 
  });
closeIcon.addEventListener('click', function() {
 
    if(closeIcon.style.display= 'block'){
      navMenu.style.display = 'none'
    }  
    } 
  );
closeIcon.addEventListener('click', function() {
 
    if(closeIcon.style.display= 'block'){
      closeIcon.style.display= 'none'
    }  else if(closeIcon.style.display= 'block'){
      Hamburger.style.display = 'none'
    }
    }
    
  );

  Hamburger.addEventListener('click',function(){
    Hamburger.style.display = 'none'
})
closeIcon.addEventListener('click',function(){
    Hamburger.style.display = 'block'
})

