const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
        const response = await fetch("http://localhost:5000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({query}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Process the response data
    } catch (error) {
        console.error("Error fetching search results:", error.message);
    }
};
