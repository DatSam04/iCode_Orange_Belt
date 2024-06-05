document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.cards-container');

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
        const item = await fetchTasks();
        item.forEach(coffee => {
            // console.log(coffee);
            /* Adding each coffee card to the page
                1. Create a div element to hold all HTML elements and assign class name, 'card', to it
                2. Create an img element to display the coffee image. Store the image from data to src
                3. Create a h2 element and store the title from data to the textContent
                4. Create an input area to modify amount of an item
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

            // Add item to cart button
            const add_Btn = document.createElement('p');
            add_Btn.id = "add_btn";
            add_Btn.textContent = "+";
            add_Btn.addEventListener('click', async () => {
                try{
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
                    console.error('Failed to add item:', error);
                }
            });

            // Remove item from cart button
            const remove_Btn = document.createElement('p');
            remove_Btn.id = 'remove_btn';
            remove_Btn.textContent = "-";
            remove_Btn.addEventListener('click', async () => {
                try{
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
        container.appendChild(newCards);
    }

    // renderItem();
    renderItem();
})