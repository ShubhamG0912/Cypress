export {loginpage}
class loginpage
{
geturl(url){
    cy.visit(url).should("be.visible")
}
username(user){
    cy.get(':nth-child(2) > .input').click().type(user).should("be.visible")
}
password(pass){
    cy.get(':nth-child(4) > .input').click().type(pass).should("be.visible")
}
login(){
    cy.get(':nth-child(5) > .button').click()
}
}
