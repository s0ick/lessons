'use strict';

function DomElement(selector, height, width, bg, fontSize, text){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
}
DomElement.prototype.create = function(){
  if(this.selector.substring(0, 1) === '#'){
    let p = document.createElement('p');
    p.id = this.selector.substring(1);
    p.style.cssText =`height: ${this.height}; 
                      width: ${this.width};
                      background: ${this.bg};
                      font-size: ${this.fontSize};`;
    p.textContent = this.text;
    document.body.append(p);
  } else {
    let div = document.createElement('div');
    div.classList.add(this.selector.substring(1));
    div.style.cssText =`height: ${this.height}; 
                        width: ${this.width};
                        background: ${this.bg};
                        font-size: ${this.fontSize};`;
    div.textContent = this.text;
    document.body.append(div);
  }
};

let block = new DomElement('.div', '30px', '80px', '#b4a839', '24px', 'Я блок!');
let paragraph = new DomElement('#p', '30px', '130px', '#25aa61', '24px', 'Я параграф!');
block.create();
paragraph.create();