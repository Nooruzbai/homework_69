async function make_request(url, context) {
    let response = await fetch(url, context);
    if (response.ok) {
        console.log('OK')
        return await response.json();
    } else {
        console.log('Not Successful')
        let error = new Error(response.statusText);
        error.response = response;
        error_res = await response.json()
        console.log(error_res.error)
        return error_res;
    }

}
let get_csrf_token = async function(){
    let url = "api/get-csrf-token/"
    let request_csrf_token = await make_request(url, {method: "GET"} );
    console.log(request_csrf_token)

}

 function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

get_csrf_token();
let csrf_token = getCookie('csrftoken');


let Add = async function(event){
    let url = event.target.dataset.apiUrl;

    let get_element = document.getElementById('result')
    if (get_element){
        get_element.remove()
    }


    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let data = JSON.stringify({"num1": num1, "num2": num2});
    let request_data = await make_request(url, {method: "POST", body:data, headers: {'X-CSRFtoken': csrf_token}})
    let answer = document.createElement('p')
    answer.id = "result"
     document.body.appendChild(answer)

    if (request_data.error){
        answer.innerText = request_data.error;
        answer.style.color = "white"
        answer.style.backgroundColor = "red"
        answer.style.padding = "10px"

    }
    else{
        answer.innerText = `${request_data.answer}`
        answer.style.color = "white"
        answer.style.backgroundColor = "green"
        answer.style.padding = "10px"
    }
    }

let Subtract = async function(event){
    let url = event.target.dataset.apiUrl;

    let get_element = document.getElementById('result')
    if (get_element){
        get_element.remove()
    }

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let data = JSON.stringify({"num1": num1, "num2": num2});
    let request_data = await make_request(url, {method: "POST", body:data, headers: {'X-CSRFtoken': csrf_token}})
    let answer = document.createElement('p')
    answer.id = "result"
    document.body.appendChild(answer)


    if (request_data.error){
        answer.innerText = request_data.error;
        answer.style.color = "white"
        answer.style.backgroundColor = "red"
        answer.style.padding = "10px"

    }
    else{
        answer.innerText = `${request_data.answer}`
        answer.style.color = "white"
        answer.style.backgroundColor = "green"
        answer.style.padding = "10px"
    }

}

let Multiply = async function(event){
    let url = event.target.dataset.apiUrl;

    let get_element = document.getElementById('result')

    if (get_element){
        get_element.remove()
    }

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let data = JSON.stringify({"num1": num1, "num2": num2});
    let request_data = await make_request(url, {method: "POST", body:data, headers: {'X-CSRFtoken': csrf_token}})
    let answer = document.createElement('p')
    answer.id = "result"
    document.body.appendChild(answer)


    if (request_data.error){
        answer.innerText = request_data.error;
        answer.style.color = "white"
        answer.style.backgroundColor = "red"
        answer.style.padding = "10px"
    }
    else{
        answer.innerText = `${request_data.answer}`
        answer.style.color = "white"
        answer.style.backgroundColor = "green"
        answer.style.padding = "10px"
    }

}


let Divide = async function(event){
    let url = event.target.dataset.apiUrl;

    let get_element = document.getElementById('result')

    if (get_element){
        get_element.remove()
    }

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let data = JSON.stringify({"num1": num1, "num2": num2});
    let request_data = await make_request(url, {method: "POST", body:data, headers: {'X-CSRFtoken': csrf_token}})
    console.log(request_data)

    let answer = document.createElement('p')
    answer.id = "result"
    document.body.appendChild(answer)

    if (request_data.error){
        answer.innerText = request_data.error;
        answer.style.color = "white"
        answer.style.backgroundColor = "red"
        answer.style.padding = "10px"
    }
    else{
        answer.innerText = `${request_data.answer}`
        answer.style.color = "white"
        answer.style.backgroundColor = "green"
        answer.style.padding = "10px"
    }


}





