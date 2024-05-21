document.addEventListener("DOMContentLoaded", function () {
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
                <a href="signup.html" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Get Started</a>
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
        } else {
            return `
                <a href="index.html#whyequitywise" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Why Equity Wise</a>
                <a href="index.html#myportfolio" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Portfolio</a>
                <a href="index.html#mywishlist" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">My Wishlist</a>
                <a href="index.html#marketupdate" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Market Update</a>
                <a href="login.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</a>
                <a href="signup.html" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</a>
            `;
        }
    }

    const headerHTML = `
    <header class="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
        <section class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <img src="../../assets/images/EW_Long.png" alt="Equity Wise Logo" class="w-32 h-auto">
            </div>
            <div>
                <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                    &#9776;
                </button>
                <nav class="hidden sm:flex flex-wrap space-x-2 space-y-2 text-base" aria-label="main">
                    ${generateNavLinks()}
                </nav>
            </div>
        </section>
    </header>
    `;

    document.getElementById("header").innerHTML = headerHTML;
});