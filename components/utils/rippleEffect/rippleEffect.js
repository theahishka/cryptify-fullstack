export default function rippleEffect(event) {
	const button = event.target;

	const circle = document.createElement("span");

	const btnRect = button.getBoundingClientRect();

	const diameter = Math.max(btnRect.width, btnRect.height);
	const radius = diameter / 2;
	circle.style.width = `${diameter}px`;
	circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - (btnRect.left + radius)}px`;
	circle.style.top = `${event.clientY - (btnRect.top + radius)}px`;
	circle.classList.add("ripple");

	circle.style.position = "absolute";
	circle.style.borderRadius = "50%";
	circle.style.transform = "scale(0)";
	circle.style.animationName = "ripple";
	circle.style.animationDuration = "0.6s";
	circle.style.animationTimingFunction = "linear";

	circle.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
	circle.style.pointerEvents = "none";

	const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) {
		ripple.remove();
	}

	button.appendChild(circle);
}
