/* global AFRAME */
AFRAME.registerComponent("ring", {
  schema: {
    color: { default: "red" },
    width: { default: 0.11 },
    toggable: { default: true },
  },

  events: {
    click: function () {
        console.log("clicked");
    },
  },

  init: function () {
    var el = this.el;
    this.color = this.data.color;
    //set initial color to material
    el.setAttribute("material", { color: this.color });

    this.bindMethods();
    this.el.addEventListener("click", this.onClick);
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  
  },

  onClick: function () {
    var el = this.el;
    console.log(el);
    let color=el.getAttribute("ring").color;
    console.log(color);
    el.setAttribute("material", { color: "#9814C9" });
       console.log(el);
    
    setTimeout(()=>{
             el.setAttribute("material", { color:color });
    },100);
 
  },
});
