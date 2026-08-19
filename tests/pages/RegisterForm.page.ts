import { Page } from "@playwright/test"
export class RegisterFormPage {

    page: Page
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        Nom_Complet_input: () => this.page.locator("[placeholder='Jean Dupont']"),
        email_input: () => this.page.getByPlaceholder("contact@societe.com"),
        password_input: () => this.page.getByPlaceholder("********"),
        telephone_input: () => this.page.getByPlaceholder("+33 6 12 34 56 78"),
        siret_input: () => this.page.getByPlaceholder("12345678901234"),
        btn_inscrire: () => this.page.getByRole("button", { name: "S'inscrire" })
    }


    async saisirNomComplet(nom: string) {
        await this.elements.Nom_Complet_input().fill(nom)
    }
    async saisirEmail(mail: string) {
        await this.elements.email_input().fill(mail)
    }
    async saisirTelephone(tel: string) {
        await this.elements.telephone_input().fill(tel)
    }
    async saisirSiret(siret: string) {
        await this.elements.siret_input().fill(siret)
    }

    async saisirPass(pass: string) {
        await this.elements.password_input().fill(pass)
    }

    async ClickConnexion() {
        await this.elements.btn_inscrire().click()
    }


}