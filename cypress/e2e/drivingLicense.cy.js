/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });
  
    it("verification by driving licence", () => {
      cy.get("a").contains("Driving Licence").click();
      //Name page
      cy.get('[name="dfirstname"]').type("Anjum");
      cy.get('[name="dsurname"]').type("Khan");
      cy.get('div[id=dlicence1] button').contains("Next ").click();
      //Gender and Birthday page
      cy.get('[name="dgender"]').select('Male');
      cy.get('[name="dbirthday"]').select('5');
      cy.get('[name="dbirthmonth"]').select('12');
      cy.get('[name="dbirthyear"]').select('1975');
      cy.get('div[id=dlicence2] button:nth-of-type(2)').click();
      //Licence page
      cy.get('[name="dlicence"]').type('KHAN9712055AR9CC');
      cy.get("[id=verimedriving]").click();
  
      cy.location('search', {timeout: 60000}).should('include', '?av=yes');
      cy.contains("h4","You are Age-Verified!");
    });
});