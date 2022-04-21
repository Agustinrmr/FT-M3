var fs = require('fs');

module.exports = {

    pwd: function(){
    process.stdout.write(process.cwd())
    },

    date: function(){
    process.stdout.write('we´re in:');
    process.stdout.write(Date())
    },

    ls: function(){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    echo: function(data){
        data=data.join(' ')
        if(process.env[data]){
            process.stdout.write(`${data} variable is ${process.env[data]} \n`)
        }
   
     else process.stdout.write(data)
    },

    cat: function(data){
        fs.readFile(data[0],function(err,data){
            if(err)
            throw err;
            process.stdout.write(data)
            process.stdout.write("prompt > ");
        });
    },

    head: function(data){
        let end =data[1]
        fs.readFile(data[0],'utf-8',(err,data)=>{
            if(err)
            throw err;
            const lines=data.split('\n')

            for (let i=0;i<(parseInt(end)||10);i++){
                process.stdout.write(lines[i]+'\n')
            }
          
            process.stdout.write("prompt > ");
        })

    },

    tail: function(data){

        let begin=parseInt(data[1])||10

        fs.readFile(data[0],'utf-8',(err,data)=>{
            if(err)
            throw err;
            const lines=data.split('\n')
            let l = lines.length;
            if(begin<l){
                for(let i=(l-begin);i<l;i++){
                    process.stdout.write(lines[i]+'\n')
                }

            }else{
                process.stdout.write(data)  
            }


            
        })
        process.stdout.write("prompt > ");
    }
}



