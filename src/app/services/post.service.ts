import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  postsArray!:Post[];
  // postsArray= [
  //           new Post(1 , 'Ubuntu' , 'Ubuntu est un système d’exploitation GNU/Linux fondé sur Debian. Il est développé, commercialisé et maintenu pour les ordinateurs individuels, les serveurs et les objets connectés par la société Canonical.'),
  //           new Post(2 , 'Tinycore1' , 'Tiny Core Linux est une Distribution Linux indépendante, réduite à son minimum, et ayant pour objectif de fournir un système de base à la fois ultra-rapide, léger et évolutif. Tiny Core Linux utilise BusyBox, FLTK, et quelques autres logiciels comparables par leur minimalisme.'),
  //           new Post(3 , 'Tinycore2' , 'Tiny Core Linux est une Distribution Linux indépendante, réduite à son minimum, et ayant pour objectif de fournir un système de base à la fois ultra-rapide, léger et évolutif. Tiny Core Linux utilise BusyBox, FLTK, et quelques autres logiciels comparables par leur minimalisme.'),
  //           new Post(4 , 'VPC' , 'Amazon Virtual Private Cloud est un service commercial de cloud computing qui fournit aux utilisateurs une section de réseau au sein d Amazon Web Services isolée du réseau traditionnel et des réseaux des autres clients d AWS. Les utilisateurs peuvent sélectionner leur propre plage d adresses IP et sous-réseaux.'),
  // ];
  apiUrl="http://localhost:3000/post/";

  constructor(private http: HttpClient) {
    this.chargerListposts().subscribe((listApp) => {
      console.log(listApp);
    });
  }
  chargerListposts() : Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/post');
  }
  getposts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);

  }
addPost(p:Post):Observable<Post[]>{
  return this.http.post<Post[]>(this.apiUrl,p);
}
   getPostbyId(id:String):Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl+id);
  }

updatePost(p:Post):Observable<any>{
  return this.http.put<any>(this.apiUrl+p._id,p);
}
deletePost(p:Post):Observable<  any>{
  return this.http.delete<any>(this.apiUrl+p._id);
}

   delete(_id:number){
    // this.postsArray.forEach((element,index) => {
    //   if(element._id == _id){
    //     this.postsArray.splice(index,1)
    //   }
    // });
   }


   editPost(_id:number, newContent:string, newTitle:string){
    // this.postsArray.forEach((element,index) => {
    //   if(element._id == _id){
    //     element.contenu = newContent;
    //     element.titre = newTitle;
    //   }
    // });
   }

}
