export const extractProductInfo = () => {
    const productInfo = {
        name: document.querySelector("h1")?.textContent, //-
        price: document.querySelector(".price")?.textContent, //-
        image: document //-
            .querySelector("img[data-main-image]") //-
            ?.getAttribute("src"), //-
        name:
            document.querySelector("h1")?.textContent?.trim() ||
            "Unknown Product", //+
        price: document.querySelector(".price")?.textContent?.trim() || "N/A", //+
        image: new URL(
            document
                .querySelector("img[data-main-image]")
                ?.getAttribute("src") || "",
            window.location.origin
        ).href, //+
    };

    chrome.runtime.sendMessage(
        {
            type: "EXTRACT_PRODUCT",
            data: productInfo,
        },
        (response) => {
            //+
            if (chrome.runtime.lastError) {
                //+
                console.error(
                    "Error sending message:",
                    chrome.runtime.lastError
                ); //+
            } else {
                //+
                console.log("Message sent successfully", response); //+
            } //+
        }
    );
};
