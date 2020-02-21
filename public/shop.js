function fetchProducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function addProducts(name,manuf,price,done){
    $.post('/api/products',{
        name:name,
        manufacturer:manuf,
        price:price,
    },function(data){
        done(data)
    })
}

function createProductcard(product)
{
    return $(`  <div class="col-4 card mx-2 p-2">
                <h3 class="product-name">${product.name}</h3> 
                <div class="product-manufacturer"><b>${product.manufacturer}</b></div>
                <div class="row">
                        <div class="col m-3 p-3">
                            <b>${product.price}</b>
                        </div>
                    <button class="col btn btn-danger m-3">BUY</button>
                </div>  
                </div>
                <br>`)
}