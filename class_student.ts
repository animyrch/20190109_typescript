export namespace NS_Lang {
  
  export class Languages {
    private _languages:string[];

    constructor(newLanguages:string[]){
      this._languages = newLanguages;
    }

    list=():string[]=>{
      //cette fonction retourne la liste de langs qui est un array de string
      return this._languages;
    }

  }

  export class Student{
    private _prenom: string;
    private _age: number;
    private _adresse : string;
    private _notes : number[] = [];
    private _langs : NS_Lang.Languages = new NS_Lang.Languages([]);

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
    get langs(){
      return this._langs;
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
    set langs(newLangs:NS_Lang.Languages){
      this._langs = newLangs;
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
    display_notes():string{
      let resultNotes:string = `${this.eleve_info(this._prenom, this._age, this._adresse)} a les notes suivantes "${this.notes}" et donc sa moyenne est de ${this.calc_moyenne()}`;
      return resultNotes;
    }
    affiche_langs():string{
      let listLangs = this.langs.list().join(", ");
      let message = `${this.prenom} apprend ${listLangs}`;
      return message;

    }
  }

}
