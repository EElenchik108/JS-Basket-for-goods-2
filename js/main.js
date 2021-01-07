"use strict";

let select = document.getElementsByTagName('select')[0];
let money = document.getElementById('money');
let moneySpan = document.querySelector('div>span');
let pSpan  = document.querySelector('span~p');
let valSelect, valS=0;
let sel = document.getElementById('sel');
let valueSel;
pSpan.innerHTML="   $ ";

class Product {
    constructor(name, price, image) {      
    this.name = name;
    this.price = price;        
    this.image = image;
    this.valueSel = price;
    this.newDivProduct=null;                
  }
    createProduct (){        
        let money1 = moneySpan.innerHTML*1;
        let container = document.getElementById('container');
        this.newDivProduct = document.createElement('div');
        this.newDivProduct.classList.add('product');		
        let newPic = document.createElement('img');
        newPic.classList.add('img');
        newPic.src = this.image;
        let price = document.createElement('p');
        price.innerHTML = this.valueSel;
        let quantity = document.createElement('input');

        quantity.type = "number";
        quantity.value = "1";
        quantity.min = "1";
        quantity.max = "100";

        let but = document.createElement('input');  
        but.type = "button"; 
        but.value="Add to cart";
        
        container.append( this.newDivProduct);  		 
        this.newDivProduct.append(newPic);
        this.newDivProduct.append(price);
        this.newDivProduct.append(quantity);
        this.newDivProduct.append(but);

        select.addEventListener('change', ()=> {
            this.valueSel=0;
            let money2 = money1*1;
            pSpan.innerHTML="   $ ";
            if (select.selectedIndex==0){
                this.valueSel=this.price;
                price.innerHTML = this.valueSel;
                if(money1!=0) {money2=money1*1;moneySpan.innerHTML  = money2.toFixed(2);}
                     
            }
            if (select.selectedIndex ==1){
                this.valueSel=this.price*28;
                price.innerHTML = this.valueSel;
                pSpan.innerHTML="   ₴ ";
                if(money1!=0) {
                    money2=money1*28;
                    moneySpan.innerHTML  = money2.toFixed(2);
                }         
            }
            if (select.selectedIndex ==2){
                this.valueSel=this.price*0.8;
                price.innerHTML = this.valueSel;
                pSpan.innerHTML="   € ";
                if(money1!=0) {
                    money2=money1*0.8;
                    moneySpan.innerHTML  = money2.toFixed(2);} 
            }            
        })
        but.addEventListener('click', function(){        
            money1 = moneySpan.innerHTML*1;
            console.log(this.previousElementSibling.previousElementSibling.innerHTML);
            money1 += this.previousElementSibling.previousElementSibling.innerHTML*this.previousElementSibling.value;
            moneySpan.innerHTML  = money1.toFixed(2);            
        })
    }

    get fullName () {return `${this.name}`};
    set fullName (newName) {return this.name = newName};
    get fullPrice () {return `${this.price}`};
    set fullPrice (newPrice) {
        let PtPrice =  /\d/;
        if (PtPrice.test(newPrice)) {
            if (newPrice>0) {
                return this.price = newPrice}
            if (newPrice<=0) {throw new Error('FEW')}
        }
        if (!PtPrice.test(newPrice)) {throw new Error('Not a figure!')}
    };
    get fullImage () {return `${this.image}`};
    set fullImage (newImage) {
        let PtImage =  /(images)/;
        if (PtImage.test(newImage)) {
            return this.image = newImage}
        if (!PtImage.test(newImage))  {throw new Error('Check image address!')}
    }   
    static createProducts(){
        return new Product ('Trust', 108, 'images/1.png');
    }
}	

moneySpan.innerHTML = valS;

let newProd1 = new Product('helmet', 118, 'images/tovar1.png');
newProd1.createProduct ();
let newProd2 = new Product('wheels', 200, 'images/tovar2.png');
newProd2.createProduct ();
let newProd3 = new Product('bike', 300, 'images/tovar3.png');
newProd3.createProduct ();
let newProd4 = new Product('jacket', 400, 'images/tovar4.png');
newProd4.createProduct ();
let newProd5 = new Product('bike', 500, 'images/tovar5.png');
newProd5.createProduct ();
let newProd6 = new Product('helmet', 600, 'images/tovar6.png');
newProd6.createProduct ();