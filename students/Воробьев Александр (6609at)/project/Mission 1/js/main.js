const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (a) => {
    return `<div class="product-item">
                <h3>${a.title}</h3>
                <p>${a.price} &#8381;</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.goods-list').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderPage(products);