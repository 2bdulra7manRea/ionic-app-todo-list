
import { Injectable } from '@angular/core';
import { TaskInterface } from '../model/interFaceTask';
Injectable();


export class tasking {

TODOLIST:TaskInterface[]=[
    {
        title: 'open source native',
        createdAt: '2021-04-07',
        content: 'provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps.',
        pic: '../../../assets/icon/favicon.png'
    },
    {
        title: 'professional developers',
        createdAt: '2021-04-07',
        content: 'provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps.',
        pic: '../../../assets/icon/favicon.png'
    },
    
]

constructor(){}


    getTasks(): TaskInterface[] {
        return this.TODOLIST
    }


getItem(index:number):TaskInterface{
return this.TODOLIST[index];
}




deleteItem(index:number){

this.TODOLIST.splice(index,1);

}


}