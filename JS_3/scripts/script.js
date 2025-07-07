let cart = [];

        function addToCart() {
        const name = document.getElementById('productName').value.trim();
        const qty = parseInt(document.getElementById('productQty').value);

        if (!name || qty <= 0) {
            alert('Enter valid product name and quantity.');
            return;
        }

        const index = cart.findIndex(item => item.name === name);
        if (index > -1) {
            cart[index].qty += qty;
        } else {
            cart.push({ name, qty });
        }

        document.getElementById('productName').value = '';
        document.getElementById('productQty').value = 1;
        renderCart();
        }

        function updateItem(index, newQty) {
        const qty = parseInt(newQty);
        if (qty <= 0) {
            deleteItem(index);
        } else {
            cart[index].qty = qty;
        }
        renderCart();
        }

        function deleteItem(index) {
        cart.splice(index, 1);  
        renderCart();
        }

        function renderCart() {
        const cartDiv = document.getElementById('cartItems');
        cartDiv.innerHTML = '';

        if (cart.length === 0) {
            cartDiv.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
            <span>${item.name}</span>
            <input type="number" value="${item.qty}" min="1"
                onchange="updateItem(${index}, this.value)" />
            <button onclick="deleteItem(${index})">Delete</button>
            `;
            cartDiv.appendChild(itemDiv);
        });
        }