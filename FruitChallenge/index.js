let fruits = [
    '🍊', '🍎', '🍎','🍎', '🍊', '🍎', '🍊', '🍊', '🍊' 
]

let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

sortFruits = () => {
    appleShelf.innerText = fruits.filter(f => f === '🍎')
    orangeShelf.innerText = fruits.filter(f => f === '🍊')
}