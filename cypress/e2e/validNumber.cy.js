/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });
  
    it("verification by an UK number", () => {
      cy.get("a").contains("Mobile Phone").click();
      cy.get('[name="phoneno"]').type("07000000001");
      cy.get('[name="phoneno2"]').type("07000000001");
      cy.get('[id="verimemobile"]').click();
      cy.location('search', {timeout: 60000}).should('include', '?av=yes');
      cy.contains("h4","You are Age-Verified!");
    });

});    