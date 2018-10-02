var context = new AudioContext();
var sound1 = newAudio("sounds/sound1.wav")
var sound2 = newAudio("sounds/sound2.wav")
var sound3 = newAudio("sounds/sound3.wav")
var sound4 = newAudio("sounds/sound4.wav")
var soundNode = context.createMediaElementSource(source);
var gainNode = context.Gain();
sound1.connect(GainNode);
sound2.connect(GainNode);
sound3.connect(GainNode);
sound4.connect(GainNode);

gainNode.gain.value = 0.6;

soundNode.connect(gainNode);
gainNode.connect(context.destination);
