$(function (){
    let productName= $('#productName')
    let productManufacturer= $('#productManufacturer')
    let productPrice= $('#productPrice')

    $('#addbut').click(function(){

        addProducts(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct){
                window.alert("Added"+addedProduct.name+"to Database")
            }
        )
    })
})