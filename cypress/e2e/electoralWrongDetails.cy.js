/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });
  
    it("verification by electoral roll(wrong details)", () => {
      cy.get("a").contains("Electoral Roll").click();
      //Name page
      cy.get('[name="addressfirstname"]').type('Manuel');
      cy.get('[name="addresssurname"]').type('Garcia');
      cy.get('div[id=address1] button').contains("Next ").click();
      //Gender and Birthday page
      cy.get('[name="addressgender"]').select('M');
      cy.get('[name="addressbirthday"]').select('10');
      cy.get('[name="addressbirthmonth"]').select('9');
      cy.get('[name="addressbirthyear"]').select('1985');
      cy.get('div[id=address2] button:nth-of-type(2)').click();
      //Licence page
      cy.get('[name="addressaddress1"]').type('7 Long Drive');
      cy.get('[name="addresspostcode"]').type('W2 3PP');
      cy.get("[id=verimeaddress]").click();
  
      cy.location('search', {timeout: 60000}).should('include', '?av=no');
      cy.contains("h4","You are NOT Age-Verified");
    });
});