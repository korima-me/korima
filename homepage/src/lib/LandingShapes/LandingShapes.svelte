<script lang="ts">
	import { onMount } from 'svelte';

	let className: string = '';

	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import anime from 'animejs/lib/anime.js';
	onMount(() => {
		function randomValues() {
			anime({
				targets: '.circle',
				translateX: function () {
					return anime.random(-500, 0);
				},
				translateY: function () {
					return anime.random(0, 50);
				},
				easing: 'easeInOutQuad',
				duration: 4000,
				complete: randomValues,
			});
		}

		randomValues();
	});
	const sizeMax = 14,
		sizeMin = 12;

	let size = tweened(sizeMin, {
		duration: 2000,
		easing: quadInOut,
	});
	let isBig = true;

	onMount(() => {
		setInterval(() => {
			size.set(isBig ? sizeMax : sizeMin);
			isBig = !isBig;
		}, 2000);
	});

	export { className as class };
</script>

<div class={className}>
	<div class="circle bg-fuchsia-800" />
	<div class="circle bg-green-500" />
	<div class="circle bg-orange-500 important" />
	<div class="circle bg-cyan-400" />
	<div class="circle bg-red-500" />
	<div class="circle bg-yellow-300" />
	<div class="circle bg-green-500" />
	<div class="circle bg-orange-500 important" />
	<div class="circle bg-fuchsia-800" />
	<div class="circle bg-red-500" />
	<div class="circle bg-fuchsia-800" />
	<div class="circle bg-green-500" />
	<div class="circle bg-orange-500 important" />
</div>

<style>
	.circle {
		@apply w-12 h-12 rounded-full relative;
	}

	.circle::after {
		position: absolute;
		content: '';
		background: inherit;
		opacity: 0.25;
		width: 150%;
		height: 150%;
		border-radius: 50%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.circle.big::after {
		width: 200%;
		height: 200%;
	}
</style>
