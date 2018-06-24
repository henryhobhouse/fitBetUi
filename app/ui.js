import { Element } from 'html-element';
import document from "document";
import { ContractTime } from "./contract-time";
import { today } from "user-activity";


export function Ui(clock) {

    const statusLabel = document.getElementById("status");
    const stepsLabel = document.getElementById("steps");
    const remainingLabel = document.getElementById("startTime");
    const finishLabel = document.getElementById("finishTime");
    const percentage = document.getElementById("percentage");
    const finish = document.getElementById("finish");
    const stepsLeft = document.getElementById("stepsComplete");
    const clock = clock;

    this.showContract = (today, contract, relativeSteps) => {
        const contractTime = new ContractTime(contract);
        statusLabel.text = "Contract Started";
        stepsLabel.text = "--";
        stepsLabel.text = today.adjusted.steps.toString() ? `${today.adjusted.steps.toString()} Steps` : "0 Steps";
        remainingLabel.text = contractTime.getRemainingString();
        percentage.text = Math.ceil((relativeSteps / contract.targetSteps) * 100).toString() + "%";
        finishLabel.text = new Date(contract.endDate).toISOString().slice(0, 16).replace('T', ' ');
        stepsLeft.text = (contract.targetSteps - relativeSteps).toString() + " remaining"
    }

    this.showFinish = (msg) => {
        console.log("finshed and " + msg);
        stepsLabel.style.display = "none";
        stepsLeft.style.display = "none";
        percentage.style.display = "none";
        remainingLabel.style.display = "none";
        finishLabel.style.display = "none";
        statusLabel.text = "Finished";
        finishLabel.text = msg;
    }

    this.showElement = (element) => {
        element.style.display = "inline";
    }

    this.hideElement = (element) => {
        element.style.display = "none";
    }

    this.updateStatus = (status) => {
        statusLabel.text = status;
    }

}
