import {custcare} from "D:\\ShubhamGaikwad\\Cypress\\Day1\\cypress\\e2e\\Assignment\\SiteMailRepo.cy.js"
describe("Login with parabank",() => {    
    it("Mail",()=> {    
                    cy.fixture("data_ParaEmail.json").then((d) =>{
                       let obj = new custcare()
                       cy.visit(d.url)
                       //cy.title().should("eq" ,"abc")
                    cy.url().should("eq","https://parabank.parasoft.com/parabank/index.htm")
                    cy.wait(2000)
                    obj.mailicon();
                    obj.username(d.username1)
                    obj.email_id(d.email_id1)
                    obj.phone_no(d.phone_no1)
                    obj.message(d.message)
                    obj.Button()
                    obj.resultThank()
                    obj.resultCust()
   
   
   /* 
  //               cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    //cy.url().should("eq","https://parabank.parasoft.com/parabank/index.htm")
    //cy.wait(2000)
    //cy.get('.contact > a').click()        
    cy.get('#name').type("ketan123")
    cy.get('#email').type("ketan123@gmail.com")
    cy.get('#phone').type("7776098766")
    cy.get('#message').type("Hello This Task is working As Expected. Test case running fine.")
    cy.get('[colspan="2"] > .button').click()
    cy.get('#rightPanel > :nth-child(2)').invoke('text').should('include', 'Thank you ketan123')
   .and("contain","Thank you");

   //cy.get('#rightPanel > :nth-child(2)').should('be.visible').should('have.value',' ')

   cy.get('#rightPanel > :nth-child(3)').invoke('text').should('contain', 'A Customer Care Representative will be contacting you.')
   .should('include','Customer Care');

   
*/
    
    })
})
})