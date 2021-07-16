describe('Nitrokey available?', function(){
   it('',function(){
        cy.visit('https://shop.nitrokey.com/shop/product/nk-fi2-nitrokey-fido2-55')
        cy.get('.availability_message_55').contains('Will be available shortly')
      
    })
})
