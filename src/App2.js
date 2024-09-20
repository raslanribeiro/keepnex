import React from "react";
import "./App.css";
import VCard from "vcard-creator";
import photo from "./assets/katrina.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

function App2() {
    const myVCard = new VCard();
    const lastName = "Mader";
    const firstName = "Katrina";
    const additional = "";
    const prefix = "";
    const suffix = "";
    const company = "Qro + Saúde";
    const jobtitle = "CEO";
    const role = "CEO";
    const email = "katrinabmader@gmail.com";
    const linkedin = "https://www.linkedin.com/in/katrina-mader-7a713525b";
    const personalPhoneNumber = "+5521971706400";
    const workPhoneNumber = "+5521971706400";
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
                    path="/a0e8d2fd993f1f0600d5105ba7db2dc6"
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
                                    value="https://keepnex-563756cfc1d7.herokuapp.com/a0e8d2fd993f1f0600d5105ba7db2dc5"
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

export default App2;
