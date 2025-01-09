import {handleMessage} from "./messageHandler";

chrome.runtime.onInstalled.addListener(() => {
    console.log("Fashion Product Finder extension installed");
});

chrome.runtime.onMessage.addListener(handleMessage);
