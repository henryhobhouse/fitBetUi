// import { steps } from "user-activity";
import { time_in_ms } from "../common/time-in-ms";
import { today } from "user-activity";

// Fetch UI elements we will need to change
let stepsLabel = document.getElementById("steps");
let updatedLabel = document.getElementById("updated");

// Keep a timestamp of the last reading received. Start when the app is started.
let lastValueTimestamp = Date.now();

// Initialize the UI with some values
stepsLabel.text = "--";
updatedLabel.text = "...";

// This function takes a number of milliseconds and returns a string
// such as "5min ago".
function convertMsAgoToString(millisecondsAgo) {
    if (millisecondsAgo < 2 * time_in_ms.minute) {
        return Math.round(millisecondsAgo / time_in_ms.second) + "s ago";
    }
    else if (millisecondsAgo < time_in_ms.hour) {
        return Math.round(millisecondsAgo / time_in_ms.minute) + "min ago";
    }
    else {
        return Math.round(millisecondsAgo / time_in_ms.hour) + "h ago"
    }
}


// This function updates the label on the display that shows when data was last updated.
function updateDisplay() {
    if (lastValueTimestamp !== undefined) {
        updatedLabel.text = convertMsAgoToString(Date.now() - lastValueTimestamp);
    }
}

// Declare an event handler that will be called every time_in_ms a new HR value is received.
    // Peek the current sensor values
    console.log("Current steps: " + today.steps);
    stepsLabel.text = today.steps;
    lastValueTimestamp = Date.now();
// }

// Begin monitoring the sensor
// hrm.start();

// And update the display every second
setInterval(updateDisplay, 1000);