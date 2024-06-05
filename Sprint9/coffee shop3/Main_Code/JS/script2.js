document.addEventListener("DOMContentLoaded", () => {
    // asyncs function of cold coffee
    async function Apis () {
        /* try and catch to get the data from the server
            fetch data from the server and filter the hot coffee from the data
        */
        try {
            const response = await fetch('/coffee')
            const data = await response.json();
            const hotCoffee = data.filter(coffee => coffee.type === "hot");
            return hotCoffee;
        } catch(err){
            console.log("Error fetching Data", err);
        }
    }

    // async to display data in cards for cold coffee
    async function renderData() {
        const container = document.querySelector('.cards-container');
        // Page will automatically loading data from server every second to apply new information to the page (if any)
        // To prevent duplicating cards in the pages, we need to remove the old cards before adding the new ones
        // Used createDocumentFragment() to hold the new cards before adding to the container. This minimizes reflows and repaints
        const newCards = document.createDocumentFragment();
        const images = document.querySelector('image-container');

        const data = await Apis();
        // if there is no data return nothing
        if(!data) {
            alert('No data found');
            return;

        }
        // create a card for each coffee item in the server
        data.forEach(coffee => {
            // console.log(coffee);
            /* Adding each coffee card to the page
                1. Create a div element to hold all HTML elements and assign class name, 'card', to it
                2. Create a h2 element and store the title from data to the textContent
                3. Create a p element to store the description of the coffee to textContent
                4. Create another p element to store the ingredients of the coffee to textContent
                5. Create an img element to display the coffee image. Store the image from data to src
                6. Add all HTML elements to the first div using appendChild. Add the coffee card (div) to the container
            */
            // 1.
            const card = document.createElement('div');
            card.classList.add('card');

            // 2.
            const title = document.createElement('h2');
            title.textContent = coffee.title;

            // Add item to cart button
            const add_Btn = document.createElement('p');
            add_Btn.id = "add_btn";
            add_Btn.textContent = "+"
            add_Btn.addEventListener('click', async () => {
                try{
                    const response = await fetch('/cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(coffee)
                      });
                }catch(error){
                    console.error('Failed to add item:', error);
                }
            });

            // 3.
            const description = document.createElement('p');
            description.textContent = coffee.description;

            // 4.
            const ingredients = document.createElement('p');
            ingredients.textContent = coffee.ingredients;

            // 5.
            const img = document.createElement('img');
            img.src = coffee.image;

            // 6.
            card.appendChild(title);
            card.appendChild(add_Btn);
            card.appendChild(description);
            card.appendChild(ingredients);
            card.appendChild(img);
            newCards.appendChild(card);
        });
        container.innerHTML = '';
        container.appendChild(newCards);
    }
    // return the function
    renderData();
    // setInterval(renderData, 1000);
})