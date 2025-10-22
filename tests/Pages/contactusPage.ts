import { BasePage,Locator } from "./basePage";
export class contactusPage extends BasePage{
    //===========================Locators==========================
    readonly contactus_link=this.page.locator("//a[@href='/contact_us']");
    readonly name_field=this.page.locator("//form//input[@name='name']");
    readonly email_field=this.page.locator("//input[@name='email']");
    readonly Subject_field=this.page.locator("//input[@placeholder='Subject']");
    readonly chooseFile_button=this.page.locator("//input[@type='file']");
    readonly submit_button=this.page.locator("//input[@data-qa='submit-button']");

    //=========================Actions================================
    async ContactUs(name: string, email: string, subject: string){
        await this.clickOnElement(this.contactus_link);
         await this.page.waitForTimeout(2000);
        await this.typeTextIntoField(this.name_field,name);
        await this.typeTextIntoField(this.email_field,email);
        await this.typeTextIntoField(this.Subject_field,subject);
        await this.clickOnElement(this.submit_button);

    }
    
}