//example about how to access url requested by web browser
//write a nodejs script which returns name of district of given state 
//for example
//localhost:5000/gujarat
//then nodejs script should return all district name of gujarat
//such as ahmedbad,bhavnagar,baroda,surat etc 
var http = require('http');
var server = http.createServer(function (request, response){
    response.writeHead(200,{'content-type':'text/html'});
    var url = request.url; //request.url is used to get url(web page) requested by browser
    console.log(url);
    var output = "";
    if(url === "/")
    {
        output = "<ol><li>Andhra Pradesh</li><li>Arunachal Pradesh</li><li>Assam</li><li>Bihar</li><li>Chhattisgarh</li><li>Goa</li><li>Gujarat</li><li>Haryana</li><li>Himachal Pradesh</li><li>Jharkhand</li><li>Karnataka</li><li>Kerala</li><li>Madhya Pradesh</li><li>Maharashtra</li><li>Manipur</li><li>Meghalaya</li><li>Mizoram</li><li>Nagaland</li><li>Odisha</li><li>Punjab</li><li>Rajasthan</li><li>Sikkim</li><li>Tamil Nadu</li><li>Telangana</li><li>Tripura</li><li>Uttar Pradesh</li><li>Uttarakhand</li><li>West Bengal</li></ol>";
    }    
    else if(url === "/gujarat")
    {
        output = "<ol><li>Ahmedabad</li><li>Amreli</li><li>Anand</li><li>Aravalli</li><li>Banaskantha</li><li>Bharuch</li><li>Bhavnagar</li><li>Botad</li><li>Chhota Udaipur</li><li>Dahod</li><li>Dang</li><li>Devbhoomi Dwarka</li><li>Gandhinagar</li><li>Gir Somnath</li><li>Jamnagar</li><li>Junagadh</li><li>Kheda</li><li>Kutch</li><li>Mahisagar</li><li>Mehsana</li><li>Morbi</li><li>Narmada</li><li>Navsari</li><li>Panchmahal</li><li>Patan</li><li>Porbandar</li><li>Rajkot</li><li>Sabarkantha</li><li>Surat</li><li>Surendranagar</li><li>Tapi</li><li>Vadodara</li><li>Valsad</li></ol>";
    }    
    else if(url === "/maharastra")
    {
        output = "<ol><li>Ahmednagar</li><li>Akola</li><li>Amravati</li><li>Aurangabad</li><li>Beed</li><li>Bhandara</li><li>Buldhana</li><li>Chandrapur</li><li>Dhule</li><li>Gadchiroli</li><li>Gondia</li><li>Hingoli</li><li>Jalgaon</li><li>Jalna</li><li>Kolhapur</li><li>Latur</li><li>Mumbai City</li><li>Mumbai Suburban</li><li>Nagpur</li><li>Nanded</li><li>Nandurbar</li><li>Nashik</li><li>Osmanabad</li><li>Palghar</li><li>Parbhani</li><li>Pune</li><li>Raigad</li><li>Ratnagiri</li><li>Sangli</li><li>Satara</li><li>Sindhudurg</li><li>Solapur</li><li>Thane</li><li>Wardha</li><li>Washim</li><li>Yavatmal</li></ol>"
    }    
    else 
    {
        output = "<h2>not found </h2>";
    }
    output = "<html><head><title>the easylearn academy</title></head><body>" + output + "</body></html>";
    response.write(output);
    response.end();
});
var portno = 5000;
server.listen(5000);
console.log('ready to accept request');