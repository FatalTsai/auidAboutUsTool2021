const testFolder = './';
const fs = require('fs');
const path = require('path')
var exec = require('child_process').exec


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if(path.extname(file)!=".html")
        return
    // console.log(file);
    
    let ans = ''
    let raw_html = fs.readFileSync(file,'utf-8')
    // console.log(raw_html)


    let tmp=''
    tmp = raw_html.match(/<a href="http:\/\/www\.ec\.europa\.eu\/consumers\/odr"/gs) //delete hyper link 
    raw_html=raw_html.replace(/<a href="http:\/\/www\.ec\.europa\.eu\/consumers\/odr" /gs,'<a href') 

    tmp = raw_html.match(/\<img src="(.*?)hspace="12"\/>/gs) //delete img tag https://regex101.com/r/iN6pX6/271
    raw_html=raw_html.replace(/\<img src="(.*?)hspace="12"\/>/gs,'\n')

    tmp = raw_html.match(/\<font size="3"/gs) //delete img tag https://regex101.com/r/iN6pX6/271
    raw_html=raw_html.replace(/\<font size="3"/gs,'<font size="4"')
    raw_html=raw_html.replace(/\<font size="5"/gs,'<font size="6" class="aboutusTitle"')

    // tmp = raw_html.match(/\<font size="3"/gs) //delete internal tag https://regex101.com/r/iN6pX6/272
    raw_html=raw_html.replace(/\<span id="Frame1"(.*?)<\/span>/gs,'\n')
    
    console.log(tmp)


    fs.writeFileSync(file,raw_html)
  });
})

