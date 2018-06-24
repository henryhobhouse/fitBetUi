import * as messaging from "messaging";
import { FitBetApi } from "./fit-bet-api";


let fitBetApi;

export function App() {
    fitBetApi = new FitBetApi();
}

App.prototype.apiUpdate = async () => {
    return await fitBetApi.getContract();
}
