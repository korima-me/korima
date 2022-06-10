import { sleep } from '../Typewriter/sleep';

export function typewriter(
	wrapper: HTMLElement,
	options: {
		speed: number;
		wait: number;
	},
) {
	const { speed, wait } = options;

	const nodes = wrapper.children;
	let nodeIndex = 0;

	async function writeEffect(node: Element) {
		const innerHTML = node.innerHTML;
		for (let i = 0; i <= innerHTML.length; i++) {
			const char = innerHTML.at(i);

			if (char === '<') i = innerHTML.indexOf('>', i);
			node.innerHTML = innerHTML.slice(0, i);
			await sleep(speed);
		}
	}

	async function unwriteEffect(node: Element) {
		const innerHTML = node.innerHTML;
		for (let i = innerHTML.length; i >= 0; i--) {
			const char = innerHTML.at(i);

			if (char === '<') i = innerHTML.indexOf('>', i);
			node.innerHTML = innerHTML.slice(0, i);
			await sleep(speed);
		}
		node.innerHTML = innerHTML;
	}

	async function write() {
		while (true) {
			let currentNode = nodes[nodeIndex];
			currentNode.classList.add('typing');
			await writeEffect(currentNode);
			await sleep(wait);
			await unwriteEffect(currentNode);
			currentNode.classList.remove('typing');
			nodeIndex = (nodeIndex + 1) % nodes.length;
		}
	}

	write();

	return {
		destroy() {},
	};
}
