import { Page,expect } from "@playwright/test";
import { BasePage } from "./basePage"

export class signupPage extends BasePage {
    readonly   maleGender_radioButton = this.page.locator('id=uniform-id_gender1');
    readonly signupPassword_button=this.page.locator('id=password');
    readonly firstName_field=this.page.locator('id=first_name');
    readonly lastName_field=this.page.locator('id=last_name');
    readonly company_field=this.page.locator('id=company');
    readonly address_field=this.page.locator('id=address1');
    readonly state_field=this.page.locator('id=state');
    readonly city_field=this.page.locator('id=city');
    readonly zipCode_field=this.page.locator('id=zipcode');
    readonly mobileNumber_field=this.page.locator('id=mobile_number');
    readonly CreateNewAccount_button=this.page.locator("//button[@type='submit' and @data-qa='create-account']");
    readonly accountCreated_label=this.page.getByAltText('Account Created!');
    readonly logout_link=this.page.locator("//a[@href='/logout']");

    readonly signupUrl = "https://automationexercise.com/signup";
    readonly accountCreatedPage_url="https://automationexercise.com/account_created";
    //=======================Variables==============================
 
    //==========================action====================
    async SelectGender(){
        await this.clickOnElement(this.maleGender_radioButton);
    }
    async enterSignupPassword(password:string){
        await this.typeTextIntoField(this.signupPassword_button,password);
    }
    async enterFirstName(firstName:string){
        await this.typeTextIntoField(this.firstName_field,firstName);
    }
    async enterLastName(LastName:string){
        await this.typeTextIntoField(this.lastName_field,LastName);
    }
    async enterCompanyName(companeyName:string){
        await this.typeTextIntoField(this.company_field,companeyName);
    }
    async enterAdress(addressDetails:string){
        await this.typeTextIntoField(this.address_field,addressDetails);
    }
    async enterState(state:string){
        await this.typeTextIntoField(this.state_field,state);

    }
    async enterCity(cityName:string){
        await this.typeTextIntoField(this.city_field,cityName);
    }
    async enterZipCode(zipCode:string){
        await this.typeTextIntoField(this.zipCode_field,zipCode);
    }
    async enterMobileNumber(phoneNumber:string){
        await this.typeTextIntoField(this.mobileNumber_field,phoneNumber);
    }
    async clickOnAddNewAccount(){
        await this.clickOnElement(this.CreateNewAccount_button);
    }
    async clickOnLogout_Link(){
        await this.clickOnElement(this.logout_link);
    }
    

    async SignUp_To_Application(password:string,firstName:string,LastName:string,companeyName:string,addressDetails:string,state:string,cityName:string,zipCode:string,phoneNumber:string){
        await this.clickOnElement(this.maleGender_radioButton);
        await this.typeTextIntoField(this.signupPassword_button,password);
        await this.typeTextIntoField(this.firstName_field,firstName);
        await this.typeTextIntoField(this.lastName_field,LastName);
        await this.typeTextIntoField(this.company_field,companeyName);
        await this.typeTextIntoField(this.address_field,addressDetails);
        await this.typeTextIntoField(this.state_field,state);
        await this.typeTextIntoField(this.city_field,cityName);
        await this.typeTextIntoField(this.zipCode_field,zipCode);
        await this.typeTextIntoField(this.mobileNumber_field,phoneNumber);
        await this.clickOnElement(this.CreateNewAccount_button);
    }
 
}


