
const form = document.querySelector("form"),
statusTxt=form.querySelector(".submit");

form.onsubmit = (e)=> {
    e.preventDefault(); // prevent form from submitting
    statusTxt.style.display="block";

    let xhr = new XHMLHttpRequest(); // creating new xml object
    xhr.open("POST", "message.php", true); // sending post request to message.php file
    xhr.onload = ()=> { //once ajax loaded
        if(xhr.readyState == 4 && status == 200){}
            let response = xhr.response;
            console.log(response);

    
    }
    let formData = new FormData(form);
    xhr.send(); // sending form data

}