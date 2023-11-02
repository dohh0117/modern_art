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
 
   let currentIndex =0;
   const sliderWrap= document.querySelector("#slider > ul");
   const slider =document.querySelectorAll(".slide");
   const sliderClone =sliderWrap.firstElementChild.cloneNode(true);
   sliderWrap.appendChild(sliderClone);

   setInterval(()=>{
      currentIndex++;
      sliderWrap.style.marginLeft =-currentIndex*1380+"px";
      sliderWrap.style.transition ="all 0.6s";
      if(currentIndex ==3){
         setTimeout(()=>{
            sliderWrap.style.transition="0s";
            sliderWrap.style.marginLeft="0";
            currentIndex=0;
         },700)
      }
   },5000)
 

   const tabBtn=document.querySelectorAll(".intro-mn>li")//버튼설정
   const tabCont=document.querySelectorAll(".introcon-wrap")//컨텐츠 설정
   console.log(tabBtn)
   console.log(tabCont)
   tabCont.forEach(el=>el.style.display="none");
   tabCont[0].style.display="block";
   tabBtn.forEach((tab,index)=>{
      tab.addEventListener("click",()=>{
         tabBtn.forEach(tab=>tab.classList.remove("active"));
         tab.classList.add("active");

         tabCont.forEach(cont=>cont.style.display="none");
         tabCont[index].style.display="block";
      })
   })

 



}