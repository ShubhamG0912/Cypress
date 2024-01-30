import {registration} from "Day1\\cypress\\e2e\\Assignment\\ParaRegistrationRepo.cy.js";
describe("Registration with parabank", () => {
  // describe means Test case
  it.only("using fixtures", () => {
    cy.fixture("data_ParaRegistration.json").then((d) => {
      let obj = new registration();
      cy.visit(d.url);
      cy.url().should("eq", "https://parabank.parasoft.com/parabank/index.htm");
      cy.wait(2000);
      obj.loginpannel();
      cy.get(".title").should("be.visible");
      obj.firstname(d.first_name);
      obj.lastname(d.last_name);
      obj.Address(d.Address);
      obj.city(d.city);
      obj.state(d.state);
      obj.pincode(d.pincode);
      obj.phno(d.phoneno1);
      obj.code(d.codessn);
      obj.username(d.username);
      obj.password(d.password);
      obj.confirmpass(d.password2);
      obj.Button();
    });
  });
});
