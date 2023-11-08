import { LightningElement } from 'lwc';

export default class Foreachloopcomp extends LightningElement {
    ceolistprop;
    showlisthandler(){
this.ceolistprop=[
{
    id:1,
    name:'Nehru yadav',
    title:'software',
},
{
    id:2,
    name:'sudhakar',
    title:'google',
}



]




    }
}