
function getPostd(userId) {
    let request = new XMLHttpRequest();
    request.open('GET',"https://jsonplaceholder.typicode.com/posts?userId="+userId);
    request.responseType = "json"
    request.send();
    request.onload = function(){
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response
            document.querySelector('.posts').innerHTML = "";
            for( post of posts) {
                let content = `
                    <div class="post-user1">
                        <h4>${post.title}</h4>
                        <p>${post.body}</p>
                    </div>
                `
                document.querySelector('.posts').innerHTML += content;
            }
        }else{ 
            alert("Error");
        }
    } 
} 
getPostd(1);
function getUser() {
    let request = new XMLHttpRequest();
    request.open('GET',"https://jsonplaceholder.typicode.com/users");
    request.responseType = "json"
    request.send();
    request.onload = function(){
        if (request.status >= 200 && request.status < 300) {
            let users = request.response
            document.querySelector('.users').innerHTML = "";
            for( user of users) {
                let content = `
                    <div class="user " onclick="userClicked(${user.id}, this)">
                        <h4>${user.name}</h4>
                        <p>${user.email}</p>
                    </div>
                `
                document.querySelector('.users').innerHTML += content;
            }
        }else{ 
            alert("Error");
        }
    } 
} 
getUser();
function userClicked(id, el) {
    getPostd(id);
    let selected = document.getElementsByClassName("selected");
    for(element of selected){
        element.classList.remove("selected");
    }
    el.classList.add("selected");
}
