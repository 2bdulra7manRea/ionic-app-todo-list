import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { tasking } from 'src/app/model/tasking.services';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {


content:string='';
title:string='';

  constructor(private service:tasking ,private rout:NavController) { }

  ngOnInit() {
  }

  additem(){
let time=new Date().toDateString()

  this.service.TODOLIST.push({title:this.title,createdAt:time,content:this.content})
this.rout.navigateBack('/');
  }



}