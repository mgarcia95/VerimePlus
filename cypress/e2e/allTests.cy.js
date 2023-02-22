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
  
  it("verification by an UK number (numbers do not match)", () => {
    cy.get("a").contains("Mobile Phone").click();
    cy.get('[name="phoneno"]').type("07000000001");
    cy.get('[name="phoneno2"]').type("07000000002");
    cy.get('[id="verimemobile"]').click();
    cy.contains("h4","Numbers do not match");
  });

  it("verification by an UK number(non-age verified number)", () => {
    cy.get("a").contains("Mobile Phone").click();
    cy.get('[name="phoneno"]').type("07000000000");
    cy.get('[name="phoneno2"]').type("07000000000");
    cy.get('[id="verimemobile"]').click();
    cy.location('search', {timeout: 60000}).should('include', '?av=no');
    cy.contains("h4","You are NOT Age-Verified");
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

  it("verification by driving licence (wrong details)", () => {
    cy.get("a").contains("Driving Licence").click();
    //Name page
    cy.get('[name="dfirstname"]').type("Anjum");
    cy.get('[name="dsurname"]').type("Khan");
    cy.get('div[id=dlicence1] button').contains("Next ").click();
    //Gender and Birthday page
    cy.get('[name="dgender"]').select('Male');
    cy.get('[name="dbirthday"]').select('10');
    cy.get('[name="dbirthmonth"]').select('8');
    cy.get('[name="dbirthyear"]').select('1975');
    cy.get('div[id=dlicence2] button:nth-of-type(2)').click();
    //Licence page
    cy.get('[name="dlicence"]').type('KHAN9712685AR9CC');
    cy.get("[id=verimedriving]").click();

    cy.location('search', {timeout: 60000}).should('include', '?av=no');
    cy.contains("h4","You are NOT Age-Verified");
  });

  it("verification by driving licence (under age)", () => {
    cy.get("a").contains("Driving Licence").click();
    //Name page
    cy.get('[name="dfirstname"]').type("Anjum");
    cy.get('[name="dsurname"]').type("Khan");
    cy.get('div[id=dlicence1] button').contains("Next ").click();
    //Gender and Birthday page
    cy.get('[name="dgender"]').select('Male');
    cy.get('[name="dbirthday"]').select('31');
    cy.get('[name="dbirthmonth"]').select('12');
    cy.get('[name="dbirthyear"]').select('2005');
    cy.get('div[id=dlicence2] button:nth-of-type(2)').click();
    //Licence page
    cy.get('[name="dlicence"]').type('KHAN9712685AR9CC');
    cy.get("[id=verimedriving]").click();

    cy.contains("h4","Below Minimum Age");
  });

  //Create a script to work out under age dynamically

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


  it("verification by credit reference (wrong details)", () => {
    cy.get("a").contains("Credit Reference").click();
    //Name page
    cy.get('[name="dobfirstname"]').type("dummyfail");
    cy.get('[name="dobsurname"]').type("dummyfail");
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

    cy.location('search', {timeout: 60000}).should('include', '?av=no');
    cy.contains("h4","You are NOT Age-Verified");
  });

  it("verification by electoral roll", () => {
    cy.get("a").contains("Electoral Roll").click();
    //Name page
    cy.get('[name="addressfirstname"]').type('dummy');
    cy.get('[name="addresssurname"]').type('dummy');
    cy.get('div[id=address1] button').contains("Next ").click();
    //Gender and Birthday page
    cy.get('[name="addressgender"]').select('Male');
    cy.get('[name="addressbirthday"]').select('12');
    cy.get('[name="addressbirthmonth"]').select('11');
    cy.get('[name="addressbirthyear"]').select('1995');
    cy.get('div[id=address2] button:nth-of-type(2)').click();
    //Licence page
    cy.get('[name="addressaddress1"]').type('7 Long Drive');
    cy.get('[name="addresspostcode"]').type('W3 7PP');
    cy.get("[id=verimeaddress]").click();

    cy.location('search', {timeout: 60000}).should('include', '?av=yes');
    cy.contains("h4","You are Age-Verified!");
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

  it("verification by passport", () => {
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
    cy.get('[name="pdocumentNumberCheckDigit"]').type('0');
    cy.get('div[id=passport6] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="pnationality"]').select('GBR');
    cy.get('div[id=passport7] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="pdob"]').type('0123456');
    cy.get('[name="pdobCheckDigit"]').type('0');
    cy.get('div[id=passport8] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="psex"]').select('M');
    cy.get('div[id=passport9] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="pexpiryDate"]').type('0123456');
    cy.get('[name="pexpiryDateCheckDigit"]').type('0');
    cy.get('div[id=passport10] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="ppersonalNumber"]').type('<<<<<<<<<<<<<<');
    cy.get('div[id=passport11] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="ppersonalNumberCheckDigit"]').type('0');
    cy.get('[name="pfinalCheckDigit"]').type('7');
    cy.get('button').contains('Generate MRZ').click();

    cy.get("[id=verimepassport]").click();

    cy.location('search', {timeout: 60000}).should('include', '?av=yes');
    cy.contains("h4","You are Age-Verified!");
  });
 
  it("verification by passport (wrong final check digit)", () => {
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
    //cy.get('[name="pdocumentNumberCheckDigit"]').clear().type('4');
    cy.get('div[id=passport6] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="pnationality"]').select('GBR');
    cy.get('div[id=passport7] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="pdob"]').type('0123456');
    //cy.get('[name="pdobCheckDigit"]').clear().type('2');
    cy.get('div[id=passport8] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="psex"]').select('M');
    cy.get('div[id=passport9] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="pexpiryDate"]').type('0123456');
    //cy.get('[name="pexpiryDateCheckDigit"]').clear().type('5');
    cy.get('div[id=passport10] button:nth-of-type(2)').click();
    //>>
    cy.get('[name="ppersonalNumber"]').type('<<<<<<<<<<<<<<');
    cy.get('div[id=passport11] button:nth-of-type(2)').click();
    //>>
    //.get('[name="ppersonalNumberCheckDigit"]').clear().type('0');
    cy.get('[name="pfinalCheckDigit"]').clear().type('6');
    cy.get('button').contains('Generate MRZ').click();

    cy.contains("h4","Invalid Check-Digit");
  });

});