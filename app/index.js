import { App } from "./app";
import * as messaging from "messaging";
import { today } from "user-activity";
import document from "document";
import { peerSocket } from "messaging";


const statusLabel = document.getElementById("status");
statusLabel.text = "Intialising..."

let app;

// Listen for the onopen event
console.log("Attempting to open socket...");

console.log(peerSocket.OPEN)
peerSocket.onopen = function() {
    console.log("Socket Opened");
    app = new App(messaging);
};

peerSocket.onmessage = evt => {
    const json = JSON.parse(evt.data);
    const currentSteps = today.local.steps
    app.update(json, currentSteps);
}

// Listen for the onerror event
peerSocket.onerror = function(err) {
    stepsLabel.text = err.message;

    // Handle any errors
    console.log("Error: " + err.message);
};
