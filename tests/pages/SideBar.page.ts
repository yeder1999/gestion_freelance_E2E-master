import { Page } from "@playwright/test"
export class SideBarPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        btn_Clients: () => this.page.getByRole("button", { name: "Clients" }),
        btn_devis: () => this.page.getByRole("button", { name: "Devis" }),
        btn_profil: () => this.page.getByRole("button", { name: "Profil" }),
    }

    async ClickDevis() {
        await this.elements.btn_devis().click()
    }
    async ClickProfil() {
        await this.elements.btn_profil().click()
    }
    async ClickClient() {
        await this.elements.btn_Clients().click()
    }


}