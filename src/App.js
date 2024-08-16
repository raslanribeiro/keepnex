import React from "react";
import "./App.css";
import VCard from "vcard-creator";
// const fs = require("fs");
import photo from "./assets/talita.jpeg";

function App() {
    const handleDownloadContact = () => {
        const toBase64 = (imagePath) => {
            return fetch(imagePath)
                .then((response) => response.blob())
                .then((blob) => {
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result.split(",")[1]);
                        reader.readAsDataURL(blob);
                    });
                });
        };

        toBase64(photo).then((base64Photo) => {
            const myVCard = new VCard();
            const lastname = "Floriano";
            const firstname = "Tálita";
            const additional = "";
            const prefix = "";
            const suffix = "";
            const company = "CDS";
            const jobtitle = "Professora";
            const role = "Professora";
            const email = "talitafloriano@gmail.com";
            const linkedin = "https://www.linkedin.com/in/talitafloriano";
            const personalPhoneNumber = "+5521969133563";
            const workPhoneNumber = "+5521969133563";
            const homePage = "";
            // const photoPath = "/public/photos/talita.jpeg";
            // const photo = fs.readFileSync(photoPath, { encoding: "base64", flag: "r" });

            myVCard
                .addName(lastname, firstname, additional, prefix, suffix)
                .addCompany(company)
                .addJobtitle(jobtitle)
                .addRole(role)
                .addEmail(email)
                .addPhoneNumber(personalPhoneNumber, "PREF")
                .addPhoneNumber(workPhoneNumber, "WORK")
                .addAddress(null, null, "street", "worktown", null, "workpostcode", "Belgium")
                .addSocial(linkedin, "Linkedin")
                .addURL(homePage)
                .addPhoto(base64Photo, "JPEG");

            const blob = new Blob([myVCard.toString()], { type: "text/vcard" });

            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "contact.vcf";

            link.click();
        });
    };

    return (
        <div className="App">
            <h1>Tálita Floriano</h1>
            <div className="button-container">
                <a href="https://wa.me/5521969133563" target="_blank" rel="noopener noreferrer">
                    <button>WhatsApp</button>
                </a>
                <a href="https://www.linkedin.com/in/talitafloriano" target="_blank" rel="noopener noreferrer">
                    <button>LinkedIn</button>
                </a>
                <a href="https://www.instagram.com/talitafloriano" target="_blank" rel="noopener noreferrer">
                    <button>Instagram</button>
                </a>
                <a href="mailto:talitafloriano@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button>Gmail</button>
                </a>
                <button onClick={handleDownloadContact}>Add Contact</button>
            </div>
        </div>
    );
}

export default App;
