const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
 let lastchecked;
   function handlecheck(e){
     let inbetween = false;
         if(e.shiftKey && this.checked){
              checkboxes.forEach(checkboxes =>{
                  if(checkboxes === this || checkboxes ===
                        lastchecked){
                              inbetween = !inbetween;
                        }

                           if(inbetween){
                          checkboxes.checked = true;

                      }
                      });
              
         }
           lastchecked = this;       
   }
   checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck));
    