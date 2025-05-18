
 const x = document.getElementById('#main-video');
 const y =document.getElementById('#playbtn');
 const z =document.getElementById('#rangeArea');
 const A = document.getElementById('#mutebtn');
 const B = document.getElementById('volumeArea');

  y.addEventListener('click', function(){
      if(x.paused){
           x.play();
           y.innerHTML = '&#10074 ; &#10074';
      } else{
          x.paused;
          y.innerHTML ='&#9658';
      }
  })
   x .addEventListener('timeupdate',function(){
        const progress = (x.currentTime/x.duration)*100;
        z.value=progress;
   });
    z.addEventListener('input',function(){
          const time = (z.value/100)* x.duration;
          x.currentTime = time;
    });

     A.addEventListener('click' function(){
          if(x.muted){
              x.muted = false;
              A.innerHTML = '&#128266'
              B.value = x.volume;
          }else{
              x.muted = true;
              A.innerHTML = '&#128266';
              B.value = 0;
          }
     });
       B.addEventListener('input' , function(){
            x.valume = B.value;
             if(B.value > 0){
                  x.muted = false;
                  A. innerHTML = '&#1298266';
             }else{
                  x.muted = true;
                  A.innerHTML = '&#128266'

             }
       });