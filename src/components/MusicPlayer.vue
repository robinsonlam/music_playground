<template>
  <div id="mp3_player">
    <div id="audio_box"></div>
      <canvas id="analyser_render"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    songData: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      playing: false,
      audio: null,
      source: null,
      context: null,
      analyser: null
    }
  },

  ready() {
    this.audio = new Audio();

    this.initialiseAudio();
  },

  watch: {
    songData() {
      this.initialiseAudio();
    }
  },

  methods: {
    initialiseAudio() {
       // Create a new instance of an audio object and adjust some of its properties

      // Get Audio src
      this.audio.src = this.songData.stream_url + '?client_id=f699562bbc9a61ec0f6e8e0ef82c8cff';

      this.audio.controls = true;
      this.audio.loop = true;
      this.audio.autoplay = true;
      this.audio.crossOrigin = "anonymous";

      $(this.audio).on('canplay', function() {
        if(!this.playing) {
          this.initMp3Player();
        }
      }.bind(this));
    },

    initMp3Player() {
      this.playing = true;
      document.getElementById('audio_box').appendChild(this.audio);
      this.context = new AudioContext(); // AudioContext object instance
      this.analyser = this.context.createAnalyser(); // AnalyserNode method
      // Re-route audio playback into the processing graph of the AudioContext
      this.source = this.context.createMediaElementSource(this.audio); 
      this.source.connect(this.analyser);
      this.analyser.connect(this.context.destination);
    }
  }
}
</script>
