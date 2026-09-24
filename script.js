
// -----------------------------
// STORE DATA
// -----------------------------

const stores = [
    {
        id: 1,
        name: "Retro Revival",
        location: "New Orleans, LA",
        address: "123 Magazine Street",
        budget: "medium",

        styles: ["y2k", "grunge"],

        clothing: [
            "tops",
            "bottoms",
            "jackets"
        ],

        brands: [
            "levis",
            "nike"
        ],

        description:
            "A colorful vintage shop specializing in 90s and Y2K clothing.",

        hours:
            "Monday–Saturday: 10 AM–7 PM\nSunday: 12 PM–5 PM",

        website:
            "https://example.com",

        reviews: [
            {
                title: "Best vintage shop in New Orleans!",
                caption:
                    "Found the coolest vintage Levi's here. Definitely worth checking out if you love Y2K fashion.",
                link:
                    "https://example.com/review1"
            },

            {
                title: "So many unique pieces",
                caption:
                    "I found an amazing vintage jacket and the staff was super helpful!",
                link:
                    "https://example.com/review2"
            }
        ]
    },

    {
        id: 2,
        name: "The Vintage Rack",
        location: "New Orleans, LA",
        address: "456 Oak Street",
        budget: "low",

        styles: ["classic", "western"],

        clothing: [
            "tops",
            "dresses",
            "accessories"
        ],

        brands: [
            "ralphlauren"
        ],

        description:
            "Affordable vintage clothing with a large selection of classic pieces.",

        hours:
            "Monday–Saturday: 11 AM–6 PM\nSunday: Closed",

        website:
            "https://example.com",
        reviews: [
            {
                title: "Great selection of western wear",
                caption:
                    "This place has an amazing selection of vintage western shirts.",
                link:
                    "https://example.com/review3"
            },

            {
                title: "Really affordable!",
                caption:
                    "Found several pieces under $20. Great prices for vintage clothing.",
                link:
                    "https://example.com/review4"
            }
        ]
    },

    {
        id: 3,
        name: "Old School Clothing Co.",
        location: "Atlanta, GA",
        address: "123 Jane Street",
        budget: "high",

        styles: ["classic", "streetwear"],

        clothing: [
            "jackets",
            "bottoms",
            "accessories"
        ],

        brands: [
            "nike",
            "adidas",
            "designer"
        ],

        description:
            "Curated vintage designer and streetwear pieces.",

        hours:
            "Monday–Saturday: 11 AM–6 PM\nSunday: Closed",

        website:
            "https://example.com",

        reviews: [
            {
                title: "Great place to shop",
                caption:
                    "This place has an amazing selection of vintage streetwear.",
                link:
                    "https://example.com/review3"
            },

            {
                title: "Not affordable!",
                caption:
                    "Super fashionable but expensive items.",
                link:
                    "https://example.com/review4"
            }
        ]
    },


    {
        id: 4,
        name: "Y2K Paradise",
        location: "New Orleans, LA",
        address: "67 Willow Street",
        budget: "medium",

        styles: ["y2k", "streetwear"],

        clothing: [
            "tops",
            "bottoms",
            "dresses"
        ],

        brands: [
            "nike",
            "designer"
        ],

        description:
            "A store focused on colorful Y2K fashion and early-2000s trends.",

        hours:
            "Monday–Saturday: 11 AM–6 PM\nSunday: Closed",

        website:
            "https://example.com",

        reviews: [
            {
                title: "Great place to shop",
                caption:
                    "This place has an amazing selection of vintage streetwear.",
                link:
                    "https://example.com/review3"
            },

            {
                title: "Not affordable!",
                caption:
                    "Super fashionable but expensive items.",
                link:
                    "https://example.com/review4"
            }
        ]

    }

];


// -----------------------------
// DISPLAY STORES
// -----------------------------

function displayStores(storeList) {

    const results = document.getElementById("storeResults");

    // Clear previous results

    results.innerHTML = "";


    // No results

    if (storeList.length === 0) {

        results.innerHTML = `
            <div class="no-results">
                <h3>No stores found.</h3>
                <p>Try changing your filters.</p>
            </div>
        `;

        return;
    }


    // Create a card for every store

    storeList.forEach(store => {

        const card = document.createElement("div");

        card.classList.add("store-card");

        card.addEventListener("click", function () {
            window.location.href = `store.html?id=${store.id}`;
        });


        card.innerHTML = `

            <h3>${store.name}</h3>

            <p>
                📍 ${store.location}
            </p>

            <p>
                💰 ${getBudgetSymbol(store.budget)}
            </p>

            <p>
                ${store.description}
            </p>


            <div>

                ${store.styles
                .map(style =>
                    `<span class="tag">${style}</span>`
                )
                .join("")
            }

                ${store.clothing
                .map(type =>
                    `<span class="tag">${type}</span>`
                )
                .join("")
            }

                ${store.brands
                .map(brand =>
                    `<span class="tag">${brand}</span>`
                )
                .join("")
            }

            </div>

        `;


        results.appendChild(card);

    });

}


