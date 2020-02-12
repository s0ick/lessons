'use strict';

function DomElement(height, width, bg){
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position = 'absolute';
}
DomElement.prototype.create = function(){
  let div = document.createElement('div');
  div.style.cssText =`height: ${this.height}; 
                      width: ${this.width};
                      background: ${this.bg};
                      position: ${this.position};`;
  div.id = 'square';                    
  document.body.append(div);
};
 
let block = new DomElement('100px', '100px', '#b4a839');
block.create();
let div = document.querySelector('#square');
document.addEventListener('DOMContentLoaded', function(){
  let x = 0,
      y = 0;
  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowDown'){
      event.preventDefault();
      x += 10;
      div.style.top = `${x}px`;
    } else if(event.key === 'ArrowUp') {
      event.preventDefault();
      x -= 10;
      div.style.top = `${x}px`;
    } else if(event.key === 'ArrowLeft') {
      event.preventDefault();
      y -= 10;
      div.style.left = `${y}px`;
    } else if(event.key === 'ArrowRight') {
      event.preventDefault();
      y += 10;
      div.style.left = `${y}px`;
    }
  });
});
