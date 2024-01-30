describe("Double Click", ()=>{

    it("Mouseover", ()=>{

    //cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
    cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")
    cy.get('input').dbclick();
    
    
    
    })
})