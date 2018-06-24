import { URL } from "url";
import * as messaging from "messaging";

let url
// Function won't compile as typescript.
export function FitBetApi() {
    url = "https://6i3p2qzzod.execute-api.eu-west-1.amazonaws.com/dev/contract";
}

FitBetApi.prototype.getContract = function(steps) {

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    return new Promise(function(resolve, reject) {
        messaging.peerSocket.onmessage = (evt) => {
            console.log("Data recieved: " + evt.data); //Log it
            fetch(url, {
                method : "POST",
                headers : myHeaders,
                body : steps
            }) // Build the request
                .then( (response) => {
                return response.json();}) //Extract JSON from the response
            .then( (data) => {
                    console.log("Got response from server:", JSON.stringify(data)); // Log ig
                messaging.peerSocket.send(JSON.stringify(data));
                resolve();}) // Send it to the watch as a JSON string
            .catch(function(error) {
                    console.log(error);
                    reject();
                }); // Log any errors with Fetch
            }
    })
};
