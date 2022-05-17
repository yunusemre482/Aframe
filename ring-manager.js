/* global AFRAME */

let count=0;

AFRAME.registerComponent("ring-manager", {
  events: {
    click: function (event) {
      
    console.log(this.el);
    count+=0.4;
      
      var elem_material=this.el.getAttribute("material")
      this.el.setAttribute("rotation", "0 0 0 ");
      
      if(elem_material && elem_material.color=="red" || !elem_material){
            this.el.setAttribute("material", "color", "blue");
            
      }else  if(elem_material && elem_material.color=="blue"){
            this.el.setAttribute("material", "color", "red");
             this.el.setAttribute(
        "animation",
        "property: rotation; to: 360 360 360; dur: 2000; easing: linear; loop: true"
      );
      }
      
     
     
    },
  },
  init: function () {
  
    this.el.setAttribute("scale", "0.4 0.4 0.4");
    console.log(this.el.id);
  
     
  },
  tick:function(){
    if(this.el.id=="mesh1"){
        this.el.setAttribute('position', { x: 0, y: 0, z: 0 });
    }else if(this.el.id=="mesh2"){
        this.el.setAttribute('position', { x: 1, y: 0, z: 0 });
    }else{
      this.el.setAttribute('position', { x: -1, y: 0, z: 0 });
    }
  }
});
