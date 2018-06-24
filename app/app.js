import { today } from "user-activity";
import clock from "clock";
import { Ui } from "./ui";
import { TIME_IN_MS } from "../common/time-in-ms";
import * as messaging from "messaging";


let contract;
let ui;
let startSteps;

export function App() {

    clock.granularity = 'seconds';
    const ui = new Ui(clock);

    const init = () => {
        clock.ontick = () => {
            let relativeSteps = startSteps ? today.local.steps - startSteps : 0
            let stepUpdate = {
                contract: false,
                absoluteSteps: today.local.steps,
                relateiveSteps: relativeSteps,
                contractFulfilled: false
            }
            if ( contract ) {
                if ( relativeSteps > contract.targetSteps) {
                    ui.showFinish("Success");

                } else {
                    ui.showContract(today, contract, relativeSteps);
                    stepUpdate.contract = true
                }
            } else {
                ui.updateStatus("No Contract Yet");
            }
            messaging.peerSocket.send(JSON.stringify(stepUpdate));
        }
    }

    init();
}

App.prototype.update = function(data, steps) {
    contract = data;
    if (!startSteps) {
        startSteps = steps;
    }
};

