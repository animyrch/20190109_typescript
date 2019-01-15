//ma fonction pour afficher mes messages au console
let affiche_message = (message:string):void =>{
  console.log(message);
  console.log("\n");
  // alert("test");
}
/************TEST TYPESCRIPT SIMPLE*****************/
affiche_message("Vérification du bon fonctionnement du typescript");
/************DEFINITION DES VARIABLES AVEC TYPAGE*****************/

let nombre_a: number = 1;
let nombre_b: number = 2;

let monPrenom: string = "Emir";
let monAge: number = 32;

/************CREATION DES FONCTIONS*****************/

function hello (prenom: string, age: number):string{
  let message: string = `Tout le monde!!!
${prenom} a ${age} ans!`;
  return message;
}

/************UTILISATION DES FONCTIONS *****************/

let message:string = hello(monPrenom, monAge);
affiche_message("Vérification de l'utilisation simple d'une fonction simple : \n" + message);

/************CREATION D4UN ARRAY *****************/

let friends:string[] = ["Kevin", "Amandine", "Cyril"];

/************UTILISATION DES PROCEDURES (VOID)*****************/

function helloFriends(friendsList:string[]):void {
    let friendsListLength:number = friendsList.length;
    for(let i:number = 0; i<friendsListLength;i++){
      let message:string = `HELLO, ${friendsList[i]}`;
      affiche_message(`Lecture des éléménts d'un tableau de ${friendsListLength} elements: Test ${i+1} : ${message}`);
    }
}

helloFriends(friends);


/************CREATION DES OBJETS LITERAUX*****************/

let monAddress:{rue:string, appartement?:number, ville:string, cp:string|number} = {
  rue: "rue Paul Valéry",
  appartement: 30,
  ville: "Toulouse",
  cp: "31200",
};

/************FONCTION AVEC OBJET COMME PARAMETRE ET PARAMETRE OPTIONNEL*****************/

function afficheAdresse(address:{rue: string, appartement?:number, ville:string, cp: number|string}):string{
  let message:string = `J'habite cette addresse : `;
  if(address.appartement){message += `${address.appartement}, `}
  message += `${address.rue} de la ville ${address.ville} (${address.cp})`;
  return message;
}

let indicationAddress: string = afficheAdresse(monAddress);

affiche_message(`Résultat de création d'un objet et de son utilisation comme paramètre d'une fonction :
${indicationAddress}`);

/************CREATION D'UNE CLASSE*****************/

class Personne{
  private _sexe: string;
  _cheveux: string;

  constructor(sexe:string, cheveux:string){
    this.sexe = sexe;
    this.cheveux = cheveux;

  }
  set sexe(sexe:string){
    this._sexe = sexe;
  }
  set cheveux(cheveux:string){
    this._cheveux = cheveux;
  }
  getDefition():string{
    let article:string = (this._sexe == 'homme'? "un" : "une");
    let resultat:string = `${article} ${this._sexe} avec des cheuveux ${this._cheveux}s`;
    return resultat;
  }
}

let testObject = new Personne("homme", "brun");
affiche_message(`Résultat de création d'une class et affichage d'une de ses propriétés : Cheveux de testObject -> ${testObject._cheveux}`);
//la commande testObject.sexe donerait erreur car cette propriété est private
//par contre je peux utiliser la fonction sexSexe qui modifie cette propriété private
testObject.sexe = "femme";
//ensuite je peux utiliser getDefition() qui elle aussi fait référence à _sexe
affiche_message(`Résultat d'utilisation d'une méthode public qui accède une propriété privée -> ${testObject.getDefition()}`);

/************CREATION D'UNE CLASSE 2*****************/
class Eleve{
  private _prenom: string;
  private _age: number;
  private _adresse : string;
  private _notes : number[] = [];

  constructor(newPrenom: string, newAge: number, newAdresse : string){
    this.prenom = newPrenom; //ici c'est l'appel à la fonction setter pour prenom qu'on a défini ci-dessous.
    this.age = newAge;
    this.adresse = newAdresse;
  }
  get prenom(){
    return this._prenom;
  }
  get age(){
    return this._age;
  }
  get adresse(){
    return this._adresse;
  }
  get notes(){
    return this._notes;
  }
  set prenom(prenom:string){
    this._prenom = prenom;
  }
  set age(age:number){
    this._age = age;
  }
  set adresse(adresse:string){
    this._adresse = adresse;
  }
  addNote(note:number){
    this._notes.push(note);
  }
  eleve_info(prenom:string, age:number, adresse:string):string{
    let messageInfoGeneral:string = `L'étudiant ${this._prenom}, ${this._age}, habitant ${this._adresse}`;
    return messageInfoGeneral;
  }
  calc_moyenne():number{
    let notesLength = this.notes.length;
    let notesTotales = 0;
    for(let i=0;i<notesLength;i++){
      notesTotales += this.notes[i];
    }
    let noteMoyenne = Math.floor(notesTotales/notesLength);
    return noteMoyenne;
  }
  afficher_notes():string{
    let resultNotes:string = `${this.eleve_info(this._prenom, this._age, this._adresse)} a les notes suivantes "${this.notes}" et donc sa moyenne est de ${this.calc_moyenne()}`;
    return resultNotes;
  }
}
let eleve1Nom:string = "Kevin";
let eleve1Age:number = 32;
let eleve1Adresse:string = "30, rue Paul Valery";

