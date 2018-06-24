import { TIME_IN_MS } from "../common/time-in-ms";

export function ContractTime(contract) {

    const startTime = contract.startDate;
    const finishTime = contract.endDate;

    this.parseRemainingMin = (remainingMs) => {
        const remainingMinFloat = remainingMs / TIME_IN_MS.minute;
        const remainingMin = Math.ceil(remainingMinFloat);
        const remainingString = `${remainingMin} Minute`;
        if ( remainingMin > 1 ) {
            return remainingString + "s left";
        }
        return remainingString + " left";
    }

    this.parseRemainingHr = (remainingMs) => {
        const remainingHrFloat = remainingMs / TIME_IN_MS.hour;
        const remainingHr = Math.ceil(remainingHrFloat);
        return `${remainingHr} Hours`;
    }

    this.getRemainingString = () => {
        const remainingMs = new Date(finishTime) - new Date().getTime();
        if ( remainingMs < TIME_IN_MS.hour ) {
            return this.parseRemainingMin(remainingMs);
        } else {
            return this.parseRemainingHr(remainingMs);
        }
    }

}
