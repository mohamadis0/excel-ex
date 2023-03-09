fetch('http://localhost:3000/data')
.then(response => response.json())
.then(json => {
 for (let i = 0; i < json.length; i++) {
        var option = document.createElement('option')
        option.innerHTML =  json[i].FirstName + "  " + json[i].LastName;
        document.getElementById('sel').appendChild(option);
 }      })