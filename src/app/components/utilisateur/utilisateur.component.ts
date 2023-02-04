import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent  implements OnInit{



 myArray:any=[];
 myUtilisateur: any ={

   id:'',
   nom:'',
   prenom:'',
   age:''

 }
 myCondition=false;
  constructor(private myVar : UtilisateurService ){

  }

  ngOnInit() {
    this.getUtilisateur();
  
  }

  getUtilisateur(){
    this.myVar.getAll()
    .subscribe((data: any) => {
      this.myArray =  data;
    })

  }
  deleteUtilisateur(id: any){
    this.myVar.delete(id)
    .subscribe(()=> {
      this.myArray=this.myArray.filter
      (myVariable => myVariable.id != id)
    })

  }
  postUtilisateurs()
   {
    this.myVar.postut(this.myUtilisateur)
    .subscribe((myVariable) => {
      this.myArray=[myVariable, ...this.myArray];
      this.videInput();

    })
   }
   videInput(){
    this.myUtilisateur={
      id:'',
      nom:'',
      penom:'',
      age:''

    }
   }
   editUtilisateur(myVariable){
    this.myUtilisateur=myVariable;
    this.myCondition=true;
   }
   updateMyUtilisateur()
{
  this.myVar.updateUtilisateur(this.myUtilisateur)
  .subscribe(utilisateur =>{
    this.videInput();
    this.myCondition=false;
  })
}
}
