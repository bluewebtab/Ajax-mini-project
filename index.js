function getProfile(){
    var username = 'bluewebtab'
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState = 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);
            document.getElementById('profile').innerHTML =  `<div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
            </div>
             <div class="panel-body">
              <div class="row">
              <div class="col-md-3">
              <img src = "${user.avatar_url}"
              </div>
              <div class="col-md-9>

             </div>
             </div>
             </div>
             </div>`;
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/' + username, true);
    xhttp.send();
}
getProfile();