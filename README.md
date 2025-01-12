## **Step 1: React.js + Vite Installation and Setup**

1. **Install Node.js and npm**:  
   Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

2. **Create a new Vite project**:
    ```bash
    npm create vite@latest my-chrome-extension --template react
    cd my-chrome-extension
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Run the development server**:
    ```bash
    npm run dev
    ```

## **Step 2: Install and Set Up Tailwind CSS**

1.  **Install Tailwind CSS**:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```
2.  **Configure Tailwind**:
    Update the `tailwind.config.js` file:

    ```javascript
    export default {
        content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
        theme: {
            extend: {},
        },
        plugins: [],
    };
    ```

3.  **Add Tailwind Directives**:
    In src/index.css, include Tailwind's base styles:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
## **Step 3: Configure manifest.json File**

1. **Create a manifest.json file in the public folder**:
   ```json
{
    "manifest_version": 3,
    "name": "My Chrome Extension",
    "version": "1.0",
    "description": "A Chrome extension built with React and Vite",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    },
    "permissions": [],
    "host_permissions": []
}
```
Update Vite Config:
Add the publicDir property in vite.config.js to include manifest.json in the build:

javascript
Copy code
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
    },
    publicDir: "public",
});
Step 4: Build and Load in Chrome Extension
Build the project:

bash
Copy code
npm run build
Load the extension in Chrome:

Open Chrome and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top-right corner.
Click on Load unpacked and select the dist folder from your project directory.
Your React.js + Vite setup for the Chrome extension is now complete!
