const filterList = document.querySelector(".filter-list"),
	cards = document.querySelectorAll(".example-list__item");
filterButtons = document.querySelectorAll(".filter-list__button");

function filtering() {
	filterList.addEventListener("click", event => {
		const targetType = event.target.dataset.type;
		const target = event.target;

		if (target.classList.contains("filter-list__button")) {
			filterButtons.forEach(lisyItem => lisyItem.classList.remove("filter-list__button--active"));
			target.classList.add("filter-list__button--active");
		}

		switch (targetType) {
			case "all":
				getItems("example-list__item");
				break;

			case "web-site":
				getItems(targetType);
				break;

			case "app":
				getItems(targetType);
				break;

			case "design":
				getItems(targetType);
				break;

			case "marketing":
				getItems(targetType);
				break;
		}
	});
}
filtering();

function getItems(className) {
	cards.forEach(item => {
		if (item.classList.contains(className)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
