import { me } from "companion";
import { time } from "../common/time.constant";
import * as messaging from "messaging";

const wakeInterval = 30 * time.minute;


// Get - Check contracts for user - Response Contract

// Post - Contract update - TBC if push or pulled from WebApp

// Wake the Companion after 30 minutes
me.wakeInterval = wakeInterval;

if (me.launchReasons.wokenUp) {
    // Do things...
    checkTime();
} else {
    // Close the companion and wait to be awoken
    me.yield();
}

function checkTime() {

}