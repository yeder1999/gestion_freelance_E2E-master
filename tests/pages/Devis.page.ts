import { Page } from "@playwright/test"

export class DevisPage {

    page: Page

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        btn_Ajouter_Devis: () =>
            this.page.getByRole("button", { name: "Ajouter un devis" }),

        client: () =>
            this.page.locator("select").nth(0),

        statut: () =>
            this.page.locator("select").nth(1),

        alert_success: () =>
            this.page.locator(".Toastify")
    }

    async ClickAjouter_Devis() {
        await this.elements.btn_Ajouter_Devis().click()
    }

    async SelectClient(raisonSocial: string) {
        const option = this.elements
            .client()
            .locator("option")
            .filter({ hasText: raisonSocial })
            .first();

        const value = await option.getAttribute("value");

        if (!value) {
            throw new Error(`Client introuvable : ${raisonSocial}`);
        }

        await this.elements.client().selectOption(value);
    }

    async SelectStatut() {
        await this.elements.statut().selectOption("envoye")
    }

    getAlert() {
        return this.elements.alert_success()
    }
}