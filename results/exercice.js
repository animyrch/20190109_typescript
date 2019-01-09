console.log("test");
console.log("\n");
var nombre_a = 1;
var nombre_b = 2;
var monPrenom = "Emir";
var monAge = 32;
function hello(prenom, age) {
    var message = "Tout le monde!!!\n" + prenom + " a " + age + " ans!";
    return message;
}
var message = hello(monPrenom, monAge);
console.log(message);
var friends = ["Kevin", "Amandine", "Cyril"];
function helloFriends(friendsList) {
    for (var i = 0; i < friendsList.length; i++) {
        var message_1 = "HELLO, " + friendsList[i];
        console.log(message_1);
    }
}
helloFriends(friends);
var monAddress = {
    rue: "Paul Valéry",
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
console.log(indicationAddress);
var Personne = (function () {
    function Personne(sexe, cheuveux) {
    }
    Personne.prototype.setSexe = function (sexe) {
        this.sexe = sexe;
    };
    return Personne;
}());
var testObject = new Personne("homme", "brun");
testObject.setSexe("femme");
var Eleve = (function () {
    function Eleve(newPrenom, newAge, newAdresse) {
        this._notes = [];
        this._prenom = newPrenom;
        this._age = newAge;
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
        var notesLength = this._notes.length;
        var notesTotales = 0;
        for (var i = 0; i < notesLength; i++) {
            notesTotales += this._notes[i];
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
var eleve1Adresse = "32, rue Paul Valery";
var eleve1 = new Eleve(eleve1Nom, eleve1Age, eleve1Adresse);
eleve1.addNote(12);
eleve1.addNote(8);
eleve1.addNote(20);
eleve1.prenom = "Emir";
var resultatEleve1 = eleve1.afficher_notes();
console.log(resultatEleve1);
;
var Toto = (function () {
    function Toto() {
    }
    return Toto;
}());
var AdresseBook = (function () {
    function AdresseBook(newAdresse, newPerson) {
        this._adresse = newAdresse;
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
            var address = this._adresse.adresseBatiment + ", " + this._adresse.adresseAppelation + " " + this._adresse.adresseNom;
            return address;
        },
        enumerable: true,
        configurable: true
    });
    AdresseBook.prototype.giveReport = function () {
        var prenom = (this.prenom ? this.prenom + " " : "");
        var reportMessage = "" + prenom + this.nom + " lives at " + this.address;
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
console.log(entry1.giveReport());
//# sourceMappingURL=exercice.js.map