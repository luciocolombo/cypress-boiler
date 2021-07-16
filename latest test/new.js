import indexPage from './indexpage'
/* import commands from '../commands/commands' */
describe('formas de get element', ()=>{
  /*   before(()=>{
        cy.log("precondiciones")
    }) */
    beforeEach(()=>{
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
    })
   /*  afterEach(()=>{
        cy.log("aftereach")
    })
    after(()=>{
        cy.log("postcondiciones")
    })
    it("fist",()=>{
       
        cy.get('.search_query.form-control.ac_input').type('hola')
        cy.get('#search_query_top').type("sisisisisi")
        cy.get('[placeholder="Search"]').clear().type("one more")
    }) */

/*     it("checkbox",()=>{
        cy.get('#layered_category_4').check()
        cy.get('#layered_id_attribute_group_3').check()
        cy.get('#layered_category_4').uncheck()
        cy.get('#layered_id_attribute_group_3').uncheck()
    }) */
   /*  it('order highest price', ()=>{
        cy.get('#selectProductSort').select('Price: Lowest first')
    }) */
    /* it('select first',()=>{
         cy.get('[class="sf-with-ul"').first().click() 
        cy.get('[class="sf-with-ul"').eq(3).click()    <-----eq es to select by position in the array of finded, by searching with $x()  
        $x("//a[@class='sf-with-ul']")  search in console browser and find by all that has that class<--------------------------------
       
    })  */
  /*   it('expects con mensajes agregados',()=>{
        const a=1;
        expect(a).to.exist;
        expect(a,"a no es mas de 20").to.be.lessThan(20)
       expect(1==2,"uno no es igual a dos").to.be.true

    }) */
    it('using indexpage',()=>{
        cy.log('making search with indexpage')
    
        indexPage.search('dress')
        indexPage.search('hat')
    }) 
   /*  it('customcomand',()=>{
        cy.logearmejor('TROLOffLOLOLfO')
    }) */
})