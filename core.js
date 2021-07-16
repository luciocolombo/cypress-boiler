
describe('Testing core', function(){
/* it('login to dev correcly and launch core',function(){
    cy.visit('https://dev.polymerdev.com/auth/login')
    cy.wait(1000)
    cy.get('input[id=login-form-email]').clear()
    cy.get('input[id=login-form-password]').clear()
    cy.get('input[id=login-form-email]').type('colombolucio@hotmail.com')
    cy.get('input[id=login-form-password]').type('Qwerty123')
    cy.get('button[id=login-form-submit]').click()
    cy.contains("Start the Tour")
    cy.get('[data-cy=files-samples] > .nav-link').click()
    cy.wait(2000)
    //open example sheet
    cy.get('#file-item-1 > .nav-link').click()
    cy.get('#file-item-1 > :nth-child(1) > div > .nav > :nth-child(2) > .nav-link').click()
    cy.get('#cta-launch-core-dataset').click()
}) */

it('core tests',function(){
/*     cy.visit('https://dev.polymerdev.com/polymer/data/608806b442e1b84cea15659e')
    cy.wait(2000)
    cy.get('input[id=login-form-email]').type('colombolucio@hotmail.com')
    cy.get('input[id=login-form-password]').type('Qwerty123')
    cy.get('button[id=login-form-submit]').click() */
    

/* cy.get('.row > :nth-child(1) > .font-90').contains('SMART SUMMARIZE')
cy.get('#summarizer-grid-root > .row > :nth-child(1)').click()
    cy.get('.mb-2 > small').contains('Bring your data to life with these ready-to-go visualizations ') */
     
    
    cy.visit('https://dev.polymerdev.com/polymer/data/60969d69d29d82e6d2c4096b')
    cy.wait(5*1000)
    //Dismiss product tour
   
    
    //check title working showing
    cy.contains("Fortune 1000 Companies")
    //check private by default

  cy.get('#results-tab___BV_tab_button__').invoke('prop','ariaSelected').should('eq','true') //checks DATA tab being selected by default)
  cy.get('#sidebar-scroll ').should('be.visible')
 
})
})
