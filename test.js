
/* ./node_modules/.bin/cypress open */

describe('Lucio Dev env login', function(){

    it('login to dev wrong password',function(){
        cy.visit('https://dev.polymerdev.com/auth/login')
        cy.wait(1000)
        cy.get('input[id=login-form-email]').type('colombolucio@hotmail.com')
        cy.get('input[id=login-form-password]').type('dasdk0923kpokdpoad')
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Incorrect password")
    })
     it('login to dev no input',function(){
        cy.get('input[id=login-form-email]').clear()
        cy.get('input[id=login-form-password]').clear()
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Please enter a valid email.")
    })
    it('login to dev email with +',function(){
        cy.get('input[id=login-form-email]').clear()
        cy.get('input[id=login-form-password]').clear()
        cy.get('input[id=login-form-email]').type('colombolucio+@hotmail.com')
        cy.get('input[id=login-form-password]').type('Qwerty123')
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Email is not registered")
    })
    it('login to dev password without mayus',function(){
        cy.get('input[id=login-form-email]').clear()
        cy.get('input[id=login-form-password]').clear()
        cy.get('input[id=login-form-email]').type('colombolucio@hotmail.com')
        cy.get('input[id=login-form-password]').type('qwerty123')
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Incorrect password")
    })
    it('login to dev password with space',function(){
        cy.get('input[id=login-form-email]').clear()
        cy.get('input[id=login-form-password]').clear()
        cy.get('input[id=login-form-email]').type('colombolucio@hotmail.com')
        cy.get('input[id=login-form-password]').type(' Qwerty123')
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Incorrect password")
    }) 
    it('login to dev correcly',function(){
        cy.visit('https://dev.polymerdev.com/auth/login')
        cy.wait(1000)
        cy.get('input[id=login-form-email]').clear()
        cy.get('input[id=login-form-password]').clear()
        cy.get('input[id=login-form-email]').type('colombolucio@hotmail.com')
        cy.get('input[id=login-form-password]').type('Qwerty123')
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Start the Tour")
    })
    it('log off to dev correcly',function(){
        cy.get('.user-name').click()
        cy.get('#navationg-bar-logout').click()
        cy.contains("Terms of Service")
    })

}
)

describe('Lucio Dev env createaccount', function(){
    it('create test account', function(){
        cy.visit('https://dev.polymerdev.com/auth/register')
        cy.wait(1000)
        cy.get('[data-cy=name]').type('lucio fakeAccount')
        cy.get('[data-cy=email]').type('luciofakeemail2@reallyfake.com')
        cy.get('[data-cy=password]').type('Qwofkdo3405!')
        cy.get('[data-cy=password-repeat]').type('Qwofkdo3405!')
        cy.get('[data-cy=submit]').click() 
        
    })
})
describe('Lucio Dev login and upload', function(){
    it('login and upload', function(){
        cy.wait(4000)
        cy.get('input[id=login-form-email]').type('luciofakeemail2@reallyfake.com')
        cy.get('input[id=login-form-password]').type('Qwofkdo3405!')
        cy.get('button[id=login-form-submit]').click()
        cy.contains("Start the Tour")

    })
})

    describe('Lucio Dev env delete account', function(){
    it('eliminate test account', function(){
        cy.visit('https://dev.polymerdev.com/')
        cy.wait(4000)
        cy.get('#workspace-name-submit').click()
        cy.get('.user-name').click()
        cy.get('#navationg-bar-account-settings').click()
        cy.wait(2000)
        cy.get('#delete-account-cta').click()
        cy.get('#delete-account-cta').click()
        cy.get('#password-delete-account').type('Qwofkdo3405!')
        cy.get('#delete-account-conform-cta > span').click()
    }) 
})
