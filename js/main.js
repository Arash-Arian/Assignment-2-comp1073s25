class Smoothie {
    flavor;
    size;
    sugar;
    constructor(flavor, size, sugar) {
        this.flavor = flavor;
        this.size = size;
        this.sugar = sugar;
    }
    getDescription() {
        if (this.sugar){
            return `Here you go, your ${this.size} ${this.flavor} smoothie with added sugar.`;
        }
        else {
            return `Here you go, your ${this.size} ${this.flavor} smoothie without added sugar.`;
        }
    }
}
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();

    const flavor = document.getElementById('flavor').value;
    //size is 3 radio buttons so we get the value accordingly by going through the elements
    const sizeElements = document.getElementsByName('size');
    //find the checked radio button and get its value and if none is checked, default to 'medium'
    const size = Array.from(sizeElements).find(radio => radio.checked)?.value || 'medium';
    //sugar is a checkbox so we just check if it is checked or not
    const sugar = document.getElementById('sugar').checked;
    //create a new Smoothie object with the values from the form
    const smoothie = new Smoothie(flavor, size, sugar);
    //display the description of the smoothie in the output div
    document.getElementById('output').innerHTML = smoothie.getDescription();
});