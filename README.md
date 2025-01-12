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
