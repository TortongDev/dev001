document.addEventListener('DOMContentLoaded',(e)=>{
    e.preventDefault();
    
    document.addEventListener('scroll',()=>{
        var nav = document.querySelector('nav');
        var toppage = document.querySelector('[href="#toppage"]');
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop < 80) {
            toppage.style.color = "yellow"
        } else {
            toppage.style.color = ""
        }
        if(document.documentElement.scrollTop > 80 ){
            nav.style.position ="fixed"
            nav.style.marginTop ="-190px"
        }else{
            nav.style.position  = ""
            nav.style.marginTop = ""
            

            // nav.style.width ="1140px"
        }

    //fade over member //
    const member = document.querySelector('.member');
    const mem1 = document.querySelector('#mem1');
    const mem2 = document.querySelector('#mem2');
    const mem3 = document.querySelector('#mem3');
    const kit  = document.querySelector('[href="#kit"]');
    if(document.documentElement.scrollTop > 517 && document.documentElement.scrollTop < 1300){
        mem1.style.width        = '310px';
        mem1.style.transition   = '1s';
        mem2.style.width        = '310px';
        mem2.style.transition   = '1s';
        mem3.style.width        = '310px';
        mem3.style.transition   = '1s';
        kit.style.color         = 'yellow';
        // member.style.transition = '0.9s';
    }else{
        kit.style.color         = '';
    }

    const chanal  = document.querySelector('[href="#news"]');
    if(document.documentElement.scrollTop > 1700 ){
        chanal.style.color = "yellow"
    }else{
        chanal.style.color      = ""
        // kit.style.color         = '';
    }

    })

    const box       = document.querySelector('.box1');
    const hovers    = document.querySelector('.icon-and-box');
    const icon      = document.querySelector('.icon');

    
    // var slides = document.getElementsByClassName("slide");
    //     for (var i = 0; i < slides.length; i++) {
    //     Distribute(slides.item(i));
    // }
    const faicon  = document.querySelector('#faicon');
    faicon.addEventListener('click',()=>{
        const ullib = document.querySelector('#ul-li-mobile')        
        if(ullib.classList == ""){
            // alert("classList=0");
            ullib.classList.add('ul-li-mobile');
        }else{
            ullib.classList.remove('ul-li-mobile');
        }
    })


    
})
function scrollby1(){
    // alert('test');
    // document.querySelector('.wrapper-content').style.backgroundColor="green"
    document.querySelector('.info-member').scrollTo(200,200);
    


    // document.getElementById("d").scrollBy({
    //     top: 100,
    //     left: 100,
    //     behaviour: 'smooth'
    //  })
} 

const imgPeopleAdmin   = document.querySelectorAll('[alt=img-people-admin]')
console.log(imgPeopleAdmin);
imgPeopleAdmin.forEach((img)=>{
    img.addEventListener('click',()=>{
        document.querySelector('.modal-img').style.display = "block";
        document.querySelector('[alt=img]').src = img.getAttribute('src');
    })
   
})
document.querySelector('.modal-img').addEventListener('click',()=>{
    document.querySelector('.modal-img').style.display = "none";
})