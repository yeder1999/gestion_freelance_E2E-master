import { Page } from "@playwright/test"
export class ProfilPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        forumJuridque: () => this.page.locator("[name='forme_juridique']"),
        CheckBox_TVA_5_5: () => this.page.getByRole("checkbox", { name: "5.5%" }),
        CheckBox_TVA_20: () => this.page.getByRole("checkbox", { name: "20%" }),
        btn_sauvegarder: () => this.page.getByRole("button", { name: "Sauvegarder" }),
        alert_success: () => this.page.locator(".Toastify")
    }


    async SelectFormeJuridique(value: string) {
        await this.elements.forumJuridque().selectOption(value)
    }
    async CheckTVA_5_5() {
        await this.elements.CheckBox_TVA_5_5().check()
    }
    async CheckTVA_20() {
        await this.elements.CheckBox_TVA_5_5().check()
    }
    async ClickSauvegarder() {
        await this.elements.btn_sauvegarder().click()
    }
    getAlert() {
        return this.elements.alert_success()
    }

}