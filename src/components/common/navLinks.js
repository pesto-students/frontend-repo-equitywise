function generateNavLinks() {
    const page = window.location.pathname.split("/").pop();
    if (page === "index.html" || page === "") {
        return `
            <a href="#features" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ">Why Equity Wise</a>
            <a href="myportfolio.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Portfolio</a>
            <a href="mywishlist.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Wishlist</a>
            <a href="marketupdate.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Market Update</a>
            <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
            <a href="signup.html" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        `;
    } else if (page === "myportfolio.html") {
        return `
            <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Why Equity Wise</a>
            <a href="myportfolio.html" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">My Portfolio</a>
            <a href="mywishlist.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Wishlist</a>
            <a href="marketupdate.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Market Update</a>
            <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
            <a href="signup.html" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        `;
    } else if (page === "mywishlist.html") {
        return `
            <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Why Equity Wise</a>
            <a href="myportfolio.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Portfolio</a>
            <a href="mywishlist.html" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">My Wishlist</a>
            <a href="marketupdate.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Market Update</a>
            <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
            <a href="signup.html" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        `;
    } else if (page === "marketupdate.html") {
        return `
            <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Why Equity Wise</a>
            <a href="myportfolio.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Portfolio</a>
            <a href="mywishlist.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Wishlist</a>
            <a href="marketupdate.html" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Market Update</a>
            <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
            <a href="signup.html" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        `;
    } else if (page === "signup.html") {
        return `
            <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Why Equity Wise</a>
            <a href="myportfolio.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Portfolio</a>
            <a href="mywishlist.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Wishlist</a>
            <a href="marketupdate.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Market Update</a>
            <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
            <a href="signup.html" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        `;
    } else if (page === "login.html") {
        return `
            <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Why Equity Wise</a>
            <a href="myportfolio.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Portfolio</a>
            <a href="mywishlist.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Wishlist</a>
            <a href="marketupdate.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Market Update</a>
            <a href="login.html" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
            <a href="signup.html" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Started</a>
        `;
    }
