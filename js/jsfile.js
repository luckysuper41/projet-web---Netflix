const questionItems = document.querySelectorAll('.question-bottom-top-item');
const questionContentItems = document.querySelectorAll('.question-bottom-bottom-item');

// Select tab content item
function selectItem() {
	// Remove all show and border classes
	//removeBorder();
	removeShow();
	// Add border to current tab item
	//this.classList.add('tab-border');
	// Grab content item from DOM
	const questionContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	questionContentItem.classList.add('show');
}

/*
// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}*/

// Remove show class from all content items
function removeShow() {
	questionContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for question item click
questionItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

// Listen for question item click
questionItems.forEach(item => {
	item.addEventListener('mouseenter', removeShow);
});
// Listen for question item click
questionItems.forEach(item => {
	item.addEventListener('dblclick', removeShow);
});
