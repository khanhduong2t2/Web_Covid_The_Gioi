fetch('../static/model/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    
        for(var i=0; i < data.length; i++) {
            var htmlObj = document.getElementById('info_data');
            htmlObj.innerHTML = htmlObj.innerHTML 
            + "<br>"
            + "<tr>"
            + "<td>"+ data[i].country + "</td>"
            + "<td>"+  data[i].confirmed + "</td>"
            + "<td>"+  data[i].deaths + "</td>"
            + "<td>"+  data[i].recovered + "</td>"
            + "</tr>"
            + "<br>"
            ;
        }
        var country = document.getElementById("country").innerHTML
        country = country.toLowerCase()
        if (country == "") {
            document.getElementById("country").innerHTML = data[0].country
            document.getElementById("confirmed").innerHTML = data[0].confirmed
            document.getElementById("deaths").innerHTML = data[0].deaths
            document.getElementById("recovered").innerHTML = data[0].recovered
        }
        else {
            var x = 0
            for(var i=0; i < data.length; i++) {
                if ( country == data[i].country || country == data[i].country.toLowerCase() ) {
                    document.getElementById("country").innerHTML = data[i].country
                    document.getElementById("confirmed").innerHTML = data[i].confirmed
                    document.getElementById("deaths").innerHTML = data[i].deaths
                    document.getElementById("recovered").innerHTML = data[i].recovered
                    var test = true
                    break;
                }
                x = i
            }
            if ( x == data.length-1) {
                alert("Quốc gia này không tồn tại. Bạn vui lòng điền lại \nHãy điền tên Tiếng Anh của quốc gia này. ")
                window.location="/index.html";
            }
        }
       
        
    })
    .catch(function(err){
        console.log(err);
    });

