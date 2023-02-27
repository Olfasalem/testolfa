
export class Post {
  _id: number;
  titre : string;
  contenu : string;

  constructor(id: number , titre: string, contenu: string) {
    this._id= id;
    this.titre = titre;
    this.contenu = contenu;
  }

}
