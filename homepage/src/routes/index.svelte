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
	<div class="flex flex-col gap-16 w-1/2 h-screen justify-center align-middle">
		<div
			class="justify-center"
			data-aos="fade"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
		>
			<h1 class="text-left text-8xl font-bold">Korima</h1>
			<p class="text-left text-2xl mt-5">
				We're more than a file system. <br />Bring your files to life.
			</p>
			<a href="/download"><button class="btn-primary btn mt-10 normal-case">Get Started</button></a>
		</div>
	</div>
	<!-- <img alt="" class="max-h-full aspect-square " src="/landing.png" /> -->
	<LandingShapes class="max-h-full aspect-square " />
</section>

<a
	id="scrollerArrow"
	href="/#overview"
	class="z-50 w-full absolute bottom-10 m-auto stroke-base-content"
>
	<svg class="m-auto" width="25" height="15" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
		<path d="M0,0 l35,50 l35,-50" fill="none" stroke-linecap="round" stroke-width="5" />
	</svg>
</a>

<section
	id="overview"
	class="w-full h-screen px-28 py-8  relative flex justify-center items-center"
>
	<div class="p-5 ml-2 w-1/2 ">
		<p class="text-6xl ">Overview</p>
		<p class="mt-5 mr-36 text-base break-words pr-3.5">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Maecenas porttitor faucibus
			nulla, sit amet suscipit justo ultricies ut. Donec ultrices condimentum mi, ut auctor mi
			ornare ut.
		</p>
	</div>
	<div data-aos="fade-left" class="border mockup-window border-base-300 w-1/2 h-1/2 bg-slate-300">
		<div class="flex h-full justify-center px-4 py-16 border-t border-base-300 text-base-100">
			Hello!
		</div>
	</div>
</section>
<div id="features" class="divider pt-10" />

<section class="px-28 py-8">
	<h1 class="text-5xl text-center">Features</h1>
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
		<div class="hero-overlay bg-base-100" />
		<div class="text-center hero-content text-base-content">
			<div class="max-w-md">
				<img class="h-20 m-auto" src="/static/favicon.png" alt="Korima Logo" />
				<h1 class="m-5 text-5xl font-bold ">Try Korima Today</h1>
				<p class="mb-5">
					Get started for free. <br />
					Change the way you stucture forever.
				</p>
				<a href="/download" class="btn btn-primary btn-lg mt-5 normal-case">Get Started</a>
			</div>
		</div>
	</div>
</section>
