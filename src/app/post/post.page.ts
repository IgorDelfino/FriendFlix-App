import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor() { }
  dadosPost = {
    nome_user:"Igor Delfino",
    serie:"Black Mirror",
    title:"melhor serie",
    texto:"muito bom, adoro as reviravoltas",
    horario:"19:47",
    num_likes:754,
    episodio:5,
    comentarios:["melhor serie ever","desisto dessa série" ],
    like_state:0,
    like:false,
    dislike:false,
    spoiler:true,
    anexo:"www.idontknow.com",
    quantidade_comp:456,
  }
  likeOrUnlike(dadosPost, ponto){
    if (ponto==1 && dadosPost.like_state==0){
      dadosPost.num_likes+=1;
      dadosPost.like_state=1;
      dadosPost.like = true;
      dadosPost.dislike = false;
      return;
    }
    if (ponto==-1 && dadosPost.like_state==0){
      dadosPost.num_likes-=1;
      dadosPost.like_state=-1;
      dadosPost.like = false;
      dadosPost.dislike = true;
      return;
    }
    if (ponto==1 && dadosPost.like_state==-1){
      dadosPost.num_likes+=2;
      dadosPost.like_state=1;
      dadosPost.like = true;
      dadosPost.dislike = false;
      return;
    }
    if (ponto==-1 && dadosPost.like_state==1){
      dadosPost.num_likes-=2;
      dadosPost.like_state=-1;
      dadosPost.like = false;
      dadosPost.dislike = true;
      return;
    }
    if (ponto==-1 && dadosPost.like_state==-1){
      dadosPost.num_likes+=1;
      dadosPost.like_state=0;
      dadosPost.like = false;
      dadosPost.dislike = false;
      return;
    }
    if (ponto==1 && dadosPost.like_state==1){
      dadosPost.num_likes-=1;
      dadosPost.like_state=0
      dadosPost.like = false;
      dadosPost.dislike = false;
      return;
    }


  }

  ngOnInit(){

  }

}
