document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cards-container');
    const cart_text = document.querySelector('#cart_text');
    const checkout = document.querySelector('.checkout_Btn');

    const fetchTasks = async () => {
        try{
            const response = await fetch('/cart');
            const items = await response.json();
            return items;
        }catch(error){
            console.error('Error fetching tasks:', error);
        }
    }

    const renderItem = async () => {
        const newCards = document.createDocumentFragment();
        const items = await fetchTasks();
        if(items.length === 0){
            cart_text.style.display = 'block';
        }
        items.forEach(coffee => {
            // console.log(coffee);
            /* Adding each coffee card to the page
                1. Create a div element to hold all HTML elements and assign class name, 'card', to it
                2. Create an img element to display the coffee image. Store the image from data to src
                3. Create a h2 element and store the title from data to the textContent
                4. Create an input area to modify amount of an items
                    a. a text area to display the amount
                    b. two buttons for increase and decrease the amount
            */
            // 1.
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-id', coffee.id);

            // 2.
            const img = document.createElement('img');
            img.src = coffee.image;

            // 3.
            const title = document.createElement('h2');
            title.textContent = coffee.title;

            // 4
            const amountArea = document.createElement('div');
            amountArea.classList.add('amountArea');

            // Display amount
            const textBox = document.createElement('p');
            textBox.classList.add('amount');
            // textBox.textContent = `Amount: ${coffee.amount}`; //without button to change amount
            textBox.textContent = coffee.amount; //with add and remove button to change amount

            // Add items to cart button
            const add_Btn = document.createElement('p');
            add_Btn.id = "add_btn";
            add_Btn.textContent = "+";
            add_Btn.addEventListener('click', async () => {
                try{
                    // Send API Post request to the server
                    const response = await fetch('/cart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(coffee)
                    });
                    if(response.ok){
                        renderItem();
                    }
                }catch(error){
                    console.error('Failed to add items:', error);
                }
            });

            // Remove items from cart button
            const remove_Btn = document.createElement('p');
            remove_Btn.id = 'remove_btn';
            remove_Btn.textContent = "-";
            remove_Btn.addEventListener('click', async () => {
                try{
                    // Send API delete request to the server with item id
                    const id = card.getAttribute('data-id');
                    const response = await fetch(`/cart/${id}`, { method: 'DELETE' });
                    if(response.ok){
                        console.log(response.text());
                    }else{
                        console.error('Error deleting task:', await response.text());
                    }
                    renderItem();
                }catch(error){
                    console.error('Error deleting task:', error);
                }
            })
            amountArea.appendChild(remove_Btn);
            amountArea.appendChild(textBox);
            amountArea.appendChild(add_Btn);
            // 5.
            card.appendChild(img)
            card.appendChild(title);
            // card.appendChild(textBox); //without button to change amount
            card.appendChild(amountArea); //with button to change amount
            newCards.appendChild(card);
        });
        container.innerHTML = '';
        checkout.innerHTML = '';
        container.appendChild(newCards);
        // Add the checkout button to the cart page if there is item in the shopping cart
        if(container.innerHTML !== ''){
            cart_text.style.display = 'none';
            const checkout_Btn = document.createElement('button');
            checkout_Btn.type = "button";
            checkout_Btn.id = "checkout_Btn";
            checkout_Btn.textContent = "Checkout";
            checkout_Btn.addEventListener('click', async() =>{
                const deletePromise = []
                // Removing all items in the cart
                items.forEach(async (item) => {
                    // Each delete api call will decrease the amount by one
                    // Use for loop to ensure removing all items with amount more than one
                    for(let i = 0; i < item.amount; i++){
                        const response = await fetch(`/cart/${item.id}`, { method: 'DELETE' });
                        if(response.ok){
                            console.log(response.text());
                        }else{
                            console.error('Error deleting task:', await response.text());
                        }
                        deletePromise.push(response)
                    }
                });
                await Promise.all(deletePromise)
                // Slow the process of switching page to ensure all items are deleted
                setTimeout(() => {
                    window.location.href = '/checkout.html';
                }, 1000);
            })
            checkout.appendChild(checkout_Btn);
        }
    }

    // renderItem();
    renderItem();
})