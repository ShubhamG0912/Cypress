describe(" Signup with SpiceJet using Data Driven", ()=> {
  
    it("Using Fixtures", ()=>{

        cy.fixture('data_spicejet').then((data)=>{
cy.visit(data.url)
cy.get('.title-black').should("contain","Member Enrollment");
cy.get('.col-sm-4 > .form-control').should("be.visible").select(data.title)
cy.get('.col-sm-4 > .form-control').then((t)=>{
    let val = t.prop('value')
    assert.equal(val,"MR")
})
   
//cy.get('.r-5njf8e > .r-1loqt21 > .css-76zvg2').click()  //LOG IN
//cy.get('.r-eu3ka > .css-76zvg2').click()
//cy.get('.col-sm-4 > .form-control').select("Mr")
cy.get('#first_name').type(data.firstname)
cy.get('#last_name').type(data.lastname)
cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(data.country)
//cy.get(':nth-child(3) > :nth-child(2) > .position-relative > .position-absolute > .d-inline-block').
cy.get('#dobDate').click().type(data.dobdate)
// cy.get('.react-datepicker__year-select').select("1980")
// cy.get('.react-datepicker__month-select').select("December")
// cy.get('.react-datepicker__day--020').click()

cy.get('.react-tel-input > .form-control').type(data.mnumber)
cy.get('#email_id').click().type(data.email)
cy.get('#new-password').click().type(data.password)
cy.get('#c-password').click().type(data.cpassword)
cy.get('#defaultCheck1').check()
cy.get('.px-sm-4 > a > .btn').click()

    })
})
})