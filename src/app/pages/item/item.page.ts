import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { TaskInterface } from 'src/app/model/interFaceTask';
import { tasking } from 'src/app/model/tasking.services';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

item:TaskInterface={title:'',content:"",createdAt:'',pic:''};
index:number=0;

  constructor(public toast:ToastController ,private router:ActivatedRoute,private go:NavController , private service:tasking) { }

  ngOnInit() {

this.router.params.subscribe((value)=>{
this.item=this.service.getItem(+value.id);
this.index=+value.id;
},(err)=>{})
  }


 async  delete(){
this.service.deleteItem(this.index)
const Toast=await this.toast.create({
  message:'item deleted',
  duration:2000,
});
Toast.present();
this.go.back();

  }
}
