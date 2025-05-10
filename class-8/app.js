// html 5 canvas

    const canvas = document.querySelector('#draw');
     const ctx = canvas.getContext('2d');
    //   console.log(canvas);
    //  console.log(ctx);

    //    canvas fullscreen bana dia
      
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //  basic styling
      let isDrawing = false ;
      let lastX =0;
      let lastY =0;
      let hue = 0;
      let direction = true;

    function draw(e){
          if(!isDrawing) return;
          console.log(e);
          ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
          ctx.beginPath();
          ctx.moveTo(lastX , lastY);
          ctx.lineTo(e.offsetX , e.offsetY);
          ctx.stroke();
          [lastX , lastY]= [e.offsetX , e.offsetY];
          hue++;
            if(hue >= 360)
                  hue = 0;
     if(ctx.linewidth >=100 || ctx.linewidth <= 1){
           direction =  !direction;
           ctx.linewidth += direction ?  1 : -1;

     }
        
     if(direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
            
    }
    
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

    canvas.addEventListener('mousemove', draw);
     canvas.addEventListener('mouseup', () => isDrawing = false);
     canvas.addEventListener('mouseout', () => isDrawing = false);

      
      

     