import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, fillField} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page'; 
//Declaring constants that take the value of the corresponding selectors using the pattern page object
const firstName = HOME_PAGE.firstNameField;
const lastName = HOME_PAGE.lastNameField;
const userName = HOME_PAGE.userNameField;
const password = HOME_PAGE.passwordField;
const role = HOME_PAGE.role;
const customerId = HOME_PAGE.customerId;
const phone = HOME_PAGE.phoneField;
const email = HOME_PAGE.emailField;
const saveButton = HOME_PAGE.saveButton;
//Test that creates a new user, using the data declared on the user-data.json (Fixture)
When('The user fills the requested user data', () => {
  //Checking if the element it's visible
  elementIsVisible(firstName);
  //Clicking the element
  clickElement(firstName);
  //Filling the selected field with the data from the fixture
  cy.fixture('user-data').then((user)=>{
    fillField(firstName,user.name);
   });  
  clickElement(lastName);
  cy.fixture('user-data').then((user)=>{
    fillField(lastName,user.lastName);
    });
  clickElement(userName); 
  cy.fixture('user-data').then((user)=>{
    fillField(userName,user.userName);
    });
  clickElement(password);
  cy.fixture('user-data').then((user)=>{
    fillField(password,user.password);
    });
  cy.get(role).select(1).invoke("val") 
  cy.get(customerId).check();
  clickElement(email); 
  cy.fixture('user-data').then((user)=>{
    fillField(email,user.email);
   }); 
  clickElement(phone);
  cy.fixture('user-data').then((user)=>{
    fillField(phone,user.phone);
   });
   //Clicking the dave button to complete the test
  clickElement(saveButton);
});
  
