const commands=require('./commands/index.js')

//console.log(Object.keys(process))

   // Output un prompt
   process.stdout.write('prompt > ');
   
   // El evento stdin 'data' se dispara cuando el user escribe una línea
   process.stdin.on('data', function (data) {
     var typed = data.toString().trim(); // remueve la nueva línea

    var[cmd, ...text]=typed.split(' ')
    //  process.stdout.write('You typed: ' + cmd);
    //Acces command an execute it
    if(commands[cmd])
    commands[cmd](text);
    else process.stdout.write('No such command ');

     process.stdout.write('\nprompt > ');
   
    });


