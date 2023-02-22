/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });

    it("verification by an UK number (numbers do not match)", () => {
        cy.get("a").contains("Mobile Phone").click();
        cy.get('[name="phoneno"]').type("07000000001");
        cy.get('[name="phoneno2"]').type("07000000002");
        cy.get('[id="verimemobile"]').click();
        cy.contains("h4","Numbers do not match");
      });

});