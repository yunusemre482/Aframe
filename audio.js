$(document).ready(function () {
  Tone.start();
});


const delay = new Tone.PingPongDelay({
  delayTime: "4t",
  feedback: 0.2,
  wet: 0.3,
});
const filter = new Tone.Filter({
  frequency: 5000,
  type: "lowpass",
  rolloff: -96,
});

const freeverb = new Tone.JCReverb(0.5);

const limiter = new Tone.Limiter(-20).toDestination();


const synth = new Tone.PolySynth({
        volume: -15,
        envelope: {
            attack: 0.05,
            decay: 0.1,
            sustain: 0.6,
            release: 1  
        },
        oscillator: {
            type: 'sine'
        },
        portamento:1
    
    });

 synth.chain(delay,freeverb,filter,limiter);


//.....................................MQTT

const connectUrl = "wss://iomust:eqdhdYeiwHmfZl7o@iomust.cloud.shiftr.io";
const client = mqtt.connect(connectUrl);

/* global AFRAME, THREE */
AFRAME.registerComponent("synth", {
  // The schema defines arguments accepted by this component
  schema: {
    // The note / octave
    note: {
      type: "string",
      default: "C4",
    },
    // The duration: 8n describes an eighth note
    duration: {
      type: "string",
      default: "6n",
    },
  },

  init: function () {
    // setup the fusing/hover event listener
    this.el.addEventListener("click", this.trigger.bind(this));
   
  },
  trigger: function () {
    // trigger a note on the synth
    // this.data refers to the arguments defined
    client.publish("fromVR", this.el.attributes.id.value);
    synth.triggerAttackRelease(this.data.note, this.data.duration);
   
  
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});
