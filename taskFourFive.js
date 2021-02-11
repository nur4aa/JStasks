const someList = document.getElementById('cart-items')

const anotherVar = document.createElement('div')
anotherVar.textContent = 'Canned Fish x 4'
someList.replaceChild(anotherVar, someList.children[4])

someList.children[1].remove()