
// Add interactivity to service cards: toggle details on click
document.addEventListener('DOMContentLoaded', function () {
	const cards = document.querySelectorAll('.service-card');
	cards.forEach((card, idx) => {
		// Create a details element for each card
		let details = document.createElement('div');
		details.className = 'service-details';
		details.style.display = 'none';
		if (idx === 0) {
			details.textContent = 'Our Cybertruck-based mobile power station can supply up to 11kW for events, construction, and more. Includes multiple outlets and on-site support.';
		} else if (idx === 1) {
			details.textContent = 'We provide rapid EV charging and power delivery for emergencies, camping, or remote locations. 24/7 dispatch available.';
		} else if (idx === 2) {
			details.textContent = 'Custom power solutions: from off-grid setups to unique event requirements. Contact us to discuss your project.';
		}
		card.appendChild(details);

		card.addEventListener('click', function (e) {
			// Prevent link click from toggling
			if (e.target.classList.contains('learn-more')) {
				e.preventDefault();
			}
			details.style.display = details.style.display === 'none' ? 'block' : 'none';
			card.classList.toggle('expanded');
		});
	});
});
