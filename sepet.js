
let sepetLocal = localStorage.getItem('sepet')



let sepet = JSON.parse(sepetLocal)

console.log(Boolean(sepet))



const h1 = document.getElementById('h1')

const container = document.querySelector('.container')

// console.log(sepet.length)

if (sepet) {

    sepet.forEach(urun => {
        const div = document.createElement('div')
        div.style.width = '80%'
        div.classList.add('d-flex', 'align-items-center', 'border', 'rounded-3', 'gap-3', 'mt-2')

        const imgDiv = document.createElement('div')
        imgDiv.style.width = '20%'
        imgDiv.style.height = '150px'

        const img = document.createElement('img')
        img.src = urun.image
        // img.classList.add('w-100')
        img.style.width = '100%'
        img.style.height = '100%'

        const title = document.createElement('h3')
        title.textContent = urun.title

        const price = document.createElement('h4')
        price.textContent = `${urun.price}$`

        const button = document.createElement('i')
        button.classList.add('fa-solid', 'fa-trash', 'fs-4')
        button.style.color = 'darkred'

        button.addEventListener('click', function () {
            console.log(this.parentElement)

            let urunDiv = this.parentElement
            urunDiv.remove()

            let silincekIndex = sepet.indexOf(urun)

            console.log(sepet.splice(silincekIndex, 1))

            // sepet = sepet.slice(silincekIndex, silincekIndex + 1)

            // delete sepet[silincekIndex]

            localStorage.setItem('sepet', JSON.stringify(sepet))

            console.log(sepet)



        })


        imgDiv.appendChild(img)

        div.appendChild(imgDiv)
        div.appendChild(title)
        div.appendChild(price)
        div.appendChild(button)

        container.appendChild(div)

    })
} else {
    const h4 = document.createElement('h4')
    h4.textContent = 'Sepetiniz Boş!!!'

    container.appendChild(h4)

}