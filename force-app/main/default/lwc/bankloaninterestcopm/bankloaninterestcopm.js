import { LightningElement } from 'lwc';

export default class Bankloaninterestcopm extends LightningElement {
    loanresult;
    principal;
    noofyears;
    rateofinterest;
    principalchangehandler(event)
    {
        this.principal=(event.target.value);
    }
    yearschangehandler(event)
    {
        this.noofyears=parseInt(event.target.value);
    }
    ROIchangehandler(event)
    {
        this.rateofinterest=parseInt(event.target.value);
    }

    calculateLoanAmountHandler()
    {
        this.loanresult='The loan interest is='+ ( this.principal*this.noofyears*this.rateofinterest/100);
    }
    
}S