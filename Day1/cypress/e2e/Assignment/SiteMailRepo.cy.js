export {custcare}
class custcare
{
geturl(url){
    cy.visit(url).should("be.visible")
}
mailicon(user){
    cy.get('.contact > a').click()
}
username(user){
    cy.get('#name').click().type(user).should("be.visible")
}
email_id(email1){
    cy.get('#email').click().type(email1).should("be.visible")   // we can give anything input in type()- program will run 
}
phone_no(phone1){
    cy.get('#phone').click().type(phone1).should("be.visible")
}
message(message1){
    cy.get('#message').type(message1).should("be.visible")
}
Button(button1){
    cy.get('[colspan="2"] > .button').click().should("be.visible")
}
resultThank(){
    cy.get('#rightPanel > :nth-child(2)').invoke('text').should("contain","Thank you")
}
resultCust(){
    cy.get('#rightPanel > :nth-child(3)').should("contain","Customer Care")
}
}