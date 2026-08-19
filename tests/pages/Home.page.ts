import { Page } from "@playwright/test"
export class HomePage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        btn_creation_compte: () => this.page.getByRole("link", { name: "Création du compte" })
    }


    async ClickCreationCompte() {
        await this.elements.btn_creation_compte().click()
    }


}