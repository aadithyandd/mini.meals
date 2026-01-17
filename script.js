const API_URL = "https://script.google.com/macros/s/AKfycbw28MFKmvjVehdowK_BG4xYjCdxXFbu52F61MtMLUlpABUfE8W5M8H3J3_PsvyYzUSzHQ/exec";
fetch(API_URL).then(r => r.json()).then(data => {
    document.getElementById('mealName').innerText = data.itemName;
    document.getElementById('mealPrice').innerText = data.price;
});

function showForm() {
    document.getElementById('orderForm').style.display = 'block';
    document.getElementById('bookBtn').style.display = 'none';
}

async function submitOrder() {
    const name = document.getElementById('stdName').value;
    const sem = document.getElementById('stdSem').value;
    const phone = document.getElementById('stdPhone').value;
    const meal = document.getElementById('mealName').innerText;

    if (!name || !sem || !phone) return alert("Please fill all details");

    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ action: "order", name, sem, phone, meal })
    });
    const result = await response.text();
    alert(result);
    location.reload();
}
function createFloatingMeals() {
    const container = document.getElementById('floatingContainer');
    const items = ['🍲', '🍚', '🌶️', '🍋', '🍛', '🍃'];
    const itemCount = 15;

    for (let i = 0; i < itemCount; i++) {
        const span = document.createElement('span');
        span.className = 'floating-item';

        span.innerText = items[Math.floor(Math.random() * items.length)];

        span.style.left = Math.random() * 100 + 'vw';
        span.style.top = Math.random() * 100 + 'vh';

        span.style.animationDelay = Math.random() * 5 + 's';
        span.style.fontSize = (Math.random() * 20 + 20) + 'px';

        container.appendChild(span);
    }
}

window.addEventListener('load', createFloatingMeals);
