
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

import { faker } from "@faker-js/faker";
export function generateProductName() {
    return faker.food.dish()
}
export function generateDescription() {
    return faker.food.description()
}
export function generateNom() {
    return faker.person.firstName();
}
export function generatePrenom() {
    return faker.person.lastName();
}
export function generateTelephone() {
    return faker.phone.number();
}

export function generateEmail() {
    return faker.internet.email();
}

export function generateAge() {
    return Math.floor(Math.random() * 45) + 20;
}

export function generateMontant() {
    return Math.floor(Math.random() * 454) + 202;
}

export function generateNumeroCompte() {
    return Math.floor(Math.random() * 45448585858584) + 202;
}
export function generateSiret() {
    return faker.finance.accountNumber(14)
}
export function generatePass() {
    return faker.internet.password(10)
}
export function genrateRandomDepot(num, banque) {
    let allcpt = []
    allcpt = banque.getAllCompte()
    for (let i = 0; i < num; i++) {
        let randomCompte = Math.floor(Math.random() * banque.nbrComptes())
        allcpt[randomCompte].deposer(generateMontant())
    }
}