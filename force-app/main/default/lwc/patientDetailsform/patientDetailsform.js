import { LightningElement } from 'lwc';

export default class PatientDetailsform extends LightningElement {
    booleanflagvalue=false;

    showdetailshandler(){
     this.booleanflagvalue=true;   
    }
    hidedetailshandler(){
        this.booleanflagvalue=false;
    }
}