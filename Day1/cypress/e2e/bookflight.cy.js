describe(" Book flight of SpiceJet", ()=> {
  
    it("BookFlight", ()=>{
cy.visit("https://www.spicejet.com/")

//cy.get('[data-testid="guest-submit-btn"]').click();

cy.get('[data-testid="travel-type-1"]').click();
cy.get('[data-testid="search-source-code"]').click();
cy.get('[data-testid="auto-cmp-txt"]').type("BLR");
cy.get('[data-testid="auto-cmp-row-title-0"]').click();

cy.get('[data-testid="search-destination-code"]').click()
cy.get('[data-testid="auto-cmp-txt"]').click()
cy.get('[data-testid="auto-cmp-txt"]').type("Leh").click()
cy.get('[data-testid="auto-cmp-row-title-0"]').click()

cy.get('.r-gmdvlt > .r-1loqt21 > .r-1awozwy').click()
cy.get('[data-testid="home-travellers-adult-2"]').click()
cy.get('[data-testid="home-travellers-action-btn"]').click()
cy.get('[style="flex-wrap: nowrap;"] > :nth-child(1) > .css-1dbjc4n').click()
cy.get('[data-testid="search-submit-btn"]').click()
cy.get('.r-1tf5bf9 > .r-1awozwy').click()
cy.get('.r-obd0qt > .r-1awozwy').click()




//cy.get('[data-testid="auto-cmp-txt"]').click()

//cy.get('[data-testid="auto-cmp-txt"]').click().type("BLR")

//cy.get('.r-117bsoe > .r-1awozwy').click();

    })

})