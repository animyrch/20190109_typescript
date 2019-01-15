"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NS_Lang;
(function (NS_Lang) {
    var Languages = (function () {
        function Languages(newLanguages) {
            var _this = this;
            this.list = function () {
                return _this._languages;
            };
            this._languages = newLanguages;
        }
        return Languages;
    }());
    NS_Lang.Languages = Languages;
    var Student = (function () {
        function Student(newPrenom, newAge, newAdresse) {
            this._notes = [];
            this._langs = new NS_Lang.Languages([]);
            this.prenom = newPrenom;
            this.age = newAge;
            this.adresse = newAdresse;
        }
        Object.defineProperty(Student.prototype, "prenom", {
            get: function () {
                return this._prenom;
            },
            set: function (prenom) {
                this._prenom = prenom;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "age", {
            get: function () {
                return this._age;
            },
            set: function (age) {
                this._age = age;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "adresse", {
            get: function () {
                return this._adresse;
            },
            set: function (adresse) {
                this._adresse = adresse;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "notes", {
            get: function () {
                return this._notes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "langs", {
            get: function () {
                return this._langs;
            },
            set: function (newLangs) {
                this._langs = newLangs;
            },
            enumerable: true,
            configurable: true
        });
        Student.prototype.addNote = function (note) {
            this._notes.push(note);
        };
        Student.prototype.eleve_info = function (prenom, age, adresse) {
            var messageInfoGeneral = "L'\u00E9tudiant " + this._prenom + ", " + this._age + ", habitant " + this._adresse;
            return messageInfoGeneral;
        };
        Student.prototype.calc_moyenne = function () {
            var notesLength = this.notes.length;
            var notesTotales = 0;
            for (var i = 0; i < notesLength; i++) {
                notesTotales += this.notes[i];
            }
            var noteMoyenne = Math.floor(notesTotales / notesLength);
            return noteMoyenne;
        };
        Student.prototype.display_notes = function () {
            var resultNotes = this.eleve_info(this._prenom, this._age, this._adresse) + " a les notes suivantes \"" + this.notes + "\" et donc sa moyenne est de " + this.calc_moyenne();
            return resultNotes;
        };
        Student.prototype.affiche_langs = function () {
            var listLangs = this.langs.list().join(", ");
            var message = this.prenom + " apprend " + listLangs;
            return message;
        };
        return Student;
    }());
    NS_Lang.Student = Student;
})(NS_Lang = exports.NS_Lang || (exports.NS_Lang = {}));
