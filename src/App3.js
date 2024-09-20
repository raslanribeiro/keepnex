import React from "react";
import "./App.css";
import VCard from "vcard-creator";
import photo from "./assets/rejane.jpeg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

function App3() {
    const myVCard = new VCard();
    const lastName = "Freitas";
    const firstName = "Rejane";
    const additional = "";
    const prefix = "";
    const suffix = "";
    const company = "Qro + Saúde";
    const jobtitle = "CEO";
    const role = "CEO";
    const email = "r_carvalhofreitas@yahoo.com.br";
    const linkedin = "https://www.linkedin.com/in/rejane-freitas-91018354";
    const personalPhoneNumber = "+5531999990377";
    const workPhoneNumber = "+5531999990377";
    const homePage = "";
    const instagram = "https://www.instagram.com/qromaissaude";

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
            myVCard
                .addName(lastName, firstName, additional, prefix, suffix)
                .addCompany(company)
                .addJobtitle(jobtitle)
                .addRole(role)
                .addEmail(email)
                .addPhoneNumber(personalPhoneNumber, "PREF")
                .addPhoneNumber(workPhoneNumber, "WORK")
                .addAddress(null, null, "street", "worktown", null, "workpostcode", "Brazil")
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
        <Router>
            <Routes>
                <Route
                    path="/a0e8d2fd993f1f0600d5105ba7db2dc7"
                    element={
                        <div className="App">
                            <h1>{`${firstName} ${lastName}`}</h1>
                            {photo && <img src={photo} className="photoPreview" alt="Profile" width={100} height={100} unoptimized />}
                            <div className="button-container">
                                <a href={`https://wa.me/${workPhoneNumber}`} target="_blank" rel="noopener noreferrer">
                                    <button>WhatsApp</button>
                                </a>
                                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                    <button>LinkedIn</button>
                                </a>
                                <a href={instagram} target="_blank" rel="noopener noreferrer">
                                    <button>Instagram</button>
                                </a>
                                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                                    <button>Gmail</button>
                                </a>
                                <button onClick={handleDownloadContact}>Add Contact</button>
                                <QRCodeSVG
                                    value="https://keepnex-563756cfc1d7.herokuapp.com/a0e8d2fd993f1f0600d5105ba7db2dc7"
                                    size={256}
                                    bgColor="#ffffff"
                                    fgColor="#000000"
                                    level="H"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App3;
