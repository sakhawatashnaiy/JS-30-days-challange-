    
    const playstae = (e) =>{
        if(e.propertyName=== 'transform') return 
        e.target .classList.remove('.playing')
    }
      
    const playMusic = (e) =>{
        const sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
        // console.log(sound);
        const key = document.querySelector(`.key[data-key='e.keyCode']`);
        // console.log(key)
          
         if(!sound) return ;
          key.classList.add('.playing');
          sound.currentTime =  0 ;
          sound.play();
    }
       const keys = Array.from(document.querySelectorAll('.key'));
       keys.forEach(sound);
       function sound(e){
           e.addEventListener('transitioned',playstae);
       }
      window.addEventListener('keydown' , playMusic);
  