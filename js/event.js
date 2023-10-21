window.onload =function(){
   let navList =document.querySelectorAll(".nav > ul > li");
   console.log(navList)

   navList.forEach(function(navItem){
      navItem.addEventListener("mouseover",function(){
         this.querySelector(".submenu-nav-area").style.visibility="visible"
      })

   })
   navList.forEach(function(navItem){
      navItem.addEventListener("mouseout",function(){
         this.querySelector(".submenu-nav-area").style.visibility="hidden"
      })

   })
   // document.getElementsByClassName('nav').addEventListener("mouseover",function(){
   //    document.getElementById('header').classList.add('on')
   // })
 

 

   

 



}