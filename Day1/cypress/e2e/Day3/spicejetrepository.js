export {signup}
class signup
{
    url(url)
    {
        cy.visit(url)
    }
    entertitle(title)
    {
        cy.get('.col-sm-4 > .form-control').select(title)
    }

    enterfirstname(firstname)
    {
        cy.get('#first_name').type(firstname)
    }

    enterlastname(lastname)
    {
        cy.get('#last_name').type(lastname)
    }

    entercountry(country)
    {
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(country)
    }

    enterdobdate(dobdate)
    {
        cy.get('#dobDate').click().type(dobdate)
    }

    entercountry(country)
    {
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(country)
    }

    entermnumber(mnumber)
    {
        cy.get('.react-tel-input > .form-control').type(mnumber)
    }
    enteremail(email)
    {
        cy.get('#email_id').click().type(email)
    }
    enterpassword(password)
    {
        cy.get('#new-password').click().type(password)
    }
    entercpassword(cpassword)
    {
        cy.get('#c-password').click().type(cpassword)
    }


    clickonsubmit()
    {
        cy.get('#defaultCheck1').check()
        cy.get('.px-sm-4 > a > .btn').click()
    }
}