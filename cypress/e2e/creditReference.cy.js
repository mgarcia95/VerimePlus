/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });
  
    it("verification by credit reference", () => {
      cy.get("a").contains("Credit Reference").click();
      //Name page
      cy.get('[name="dobfirstname"]').type("dummy");
      cy.get('[name="dobsurname"]').type("dummy");
      cy.get('div[id=dob1] button').contains("Next ").click();
      //Gender and Birthday page
      cy.get('[name="dobgender"]').select('M');
      cy.get('[name="dobbirthday"]').select('12');
      cy.get('[name="dobbirthmonth"]').select('11');
      cy.get('[name="dobbirthyear"]').select('1995');
      cy.get('div[id=dob2] button:nth-of-type(2)').click();
      //Licence page
      cy.get('[name="dobaddress1"]').type('7 Long Drive');
      cy.get('[name="dobpostcode"]').type('W3 7PP');
      cy.get("[id=verimedob]").click();
  
      cy.location('search', {timeout: 60000}).should('include', '?av=yes');
      cy.contains("h4","You are Age-Verified!");
    });
});