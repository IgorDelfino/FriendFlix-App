import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor() { }

  dadosPost:object = {
    nome_user:string="47238492121",
    title:string="melhor serie",
    texto:string="hifgaidfhiauioahfohauofhaofuoahfkzkvsibksdhvybsivsydisbvisdhvihsdfhsiuvisfnvibsvuisbdvibsvbiyb",
    horario:string="19:47",
    num_likes:number=754,
    episodio:number=5,
    comentarios:string[]=["melhor serie ever","desisto dessa série" ],
    like_state:boolean=1,
    anexo:string="www.idontknow.com",
    quantidade_comp:number=456,

  }
  likeOrunlike(like:boolean):boolean{
    if (like_state = 1){
      like_state = 0;
      num_likes-=0;
      return 0;
    }
    else if(like_state = 0){
      like_state = 1;
      num_likes+=1;
      return 1;
    }
  }
  ngOnInit(){

  }

}
