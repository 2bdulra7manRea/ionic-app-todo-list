import { Component, OnInit } from '@angular/core';
import { tasking } from 'src/app/model/tasking.services';
import {TaskInterface} from '../../model/interFaceTask'
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
time:Date=new Date();


searchvalue:string=''

tasks:TaskInterface[]=[{
title:'learn german',
createdAt:'2021-04-07',
content:'learn the first lesson in A2 then go to  free4talk to practice',
pic:'../../../assets/icon/favicon.png'
}
]



  constructor(private Service:tasking) { }

  ngOnInit() {
this.tasks=this.Service.getTasks();
  }


Search():TaskInterface[]{




return this.searchvalue!==''?this.tasks.filter((value)=>{

return value.title.includes(this.searchvalue);


}):this.tasks;
}


}
