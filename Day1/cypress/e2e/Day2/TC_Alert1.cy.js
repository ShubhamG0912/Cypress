//Simple Alert

describe("Alerts", ()=>{

    it.only("Simple Alert", ()=>{

    cy.visit("https://letcode.in/alert")

    cy.get('#accept').click()
    cy.on('window:alert', (t)=>{
        expect(t).to.contains("Hey! Welcome to LetCode")

    })
//Confirm Alert
it.skip("Confirm Alert", ()=>{
    cy.visit("https://letcode.in/alert")
    cy.wait(3000)
    cy.get('#confirm').click()
    cy.on('window:confirm', (t1)=>{
        expect(t1).to.contains("abc")

})

//Prompt alert
it.skip("Prompt Alert", ()=>{

    cy.visit("https://letcode.in/alert")
    
    cy.window().then((win)=>{
    cy.stub(win,'prompt').returns('saritha')
    
    
    })
    cy.get('#prompt').click()
})
    
    })
    
    })
})
