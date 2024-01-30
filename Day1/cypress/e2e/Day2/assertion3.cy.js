describe(" Signup with SpiceJet", ()=> {
  
    it("Signup", ()=>{
cy.visit("https://spiceclub.spicejet.com/signup")
//cy.get('.r-5njf8e > .r-1loqt21 > .css-76zvg2').click()  //LOG IN
//cy.get('.r-eu3ka > .css-76zvg2').click()
cy.get('.col-sm-4 > .form-control').should("be.visible")
cy.get('.col-sm-4 > .form-control').select("Mr")
cy.get('#first_name').should("be.visible").type("Shri")
cy.get('#last_name').should("be.visible").type("G")
cy.get(':nth-child(3) > :nth-child(1) > .form-control').type("Greece")
//cy.get(':nth-child(3) > :nth-child(2) > .position-relative > .position-absolute > .d-inline-block').
cy.get('#dobDate').should("be.visible").click()
cy.get('.react-datepicker__year-select').select("1980")
cy.get('.react-datepicker__month-select').select("December")
cy.get('.react-datepicker__day--020').click()

cy.get('.react-tel-input > .form-control').type("9920121980")

cy.get('#email_id').should("be.visible").click().type("ssg2012@gmail.com")
cy.get('#new-password').should("be.visible").click().type("SSssg@1234")
cy.get('#c-password').should("be.visible").click().type("SSssg@1234")
cy.get('#defaultCheck1').should("be.visible").check()
cy.get('.px-sm-4 > a > .btn').click()

    
    })
})