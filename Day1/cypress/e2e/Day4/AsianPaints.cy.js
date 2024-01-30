describe("Shoping at Asian Paint", ()=> {
  
    it("Add to Cart", ()=>{
cy.visit("https://www.asianpaints.com/online-shop.html")
//cy.get('.r-5njf8e > .r-1loqt21 > .css-76zvg2').click()  //LOG IN
//cy.get('.r-eu3ka > .css-76zvg2').click()

cy.get(':nth-child(1) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img').click()

cy.get('[data-attr-prodsku="W107WZ65L45"] > :nth-child(5) > .global-button-white').click()
cy.wait(3000)
cy.get('#cartPinCode').type("410506")
cy.get('.pin-code-form > .ctaComp > .ctaText').click()
//cy.get('[data-attr-prodsku="W107WZ64L45"] > :nth-child(5) > .global-button-white > :nth-child(1)').click()
//cy.get('.header__main-container--logo > .isVisible-img--scroll').click()
cy.get('button[data-target="#cartModal"]').click()
    

    
    
    it.only("remove attribute", ()=>{

        cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
        cy.wait(10000)
        cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > .loadLazyImage').invoke('removeAttr','target').click()
        cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
        
        
            })
        it.only("href attribute", ()=>{
        
                cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
                cy.wait(3000)
                cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p').then(newtab=>{
                    const hreftab=newtab.prop('href')
                    cy.visit(hreftab)
                    cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
  
   
            })
        })  
    
      })
})