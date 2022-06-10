<script lang="ts">
	import { typewriter } from './typewriter';

	export let speed: number = 110;
	export let wait: number = 1000;
</script>

<div class="typewriter-container" use:typewriter={{ speed, wait }}>
	<slot />
</div>

<style>
	.typewriter-container :global(:not(.typing)) {
		display: none;
	}
</style>
