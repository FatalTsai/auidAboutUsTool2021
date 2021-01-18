const testFolder = './';
const fs = require('fs');
const path = require('path')
var exec = require('child_process').exec


let ans ='  '
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if(path.extname(file)!=".docx")
        return
    // console.log(file);

    ans+=file+' '

  });


  // console.log(ans)
exec(`unoconv -f html ${ans}`,
function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    // console.log('stderr: ' + stderr);
    if (error !== null) {
         console.log('exec error: ' + error);
    }
});
});

