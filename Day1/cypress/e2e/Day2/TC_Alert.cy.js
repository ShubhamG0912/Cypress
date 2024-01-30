describe("Alert",()=>{
    it("Sample Alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get('#alertexamples').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am an alert box!")
        })
    })

    it("Confirm Alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.wait(5000);
        cy.get('#confirmexample').click()
        cy.on('window:confirm',(s)=>{
            expect(s).to.contains("I am a confirm alert")
        })
    })

    it("Prompt Alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Shivani")
        })
        })
    })

