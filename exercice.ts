/************TEST TYPESCRIPT SIMPLE*****************/

console.log("test");
console.log("\n");
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

console.log(message);

/************CREATION D4UN ARRAY *****************/

let friends:string[] = ["Kevin", "Amandine", "Cyril"];

/************UTILISATION DES PROCEDURES (VOID)*****************/

function helloFriends(friendsList:string[]):void {
    for(let i:number = 0; i<friendsList.length;i++){
      let message:string = `HELLO, ${friendsList[i]}`;
      console.log(message);
    }
}

helloFriends(friends);


/************CREATION DES OBJETS LITERAUX*****************/

let monAddress = {
  rue: "Paul Valéry",
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

console.log(indicationAddress);

/************CREATION D'UNE CLASSE*****************/

class Personne{
  private sexe: string;
  cheuveux: string;

  constructor(sexe:string, cheuveux:string){


  }
  setSexe(sexe:string):void{
    this.sexe = sexe;
  }

}

let testObject = new Personne("homme", "brun");


testObject.setSexe("femme");
// console.log(testObject.sexe);

/************CREATION D'UNE CLASSE 2*****************/
class Eleve{
  _prenom: string;
  _age: number;
  _adresse : string;
  _notes : number[] = [];
  constructor(newPrenom: string, newAge: number, newAdresse : string){
    this._prenom = newPrenom;
    this._age = newAge;
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
    let notesLength = this._notes.length;
    let notesTotales = 0;
    for(let i=0;i<notesLength;i++){
      notesTotales += this._notes[i];
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
let eleve1Adresse:string = "32, rue Paul Valery";

let eleve1 = new Eleve(eleve1Nom, eleve1Age, eleve1Adresse);

eleve1.addNote(12);
eleve1.addNote(8);
eleve1.addNote(20);
eleve1.prenom = "Emir";
let resultatEleve1 = eleve1.afficher_notes();
console.log(resultatEleve1);

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

class Toto {
  _test: string;

}

class AdresseBook {
  _adresse: Adresse;
  _person: EntryName;

  constructor(newAdresse:Adresse, newPerson:EntryName){
    this._adresse = newAdresse;
    this._person = newPerson;
  }

  get prenom(){
    return this._person.personPrenom;
  }

  get nom(){
    return this._person.personNom;
  }

  get address(){
    let address = `${this._adresse.adresseBatiment}, ${this._adresse.adresseAppelation} ${this._adresse.adresseNom}`;
    return address;
  }

  giveReport(){

    let prenom = (this.prenom ? `${this.prenom} ` : "");
    let reportMessage = `${prenom}${this.nom} lives at ${this.address}`;
    return reportMessage;
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

console.log(entry1.giveReport());


/************CREATION D'UNE NAMESPACE*****************/
