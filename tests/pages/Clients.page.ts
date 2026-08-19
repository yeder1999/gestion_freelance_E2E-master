import { Page } from "@playwright/test"
export class ClientPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        RaisonSocial: () => this.page.locator("[name='nom_affichage']"),
        btn_Ajouter_Client: () => this.page.getByRole("button", { name: " Ajouter un client" }),
        btn_Ajouter_Client_POP: () => this.page.getByRole("button", { name: "Ajouter le client" }),
        alert_success: () => this.page.locator(".Toastify")
    }


    async SaisirRaisonSocial(value: string) {
        await this.elements.RaisonSocial().fill(value)
    }

    async ClickAjouterClient() {
        await this.elements.btn_Ajouter_Client().click()
    }
    async ClickAjouterClientPOP() {
        await this.elements.btn_Ajouter_Client_POP().click()
    }
    getAlert() {
        return this.elements.alert_success()
    }

}