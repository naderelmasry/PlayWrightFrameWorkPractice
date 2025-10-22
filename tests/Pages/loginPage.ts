import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    //=========================== SignUp Elements ===========================
    readonly signupAndLogin_link = this.page.locator("//a[@href='/login']");
    readonly registerUserName_field = this.page.locator("//input[@type='text']");
    readonly registerEmail_field = this.page.locator("//form[@action='/signup']//input[@type='email']");
    readonly signUp_button = this.page.locator("//form[@action='/signup']//button[@type='submit']");

    //=========================== Login Elements ===========================
    readonly loginEmail_field = this.page.locator("//form[@action='/login']//input[@type='email']");
    readonly passwordLogin_field = this.page.locator("//input[@type='password']");
    readonly login_button = this.page.locator("//form[@action='/login']//button[@type='submit']");

    readonly baseURL="https://automationexercise.com/";
    readonly loginURL="https://automationexercise.com/login";
    readonly signupURL="https://automationexercise.com/signup"


    //=========================== Actions ===========================
    async clickOnSignUpLink() {
        await this.clickOnElement(this.signupAndLogin_link);
    }

    async Navigate_To_Signup_Page(name:string,email:string){
        await this.typeTextIntoField(this.registerUserName_field, name); 
        await this.typeTextIntoField(this.registerEmail_field, email);
        await this.clickOnElement(this.signUp_button);
    }
    async login_to_Application(email:string,password:string){
        await this.typeTextIntoField(this.loginEmail_field,email)
        await this.typeTextIntoField(this.passwordLogin_field,password)
        await this.clickOnElement(this.login_button)
    }
    
}
