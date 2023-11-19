
//  Fake git


// Fake Store
/* <div class="col-3">
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk
            of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
</div> */

async function getDate(){
    
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }catch(error) {
            console.log(error)
    
        }
}

    getDate()
    .then (data=>{
        console.log(data)
        data.forEach(urun => {
            
        });
    })












