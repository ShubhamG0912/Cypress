import 'cypress-file-upload';

describe("Upload File", ()=>{

    it.only("File Upload", ()=>{

    cy.visit("https://the-internet.herokuapp.com/upload")
        cy.wait(3000);
       const filepath="File1.txt"
       cy.get('#file-upload').attachFile(filepath);
       cy.get('#file-submit').click();
        
    })


})

    