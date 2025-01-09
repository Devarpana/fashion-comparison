export const handleMessage = (request, sender, sendResponse) => {
    if (request.type === "EXTRACT_PRODUCT") {
        console.log("Product extraction requested:", request.data);
        // TODO: Implement product extraction logic
        sendResponse({success: true});
    }
};
