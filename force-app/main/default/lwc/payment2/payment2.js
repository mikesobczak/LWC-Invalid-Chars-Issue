import { LightningElement } from 'lwc';

const anotherAmountStripInvalidChars = value => {
    let returnValue = value.replace(/[^0-9.]/g,'');
    return returnValue;
}

export default class Payment2 extends LightningElement {

    anotherAmount;

    handleAnotherAmountChange(event) {
        const value = event.detail.value;

        const xform = anotherAmountStripInvalidChars(value);
        console.log('xform:', xform);

        this.anotherAmount = xform;
    }

}