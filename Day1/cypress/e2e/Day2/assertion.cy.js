describe("Assertions", ()=> {
  
    it("Implicit Assertions", ()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.url().should("include","orange")
cy.url().should("contain","orange")
cy.title().should("eq","OrangeHRM")

cy.get("input[name=username]").type("Admin")
cy.get("input[name=password]").type("admin123")
cy.get("button[type=submit]").click()
    

    })
})