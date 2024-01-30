describe("Assertions", ()=> {
  
    it.skip("Implicit Assertions", ()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

.and("include","orange")
.and("contain","orange")



cy.get("input[name=username]").type("Admin")
cy.get("input[name=password]").type("admin123")
cy.get("button[type=submit]").click()
    

    })

    it.only("Explicit Assertions", ()=>{
    cy.visit("")
    cy.get("input[name=username]").type("Admin")
    cy.get("input[name=password]").type("admin123")
    cy.get("button[type=submit]").click()

    let expname="Admin"
    cy.get('.oxd-userdropdown-name').then((x)=>{
        let acname=x.test()

        //BDD
        expect(acname).to.equal("Burak Ikinci")
        expect(acname).to.not.equal(expname)

        //TDD
        assert.equal(acname,expname)
        assert.notequal(acname,expname)
    })

    })
})