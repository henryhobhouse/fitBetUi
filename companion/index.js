import { me } from "companion";
import { time_in_ms } from "../common/time-in-ms";
import * as messaging from "messaging";
import { permissions } from ""

permissions.granted("access_activity");
const wakeInterval = 30 * time_in_ms.minute;

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