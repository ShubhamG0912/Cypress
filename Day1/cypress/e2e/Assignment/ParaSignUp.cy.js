import {loginpage} from "Day1\\cypress\\e2e\\Assignment\\ParaSignUpRepo.cy.js"
describe("Login with parabank",() => {     // describe means Test case

    it("using fixtures",()=> {   

        cy.fixture("data_ParaSignUp.json").then((d) =>{
           let obj = new loginpage()
           cy.visit(d.url)
           //cy.title().should("eq" ,"abc")
        cy.url().should("eq","https://parabank.parasoft.com/parabank/index.htm")

//obj.title();
obj.username(d.username1)
obj.password(d.password1)
obj.login()

        })
    })
    })