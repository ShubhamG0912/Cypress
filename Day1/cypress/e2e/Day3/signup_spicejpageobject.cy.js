//import {loginpage} from "D:\\24189_Shubham Gaikwad\\Cypress\\Day1\\cypress\\e2e\\Day3\\loginRepository.js"
import {signup} from "D:\\24189_Shubham Gaikwad\\Cypress\\Day1\\cypress\\e2e\\Day3\\spicejetrepository.js"

describe("Spicejet", ()=> {
  
    it("Signup", ()=>{

cy.visit("https://spiceclub.spicejet.com/signup")

cy.fixture("data_spicejet").then( (data)=>{
    const obj = new signup()
    obj.url(data.url);
    cy.url().should("eq","https://spiceclub.spicejet.com/signup")
    obj.entertitle(data.title);
    obj.enterfirstname(data.firstname)
    obj.enterlastname(data.lastname)
    obj.entercountry(data.country)
    obj.enterdobdate(data.dobdate)
    obj.entermnumber(data.mnumber)
    obj.enteremail(data.email)
    obj.enterpassword(data.password)
    obj.entercpassword(data.cpassword)
   // obj.entercheck(data.entercheck)
    obj.clickonsubmit(data.clickonsubmit)
  //cy.get("input[name=username]").type(d.username) 
  //cy.get("input[name=password]").type(d.password)
  //cy.get("button[type=submit]").click()
            })
        })
})