// let secondHand = document.querySelector('.second-hand');
// let minHand = document.querySelector('.min-hand');
// let hourHand = document.querySelector('.hand-hour');

// function setDate() {
//   let now = new Date();

//   const seconds = now.getSeconds();
//   const secondDegrees = ((seconds / 60) * 360) + 90;
//   secondHand.style.transform = `rotate(${secondDegrees}deg)`;

//   const minute = now.getMinutes();
//   const minDegrees = ((minute / 60) * 360) + ((seconds / 60) * 6) + 90;
//   minHand.style.transform = `rotate(${minDegrees}deg)`;

//   const hour = now.getHours();
//   const hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000); // run every second
// setDate(); // first call to set initial time
  //  below comment

 const secondHand = document.querySelector('.second-hand');
 const minHand = document.querySelector('.min-hand');
 const hourHand  = document.querySelector ('.hand-hour');

     function setDate(){
         let  now = new Date();
            const seconds = now.getSeconds();
            const secondDegrees =((seconds/60)*360)+90;
            secondHand.style.transform = `rotate(${secondDegrees}deg)`;

            const minute = now.getMinutes();
            const minuteDegrees = ((minute/60)*360)+ ((seconds/60)*6)+90;
             minHand.style.transform = `rotate(${minuteDegrees}deg)`;

             const hour  = now.getHours();
              const hourDegrees = ((hour/12)*360)+((minute/60)*30);
              hourHand.style.transform = `rotate(${hourDegrees})`;

     }
        setInterval(setDate,100);

         setDate();
