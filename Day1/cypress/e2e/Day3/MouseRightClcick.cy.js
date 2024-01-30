describe("Right Click", ()=>{

    it("Mouseover", ()=>{

    cy.visit("https://swisnl.github.io/jQuery-contextMenu/")

    cy.get('.wy-menu > :nth-child(1) > :nth-child(3) > :nth-child(1)').click()
    cy.wait(3000)
    //cy.get('.context-menu-one').rightclick() //we can use this one if we didn't use trigger
    cy.get('.context-menu-one').trigger("contextmenu")
    cy.get('.context-menu-icon-copy > span').click()
    
    })
})