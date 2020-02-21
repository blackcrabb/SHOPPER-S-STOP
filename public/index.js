
$(function play() {

    let productList=$('#product-list')

    fetchProducts(function(products){
        productList.empty()
        for(product of products)
        {
            productList.append(createProductcard(product))
        }
    })
})

