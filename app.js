document.addEventListener("mousemove", event => {
	const x = event.pageX;
	const y = event.pageY;

	document.querySelectorAll("div").forEach(div => {
		// How far the cursor is from each div

		const dX = div.offsetLeft + 50 - x; // div from the left side + size compensation - cursor position
		const dY = div.offsetTop + 50 - y; //div from the top side + size compensation - cursor position

		const dist = Math.sqrt(dX * dX + dY * dY); //a** + b** = c**

		const score = Math.exp(dist * -0.003); //scoring system based on system to support scaling type 0-1

		// div.innerHTML = score.toFixed(2);

		div.style.transform = `scale(${score})`;
		div.style.fontWeight = 100 + 100 * Math.round(8 * score);
	});
});