import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/users";
export function sendGetRequest(setState) {
    axios
        .get(url)
        .then(function (res) {
            alert("Request is successfull");
            console.log(res);
            setState(res.data);
        })
        .catch(function (error) {
            alert("Something went wrong");
            console.log(error);
        });
}