let eleve1 = new Eleve(eleve1Nom, eleve1Age, eleve1Adresse);

eleve1.addNote(12);
eleve1.addNote(8);
eleve1.addNote(20);
eleve1.prenom = "Emir";
let resultatEleve1 = eleve1.afficher_notes();

affiche_message(`Résultat de la création et utilisation d'une class complexe :
${resultatEleve1}`);

/************CREATION D'UNE INTERFACE*****************/

interface Adresse {
  adresseBatiment : number,
  adresseAppelation : string,
  adresseNom : string
};
interface EntryName {
  personPrenom? : string,
  personNom: string
}


/************L'UTILISATION DES INTERFACECES COMME PARAMETRE D'UNE CLASSE *****************/
class AdresseBook {
  _adresse: Adresse;
  _person: EntryName;

  constructor(newAdresse:Adresse, newPerson:EntryName){
    this.address = newAdresse;
    this._person = newPerson;
  }

  get prenom(){
    return this._person.personPrenom;
  }

  get nom(){
    return this._person.personNom;
  }

  get address():Adresse{
    return this._adresse;
  }

  giveReport(){

    let prenom = (this.prenom ? `${this.prenom} ` : "");
    let reportMessage = `${prenom}${this.nom} lives at ${this.address.adresseBatiment}, ${this.address.adresseAppelation} ${this.address.adresseNom}`;
    return reportMessage;
  }

  set address(newAdresse:Adresse){
    this._adresse = newAdresse;
  }
}
let adresse1:Adresse = {
  adresseBatiment : 12,
  adresseAppelation : "rue",
  adresseNom : "Saint-Lazare"
}
let personne1:EntryName = {
  // personPrenom: "George",
  personNom: "Bush"
}
let entry1 = new AdresseBook(adresse1,personne1);

affiche_message(`Vérification du bon fonctionnement de la création et de l'utilisation des interfaces avec des propriétés optionnelles
${entry1.giveReport()}`);


/************CREATION D'UNE NAMESPACE*****************/
////je veux pas toucher à mes exemples d'avant, du coup je créé une classe de Student
//je place cette classe dans un fichier externe et je l'importe
import import_NS_Lang = require("./class_student");


//je lance une instance de ma nouvelle classe Student depuis le fichier externe
let newStudent1:import_NS_Lang.NS_Lang.Student = new import_NS_Lang.NS_Lang.Student("Antony", 34, "2, rue Myrha");
//je lance une instance de la class Languages qui appartient au namespace NS_Lang, avec comme parametre les langues étudiées
let foreignLangs:import_NS_Lang.NS_Lang.Languages = new import_NS_Lang.NS_Lang.Languages(["English", "Français", "Turkce"]);
//je stocke les langues qu'il apprend
newStudent1.langs = foreignLangs;

affiche_message(`Verification du bon fonctionnement de la création d'un namespace, de son export vers fichier externe sous form de module externe et de son utilisation :
${newStudent1.affiche_langs()}`);

//je lance une autre instance de Student
let newStudent2:import_NS_Lang.NS_Lang.Student = new import_NS_Lang.NS_Lang.Student("Huseyin", 21, "Alperen Cad. No:32");
//je détermine les langues du deuxième eleve
newStudent2.langs = new import_NS_Lang.NS_Lang.Languages(["Français", "English"]);
//j'affiche les langs du deuxième eleve
affiche_message(`Tests supplémentaires sur l'utilisation du module externe (création d'une seconde instance) :
${newStudent2.affiche_langs()}`);
//modifie les langs de newStudent2 de façon à corresponre à newStudent1
newStudent2.langs = foreignLangs;
//je vérifie les changements
affiche_message(`Tests supplémentaires sur l'utilisation du module externe (modification de la second instance) :
${newStudent2.affiche_langs()}`);

//je donne des notes à newStudent2
newStudent2.addNote(10);
newStudent2.addNote(20);
//Attention, addNote() existe dans la class Eleve aussi mais la ligne précédente se réfère à la class Student à partir de laquelle newStudent2 est créé
//pour tester j'ai changé le nom de la méthode afficher_notes vers display_notes dans la class importé Student
//Donc ce code ne marche pas
//console.log(newStudent2.afficher_notes());
//ce code marche
//console.log(newStudent2.display_notes());
affiche_message(`Tests supplémentaires sur l'utilisation du module externe (utilisation des méthodes de la class importée) :
${newStudent2.display_notes()}`);
