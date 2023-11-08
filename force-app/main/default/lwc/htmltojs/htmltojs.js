import { LightningElement } from 'lwc';

export default class Htmltojs extends LightningElement { 

letterhandler(event){
 
    var Varvaluefromhtmltojs = event.target.value;

    alert('the letter you entered =' + Varvaluefromhtmltojs);


}
}