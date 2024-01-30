import {loginpage} from "D:\\24189_Shubham Gaikwad\\Cypress\\Day1\\cypress\\e2e\\Day3\\loginRepository.js"

describe("orangeHRM", ()=> {
  
    it("Login", ()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


cy.fixture("data_OrangeHRM").then( (d)=>{
    const obj = new loginpage()

obj.enterusername(d.username)
obj.enterpassword(d.password)
obj.clickonsubmit()
  //cy.get("input[name=username]").type(d.username) 
  //cy.get("input[name=password]").type(d.password)
  //cy.get("button[type=submit]").click()
            })
        })
})