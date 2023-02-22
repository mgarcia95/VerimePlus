/// <reference types="cypress" />

describe("VerimePlus", () => {
    
    beforeEach(() => {
  
        //Visit landing page and click Launch button
        cy.visit("https://verime.net/redirectplusdemo/");
        cy.url().should("include","/redirectplusdemo");
        cy.get("form").submit();
  
        //Define aliases here
  
    });
   
    it("verification by passport (wrong doc number check digit)", () => {
      cy.get("a").contains("Passport").click();
      //Gender and Birthday
      cy.get('[name="pgender"]').select('Male');
      cy.get('[name="pbirthday"]').select('2');
      cy.get('[name="pbirthmonth"]').select('4');
      cy.get('[name="pbirthyear"]').select('1980');
      //Passport and Expiry Date
      cy.get('[name="passportNumber"]').type('dsafasfsa');
      cy.get('[name="pexpday"]').select('4');
      cy.get('[name="pexpmonth"]').select('8');
      cy.get('[name="pexpyear"]').select('2024');
      cy.get('button').contains('Assemble MRZ').click();
      //>>
      cy.get('[name="pcode1"]').type('P');
      cy.get('[name="pcode2"]').type('<');
      cy.get('div[id=passport2] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="pissuingCountry"]').select('GBR');
      cy.get('div[id=passport3] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="psurname"]').type('Khan');
      cy.get('div[id=passport4] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="pgivenNames"]').type('Anjum');
      cy.get('div[id=passport5] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="pdocumentNumber"]').type('0123456789');
      cy.get('[name="pdocumentNumberCheckDigit"]').clear().type('1');
      cy.get('div[id=passport6] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="pnationality"]').select('GBR');
      cy.get('div[id=passport7] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="pdob"]').type('0123456');
      //cy.get('[name="pdobCheckDigit"]').clear().type('5');
      cy.get('div[id=passport8] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="psex"]').select('M');
      cy.get('div[id=passport9] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="pexpiryDate"]').type('0123456');
      //cy.get('[name="pexpiryDateCheckDigit"]').clear().type('8');
      cy.get('div[id=passport10] button:nth-of-type(2)').click();
      //>>
      cy.get('[name="ppersonalNumber"]').type('<<<<<<<<<<<<<<');
      cy.get('div[id=passport11] button:nth-of-type(2)').click();
      //>>
      //cy.get('[name="ppersonalNumberCheckDigit"]').clear().type('0');
      //cy.get('[name="pfinalCheckDigit"]').clear().type('8');
      cy.get('button').contains('Generate MRZ').click();
  
      cy.contains("h4","Invalid Check-Digit");
    });
  
  });