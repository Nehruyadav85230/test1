import { LightningElement } from 'lwc';
import cardtext from '@salesforce/label/c.cardtext';
import bodytext from '@salesforce/label/c.bodytext'
import buttontext from '@salesforce/label/c.buttontext'; 
export default class Customlabel extends LightningElement {

labelList={

    cardtext,
    bodytext,
    buttontext,
}
alerthandler(){
    alert('custom labels implumented successfully')
}

}