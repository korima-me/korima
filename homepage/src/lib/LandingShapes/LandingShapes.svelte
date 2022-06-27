<script lang="ts">
	import { onMount } from 'svelte';

	let className: string = '';

	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import anime from 'animejs/lib/anime.js';
	import { random } from 'animejs';
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
	<div id="circle1" class="circle bg-primary-focus -left-96 " />
	<div id="circle2" class="circle bg-secondary-focus -left-52" />
	<div class="circle bg-info important -left-80 " />
	<div class="circle bg-success -left-36" />
	<div id="circle3" class="circle bg-warning -left-96" />
	<div id="circle4" class="circle bg-error" />
	<div id="circle5" class="circle bg-primary-focus left-80" />
	<div class="circle bg-secondary-focus important -left-96" />
	<div class="circle bg-info -left-20" />
	<div class="circle bg-success -left-80" />
	<div id="circle6" class="circle bg-warning -left-56" />
	<div id="circle7" class="circle bg-error -left-72" />
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
	@media screen and (max-width: 600px) {
		.circle {
			visibility: hidden;
		}
	}
</style>
