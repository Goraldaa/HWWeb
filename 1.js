let cel = Number.parseInt(prompt("Введите температуру в градусах Цельсия"))
let far = 9 / 5 * cel + 32
far = far.toFixed(1) 
alert(`Цельсий: ${cel}, Фаренгейт: ${far}`)