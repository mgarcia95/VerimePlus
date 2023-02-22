/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });
    
    it("verification by driving licence (under age)", () => {
      cy.get("a").contains("Driving Licence").click();
      //Name page
      cy.get('[name="dfirstname"]').type("Anjum");
      cy.get('[name="dsurname"]').type("Khan");
      cy.get('div[id=dlicence1] button').contains("Next ").click();
      //Gender and Birthday page
      let year = (new Date().getFullYear() - 18).toString();
      
      cy.get('[name="dgender"]').select('Male');
      cy.get('[name="dbirthday"]').select('31');
      cy.get('[name="dbirthmonth"]').select('12');
      cy.get('[name="dbirthyear"]').select(year);
      cy.get('div[id=dlicence2] button:nth-of-type(2)').click();
      //Licence page
      cy.get('[name="dlicence"]').type('KHAN9712685AR9CC');
      cy.get("[id=verimedriving]").click();
  
      cy.contains("h4","Below Minimum Age");
    });
});