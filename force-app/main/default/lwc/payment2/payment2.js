import { LightningElement } from 'lwc';

const anotherAmountStripInvalidChars = value => {
    let returnValue = value.replace(/[^0-9.]/g,'');
    return returnValue;
}

export default class Payment2 extends LightningElement {

    anotherAmount;

    handleAnotherAmountChange(event) {
        const value = event.detail.value;
        // this.anotherAmount = value;

        const xform = anotherAmountStripInvalidChars(value);

        if(xform.length <= 0) {
            this.anotherAmount = undefined
        }
        else {
            this.anotherAmount = xform;
        }
    }

}