export {registration}
class registration
{
geturl(url){
    cy.visit(url).should("be.visible")
}
loginpannel(user){
    cy.get('#loginPanel > :nth-child(3) > a').click().should("be.visible")
}
firstname(user){
    cy.get(':nth-child(1) > [width="20%"]').click().type(user).should("be.visible")
}
lastname(user){
    cy.get(':nth-child(2) > [width="20%"]').click().type(user).should("be.visible")
}
Address(user){
    cy.get(':nth-child(3) > [width="20%"]').click().type(user).should("be.visible")
}
city(user){
    cy.get(':nth-child(4) > [width="20%"]').click().type(user).should("be.visible")
}
state(user){
    cy.get(':nth-child(5) > [width="20%"]').click().type(user).should("be.visible")
}
pincode(user){
    cy.get(':nth-child(6) > [width="20%"]').click().type(user).should("be.visible")
}
phoneno(user){
    cy.get(':nth-child(6) > [width="20%"]').click().type(user).should("be.visible")
}
phno(user){
   cy.get(':nth-child(7) > [width="20%"]').click().type(user).should("be.visible")
}

code(user){
    cy.get(':nth-child(8) > [width="20%"]').click().type(user).should("be.visible")
}


username(user){
    cy.get(':nth-child(10) > [width="20%"]').click().type(user).should("be.visible")   // we can give anything input in type()- program will run 
}
password(pass){
    cy.get(':nth-child(11) > [width="20%"]').click().type(pass).should("be.visible")
}
confirmpass(confirm){
    cy.get(':nth-child(12) > [width="20%"]').type(confirm).should("be.visible")
}
Button(){
    cy.get('[colspan="2"] > .button').click().should("be.visible")
}
//
resultThank(){
    cy.get('#rightPanel > :nth-child(2)').invoke('text').should("contain","Thank you")
}
resultCust(){
    cy.get('#rightPanel > :nth-child(3)').should("contain","Customer Care")
}
}
