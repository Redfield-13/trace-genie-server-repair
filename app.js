const cheerio = require('cheerio');
const axios = require('axios');
const mongoose = require('mongoose');
const { ProfilingLevel } = require('mongodb');
const postCode = require('./postcode');
const fs = require("fs");
const { parse } = require("csv-parse");

const postcodes = [];

fs.createReadStream("./postcodes.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    postcodes.push(row[0]);
    //console.log(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    const main = async ()=>{
      console.log("postcodes:");
      console.log(postcodes);
      for(const postcode of postcodes){
        const results =  await postCode.ggs2(postcode);
      }
  }
  main();
  });


console.log('hi');

  





// for ending



/** axios.get('https://www.tracegenie.com/amember4/amember/prov/get9atest.php?q629=46%20VICTORIA%20ROAD&q729=GU21%202AA&q59=BRAITHWAITE&q329=PAUL',{ headers: {
  Cookie: cookie
}}).then(urlResponse => {

  const $ = cheerio.load(urlResponse.data);

  $("body a").each((i,element)=>{
  
   const status = $(element)
   .find('img')
   .attr('src');
   
   const reesult = Boolean(status.includes('y')).toString().replace("true","yes").replace("false","no");

   console.log((2022-i) + " voters roll - " + reesult);
   console.log(typeof(parseInt('123', 10)));
  });
});*/
 