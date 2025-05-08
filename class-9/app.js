const dogs = [{name : 'snickers', age : 2}, {name : 'huge', age : 4}];
function makeGreen(){
     const p = document.querySelector('p');
     p.style.color = '#BADA55';
     p.style.fontSize = '50px'
}
 
 console.log('hello');

  console.log('hello i am a %s string!,',' ');
    console.log('oh nooh');
    console.log('shit');

     // info

      console.info('corcodiles eat 3-4 people per year');

       console.assert(p.ClassList.Contains('ouch') , 'that is wrong!');
        console.clear();
     //    dom lagging
        console.log(p);
        console.dir(p);
       console.clear();
          // grouping console logs

           dogs.forEach(dog =>{
                 console.groupCollapsed(`${dog.name}`);
                 console.log(`This is ${dog.name}`);
                console.log(`${dog.name} is ${dog.age} years old`);
                console.log(`${dog.name} is ${dog.age} dog years old`);
                console.log(`${dog.name}`);
           });

           console.count('Wes');
           console.count('Wes');
           console.count('Steve');
           console.count('Steve');
           console.count('Wes');
           console.count('Steve');
           console.count('Wes');
           console.count('Steve');
           console.count('Steve');
           console.count('Steve');
           console.count('Steve');
           console.count('Steve');
       

          //     Timing a Task

            console.Time('fetching dat')
            fetch('https://api.github.com/users/wesbos')
             .then(data =>data.json())
             .then(data =>{
                 console.timeEnd('fetching data');
                 console.log(data);
             });

              console.table(dogs);