var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','views');

app.get("/one",function(request,response){
    response.render('one');
});

app.get("/two",function(request,response){
    response.render('two');
});

app.get("/third",function(request,response){
    response.render('third');
});

app.get("/contact",function(request,response){
    var data = {
        name:"Ankit Patel",
        mobile: '9662512857',
        email: 'ankit3385@gmail.com'
    }
    response.render('contact',data);
})

app.get("/contact2",function(request,response){
    var data = {
        name:"Ankit Patel",
        mobile: '9662512857',
        email: 'ankit3385@gmail.com',
        website: 'http://www.theeasylearnacademy.com'
    }
    response.render('contact',data);
})
app.get("/loop1",function(request,response){
    var data = {
        countries : [

            "Afghanistan",
          
            "Armenia",
          
            "Azerbaijan",
          
            "Bahrain",
          
            "Bangladesh",
          
            "Bhutan",
          
            "Brunei",
          
            "Cambodia",
          
            "China",
          
            "Cyprus",
          
            "East Timor",
          
            "Georgia",
          
            "India",
          
            "Indonesia",
          
            "Iran",
          
            "Iraq",
          
            "Israel",
          
            "Japan",
          
            "Jordan",
          
            "Kazakhstan",
          
            "North Korea",
          
            "South Korea",
          
            "Kuwait",
          
            "Kyrgyzstan",
          
            "Laos",
          
            "Lebanon",
          
            "Malaysia",
          
            "Maldives",
          
            "Mongolia",
          
            "Myanmar (Burma)",
          
            "Nepal",
          
            "Oman",
          
            "Pakistan",
          
            "Palestine",
          
            "Philippines",
          
            "Qatar",
          
            "Russia (partially in Europe)",
          
            "Saudi Arabia",
          
            "Singapore",
          
            "Sri Lanka",
          
            "Syria",
          
            "Taiwan",
          
            "Tajikistan",
          
            "Thailand",
          
            "Turkey",
          
            "Turkmenistan",
          
            "United Arab Emirates",
          
            "Uzbekistan",
          
            "Vietnam",
          
            "Yemen"
          
          ]
    }

    response.render('loop1',data);
});

app.get("/loop2",function(request,response){
    var data = {
        countries : [

            "Afghanistan",
          
            "Armenia",
          
            "Azerbaijan",
          
            "Bahrain",
          
            "Bangladesh",
          
            "Bhutan",
          
            "Brunei",
          
            "Cambodia",
          
            "China",
          
            "Cyprus",
          
            "East Timor",
          
            "Georgia",
          
            "India",
          
            "Indonesia",
          
            "Iran",
          
            "Iraq",
          
            "Israel",
          
            "Japan",
          
            "Jordan",
          
            "Kazakhstan",
          
            "North Korea",
          
            "South Korea",
          
            "Kuwait",
          
            "Kyrgyzstan",
          
            "Laos",
          
            "Lebanon",
          
            "Malaysia",
          
            "Maldives",
          
            "Mongolia",
          
            "Myanmar (Burma)",
          
            "Nepal",
          
            "Oman",
          
            "Pakistan",
          
            "Palestine",
          
            "Philippines",
          
            "Qatar",
          
            "Russia (partially in Europe)",
          
            "Saudi Arabia",
          
            "Singapore",
          
            "Sri Lanka",
          
            "Syria",
          
            "Taiwan",
          
            "Tajikistan",
          
            "Thailand",
          
            "Turkey",
          
            "Turkmenistan",
          
            "United Arab Emirates",
          
            "Uzbekistan",
          
            "Vietnam",
          
            "Yemen"
          
          ]
    }

    response.render('loop2',data);
});

app.get("/object1",function(request,response){
    let data = {
        player : {  
            name: "Virat Kohli",
            born: "November 5, 1988",
            birth: "Delhi, India",
            nationality: "Indian",
            height: "1.75 m (5 ft 9 in)",
            weight: "70 kg (154 lbs)",          
            bat: "Right-handed",
            ball: "Right-arm medium"
        }
    }
    response.render('object1',data);
});
app.get("/array_of_object",function(request,response){
    var students = [
        {name:'Sanket',surname:'Solanki',age:22,gender:true},
        {name:'Priya',surname:'desai',age:25,gender:false},
        {name:'mahesh',surname:'patel',age:24,gender:true},
        {name:'Nega',surname:'shah',age:26,gender:true},
    ];
    response.render('array_of_object',{
        table: students
    });
});
app.listen(5000);
console.log('ready to accept request.');