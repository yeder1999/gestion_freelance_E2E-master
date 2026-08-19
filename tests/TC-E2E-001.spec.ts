import test, { expect } from "@playwright/test"
import { HomePage } from "./pages/Home.page"
import { RegisterFormPage } from "./pages/RegisterForm.page";
import { generateEmail, generateNom, generatePass, generatePrenom, generateSiret, generateTelephone } from "./jdd/faker.mjs";
import { SideBarPage } from "./pages/SideBar.page";
import { ProfilPage } from "./pages/Profil.page";
import { ClientPage } from "./pages/Clients.page";
import { DevisPage } from "./pages/Devis.page";
let hp: HomePage;
let compte: RegisterFormPage;
let sideBar: SideBarPage;
let profil: ProfilPage;
let client: ClientPage;
let devis: DevisPage;
test.beforeEach(async ({ page }) => {
    hp = new HomePage(page);
    compte = new RegisterFormPage(page);
    sideBar = new SideBarPage(page);
    profil = new ProfilPage(page);
    client = new ClientPage(page);
    devis = new DevisPage(page);
    //visite le site
    await page.goto("https://thrundrz.fr/gestion/")
})

test("Parcours complet de création d’un compte jusqu’à l’enregistrement d’un devis", async ({ page }) => {
    //cliquer le button creation de compte 
    await hp.ClickCreationCompte()
    // verifier si on dans  la page creer compte
    await expect(page).toHaveURL(/newcompte/)
    //remplir le formulaire
    await compte.saisirNomComplet(generateNom() + " " + generatePrenom())
    await compte.saisirEmail(generateEmail())
    await compte.saisirTelephone(generateTelephone())
    await compte.saisirSiret(generateSiret())
    await compte.saisirPass(generatePass())
    //cliquer sur le button s'inscrrire
    await compte.ClickConnexion()
    //verifier si on est dans EspaceClient
    await expect(page).toHaveURL(/EspaceClient/)
    //clique profil 
    await sideBar.ClickProfil()
    //verifie si je suis dans  profim
    await expect(page).toHaveURL(/EspaceClient\/profil/)
    //le Forme juridique vers SASU
    await profil.SelectFormeJuridique("SASU")
    //cocher TVA 20% et 5.5%
    await profil.CheckTVA_5_5()
    await profil.CheckTVA_20()
    //cliquer sur button sauvegarder
    await profil.ClickSauvegarder()
    //assertion msg (profil modifer)
    await expect(profil.getAlert()).toContainText("Profil mis à jour avec succès")
    //cliquer sur button client
    await sideBar.ClickClient()
    //url /client
    await expect(page).toHaveURL(/EspaceClient\/clients/)
    //ajouter client
    await client.ClickAjouterClient()
    //remplir formulaire
    await client.SaisirRaisonSocial(generateNom())
    //cliquer ajouter le client
    await client.ClickAjouterClientPOP()
    //verifier client ajouté msg
    await expect(profil.getAlert()).toContainText("Client ajouté avec succès !")
    //cliquer sur Devis
    await sideBar.ClickDevis()
    //verifier url Devis
    await expect(page).toHaveURL(/EspaceClient\/devis/)
    //cliquer sur ajouter un devis
    await devis.ClickAjouter_Devis()
    //choisir le client
    await expect(page).toHaveURL("https://thrundrz.fr/gestion/EspaceClient/devis/ajouter")
    //await 
    
    //statu (envoyé)
    //designation , prix, qte random
    //assertion total HT, Total TVA ,Total TTC 
})