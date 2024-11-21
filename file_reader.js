const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  fs.readFile('lastname.txt','utf8', (err, lastName) =>{
    fs.readFile('age.txt','utf8',(err, age)=>{
      fs.readFile('hobbies.txt', 'utf8', (err, hobbiesData)=>{
        const hobbies = JSON.parse(hobbiesData);

          console.log(`${data1} ${lastName} is ${age} years of and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`)

      })
    })
  })
})