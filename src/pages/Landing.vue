<template>
  <p>This is the Landing Page</p>
  <music-player v-bind:song-data="songData"></music-player>
</template>

<script>
import MusicPlayer from '../components/MusicPlayer';
export default {
	route: {
		data(transition) {
			return {
				songData: SC.get('/resolve', {
					url: 'https://soundcloud.com/plottwist/coconut',
					client_id: 'f699562bbc9a61ec0f6e8e0ef82c8cff'
				})
			}
		}
	},

	data() {
		return {
			songData: {}
		}
	},

	components: {
		MusicPlayer
	}
}
</script>