// -----------------------------
// BUDGET SYMBOL
// -----------------------------

function getBudgetSymbol(budget) {

    if (budget === "low") {
        return "$";
    }

    if (budget === "medium") {
        return "$$";
    }

    if (budget === "high") {
        return "$$$";
    }

    return "";
}


// -----------------------------
// FILTER STORES
// -----------------------------

function filterStores() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const location =
        document
            .getElementById("locationInput")
            .value
            .toLowerCase();


    const budget =
        document
            .getElementById("budgetFilter")
            .value;


    const style =
        document
            .getElementById("styleFilter")
            .value;


    const clothing =
        document
            .getElementById("clothingFilter")
            .value;


    const brand =
        document
            .getElementById("brandFilter")
            .value;


    const filteredStores = stores.filter(store => {

        // Search filter

        const matchesSearch =
            store.name
                .toLowerCase()
                .includes(search)

            ||

            store.location
                .toLowerCase()
                .includes(search);

        const matchesLocation =
            location === ""
            ||
            store.location.toLowerCase().includes(location);


        // Budget filter

        const matchesBudget =
            budget === "all"
            ||
            store.budget === budget;


        // Style filter

        const matchesStyle =
            style === "all"
            ||
            store.styles.includes(style);


        // Clothing filter

        const matchesClothing =
            clothing === "all"
            ||
            store.clothing.includes(clothing);


        // Brand filter

        const matchesBrand =
            brand === "all"
            ||
            store.brands.includes(brand);


        return (
            matchesSearch
            &&
            matchesLocation
            &&
            matchesBudget
            &&
            matchesStyle
            &&
            matchesClothing
            &&
            matchesBrand
        );

    });


    displayStores(filteredStores);
}


// -----------------------------
// EVENT LISTENERS
// -----------------------------

// Check if we are on the search page

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", filterStores);


    document
        .getElementById("locationInput")
        .addEventListener("input", filterStores);


    document
        .getElementById("budgetFilter")
        .addEventListener("change", filterStores);


    document
        .getElementById("styleFilter")
        .addEventListener("change", filterStores);


    document
        .getElementById("clothingFilter")
        .addEventListener("change", filterStores);


    document
        .getElementById("brandFilter")
        .addEventListener("change", filterStores);


    // Reset filters

    document
        .getElementById("resetButton")
        .addEventListener("click", function () {

            document.getElementById("searchInput").value = "";

            document.getElementById("locationInput").value = "";

            document.getElementById("budgetFilter").value = "all";

            document.getElementById("styleFilter").value = "all";

            document.getElementById("clothingFilter").value = "all";

            document.getElementById("brandFilter").value = "all";

            displayStores(stores);

        });


    // Display stores when search page loads

    displayStores(stores);

}


// -----------------------------
// STORE DETAILS PAGE
// -----------------------------

const urlParams = new URLSearchParams(
    window.location.search
);

const storeId = urlParams.get("id");


// Only run this code when a store ID exists

if (storeId) {

    const store = stores.find(
        store => store.id == storeId
    );


    if (store) {

        // Store name

        document.getElementById("storeName").textContent =
            store.name;

        document.getElementById("storeNameDetails").textContent =
            store.name;


        // Location

        document.getElementById("storeLocation").textContent =
            store.location;

        document.getElementById("storeAddress").textContent =
            store.address;


        // Description

        document.getElementById("storeDescription").textContent =
            store.description;


        // Budget

        document.getElementById("storeBudget").textContent =
            getBudgetSymbol(store.budget);


        // Styles

        document.getElementById("storeStyles").innerHTML =
            store.styles
                .map(style =>
                    `<span class="tag">${style}</span>`
                )
                .join("");


        // Clothing

        document.getElementById("storeClothing").innerHTML =
            store.clothing
                .map(type =>
                    `<span class="tag">${type}</span>`
                )
                .join("");


        // Brands

        document.getElementById("storeBrands").innerHTML =
            store.brands
                .map(brand =>
                    `<span class="tag">${brand}</span>`
                )
                .join("");


        // Hours

        document.getElementById("storeHours").textContent =
            store.hours;


        // Website

        document.getElementById("storeWebsite").href =
            store.website;

        // Social Media Reviews

        const reviewsContainer =
            document.getElementById("socialReviews");

        reviewsContainer.innerHTML = "";


        store.reviews.forEach(review => {

            const reviewCard =
                document.createElement("div");

            reviewCard.classList.add("store-card");


            reviewCard.innerHTML = `

        <h4>${review.title}</h4>

        <p>
            ${review.caption}
        </p>

        <a
            href="${review.link}"
            target="_blank"
            rel="noopener noreferrer"
        >
            View Original Post
        </a>

    `;


            reviewsContainer.appendChild(reviewCard);

        });

    }

}
