<script lang="ts">
	import LandingShapes from '../lib/LandingShapes/LandingShapes.svelte';

	import AOS from 'aos';

	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init({
			duration: 1000,
		});
	});
</script>

<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

<section
	id="home"
	class=" w-full h-screen px-16 py-8 relative flex flex-wrap justify-between items-center gap-32 z-50 bg-base-100"
>
	<div class="flex flex-col gap-16">
		<div>RE</div>
	</div>
	<!-- <img alt="" class="max-h-full aspect-square " src="/landing.png" /> -->
	<LandingShapes class="max-h-full aspect-square " />
</section>

<a id="scrollerArrow" href="/#overview" class="z-50 w-full absolute bottom-10 m-auto">
	<svg class="m-auto" width="25" height="15" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
		<path
			d="M0,0 l35,50 l35,-50"
			fill="none"
			stroke="white"
			stroke-linecap="round"
			stroke-width="5"
		/>
	</svg>
</a>

<section
	id="overview"
	class="w-full h-screen px-28 py-8  relative flex justify-center items-center"
>
	<div class="p-5 ml-2 w-1/2 ">
		<p class="text-6xl ">Lorem Ipsum</p>
		<p class="mt-5 mr-36 text-base break-words pr-3.5">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Maecenas porttitor faucibus
			nulla, sit amet suscipit justo ultricies ut. Donec ultrices condimentum mi, ut auctor mi
			ornare ut.
		</p>
	</div>
	<div data-aos="fade-left" class="border mockup-window border-base-300 w-1/2 h-1/2 bg-slate-700">
		<div class="flex h-full justify-center px-4 py-16 border-t border-base-300">Hello!</div>
	</div>
</section>
<div id="features" class="divider pt-10" />

<section class="px-28 py-8">
	<h1 class="text-5xl text-center">Lorem Ipsum</h1>
	<section id="three-info" class="flex p-20">
		<div class="card text-center shadow-2xl">
			<div class="card-body">
				<h2 class="card-title">Lorem ipsum</h2>
				<p>
					Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus
					veritatis sed molestiae voluptates incidunt iure sapiente.
				</p>
				<div class="justify-center card-actions">
					<figure class="px-10 pt-10">
						<img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
					</figure>
				</div>
			</div>
		</div>
		<div class="card text-center shadow-2xl">
			<div class="card-body">
				<h2 class="card-title">Lorem ipsum</h2>
				<p>
					Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus
					veritatis sed molestiae voluptates incidunt iure sapiente.
				</p>
				<div class="justify-center card-actions">
					<figure class="px-10 pt-10">
						<img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
					</figure>
				</div>
			</div>
		</div>
		<div class="card text-center shadow-2xl">
			<div class="card-body">
				<h2 class="card-title">Lorem ipsum</h2>
				<p>
					Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus
					veritatis sed molestiae voluptates incidunt iure sapiente.
				</p>
				<div class="justify-center card-actions">
					<figure class="px-10 pt-10">
						<img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
					</figure>
				</div>
			</div>
		</div>
	</section>
</section>

<div id="download" class="divider pt-10" />

<section class="min-h-screen flex align-middle">
	<div class="hero min-h-fill">
		<div class="hero-overlay" />
		<div class="text-center hero-content text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Get Korima</h1>
				<p class="mb-5">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
				</p>
				<a href="/download" class="btn btn-primary btn-lg">Get Started</a>
			</div>
		</div>
	</div>
</section>
