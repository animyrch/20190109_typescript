"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var affiche_message = function (message) {
    console.log(message);
    console.log("\n");
};
affiche_message("Vérification du bon fonctionnement du typescript");
var nombre_a = 1;
var nombre_b = 2;
var monPrenom = "Emir";
var monAge = 32;
function hello(prenom, age) {
    var message = "Tout le monde!!!\n" + prenom + " a " + age + " ans!";
    return message;
}
var message = hello(monPrenom, monAge);
affiche_message("Vérification de l'utilisation simple d'une fonction simple : \n" + message);
var friends = ["Kevin", "Amandine", "Cyril"];
function helloFriends(friendsList) {
    var friendsListLength = friendsList.length;
    for (var i = 0; i < friendsListLength; i++) {
        var message_1 = "HELLO, " + friendsList[i];
        affiche_message("Lecture des \u00E9l\u00E9m\u00E9nts d'un tableau de " + friendsListLength + " elements: Test " + (i + 1) + " : " + message_1);
    }
}
helloFriends(friends);
var monAddress = {
    rue: "rue Paul Valéry",
    appartement: 30,
    ville: "Toulouse",
    cp: "31200",
};
function afficheAdresse(address) {
    var message = "J'habite cette addresse : ";
    if (address.appartement) {
        message += address.appartement + ", ";
    }
    message += address.rue + " de la ville " + address.ville + " (" + address.cp + ")";
    return message;
}
var indicationAddress = afficheAdresse(monAddress);
affiche_message("R\u00E9sultat de cr\u00E9ation d'un objet et de son utilisation comme param\u00E8tre d'une fonction :\n" + indicationAddress);
var Personne = (function () {
    function Personne(sexe, cheveux) {
        this.sexe = sexe;
        this.cheveux = cheveux;
    }
    Object.defineProperty(Personne.prototype, "sexe", {
        set: function (sexe) {
            this._sexe = sexe;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "cheveux", {
        set: function (cheveux) {
            this._cheveux = cheveux;
        },
        enumerable: true,
        configurable: true
    });
    Personne.prototype.getDefition = function () {
        var article = (this._sexe == 'homme' ? "un" : "une");
        var resultat = article + " " + this._sexe + " avec des cheuveux " + this._cheveux + "s";
        return resultat;
    };
    return Personne;
}());
var testObject = new Personne("homme", "brun");
affiche_message("R\u00E9sultat de cr\u00E9ation d'une class et affichage d'une de ses propri\u00E9t\u00E9s : Cheveux de testObject -> " + testObject._cheveux);
testObject.sexe = "femme";
affiche_message("R\u00E9sultat d'utilisation d'une m\u00E9thode public qui acc\u00E8de une propri\u00E9t\u00E9 priv\u00E9e -> " + testObject.getDefition());
var Eleve = (function () {
    function Eleve(newPrenom, newAge, newAdresse) {
        this._notes = [];
        this.prenom = newPrenom;
        this.age = newAge;
        this.adresse = newAdresse;
    }
    Object.defineProperty(Eleve.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (prenom) {
            this._prenom = prenom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "adresse", {
        get: function () {
            return this._adresse;
        },
        set: function (adresse) {
            this._adresse = adresse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Eleve.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        enumerable: true,
        configurable: true
    });
    Eleve.prototype.addNote = function (note) {
        this._notes.push(note);
    };
    Eleve.prototype.eleve_info = function (prenom, age, adresse) {
        var messageInfoGeneral = "L'\u00E9tudiant " + this._prenom + ", " + this._age + ", habitant " + this._adresse;
        return messageInfoGeneral;
    };
    Eleve.prototype.calc_moyenne = function () {
        var notesLength = this.notes.length;
        var notesTotales = 0;
        for (var i = 0; i < notesLength; i++) {
            notesTotales += this.notes[i];
        }
        var noteMoyenne = Math.floor(notesTotales / notesLength);
        return noteMoyenne;
    };
    Eleve.prototype.afficher_notes = function () {
        var resultNotes = this.eleve_info(this._prenom, this._age, this._adresse) + " a les notes suivantes \"" + this.notes + "\" et donc sa moyenne est de " + this.calc_moyenne();
        return resultNotes;
    };
    return Eleve;
}());
var eleve1Nom = "Kevin";
var eleve1Age = 32;
var eleve1Adresse = "30, rue Paul Valery";
var eleve1 = new Eleve(eleve1Nom, eleve1Age, eleve1Adresse);
eleve1.addNote(12);
eleve1.addNote(8);
eleve1.addNote(20);
eleve1.prenom = "Emir";
var resultatEleve1 = eleve1.afficher_notes();
affiche_message("R\u00E9sultat de la cr\u00E9ation et utilisation d'une class complexe :\n" + resultatEleve1);
;
var AdresseBook = (function () {
    function AdresseBook(newAdresse, newPerson) {
        this.address = newAdresse;
        this._person = newPerson;
    }
    Object.defineProperty(AdresseBook.prototype, "prenom", {
        get: function () {
            return this._person.personPrenom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdresseBook.prototype, "nom", {
        get: function () {
            return this._person.personNom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdresseBook.prototype, "address", {
        get: function () {
            return this._adresse;
        },
        set: function (newAdresse) {
            this._adresse = newAdresse;
        },
        enumerable: true,
        configurable: true
    });
    AdresseBook.prototype.giveReport = function () {
        var prenom = (this.prenom ? this.prenom + " " : "");
        var reportMessage = "" + prenom + this.nom + " lives at " + this.address.adresseBatiment + ", " + this.address.adresseAppelation + " " + this.address.adresseNom;
        return reportMessage;
    };
    return AdresseBook;
}());
var adresse1 = {
    adresseBatiment: 12,
    adresseAppelation: "rue",
    adresseNom: "Saint-Lazare"
};
var personne1 = {
    personNom: "Bush"
};
var entry1 = new AdresseBook(adresse1, personne1);
affiche_message("V\u00E9rification du bon fonctionnement de la cr\u00E9ation et de l'utilisation des interfaces avec des propri\u00E9t\u00E9s optionnelles\n" + entry1.giveReport());
var import_NS_Lang = require("./class_student");
var newStudent1 = new import_NS_Lang.NS_Lang.Student("Antony", 34, "2, rue Myrha");
var foreignLangs = new import_NS_Lang.NS_Lang.Languages(["English", "Français", "Turkce"]);
newStudent1.langs = foreignLangs;
affiche_message("Verification du bon fonctionnement de la cr\u00E9ation d'un namespace, de son export vers fichier externe sous form de module externe et de son utilisation :\n" + newStudent1.affiche_langs());
var newStudent2 = new import_NS_Lang.NS_Lang.Student("Huseyin", 21, "Alperen Cad. No:32");
newStudent2.langs = new import_NS_Lang.NS_Lang.Languages(["Français", "English"]);
affiche_message("Tests suppl\u00E9mentaires sur l'utilisation du module externe (cr\u00E9ation d'une seconde instance) :\n" + newStudent2.affiche_langs());
newStudent2.langs = foreignLangs;
affiche_message("Tests suppl\u00E9mentaires sur l'utilisation du module externe (modification de la second instance) :\n" + newStudent2.affiche_langs());
newStudent2.addNote(10);
newStudent2.addNote(20);
affiche_message("Tests suppl\u00E9mentaires sur l'utilisation du module externe (utilisation des m\u00E9thodes de la class import\u00E9e) :\n" + newStudent2.display_notes());
