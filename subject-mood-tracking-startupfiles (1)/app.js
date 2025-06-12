let modal = document.getElementById("modal");
let logMood = document.getElementById("log-mood");

logMood.addEventListener("click", () => {
	modal.setAttribute("style", "position: absolute;");
	modal.innerHTML = `<form class="log-form">
	      <button class="btn text" type="button" style="align-self: flex-end;">
	        <img src="assets/close.svg" alt="close">
	      </button>
	      <h2 class="text-preset-2">Log your mood</h2>
	      <h3 class="text-preset-3">How was your mood today ?</h3>
	      <label>
	        <input type="radio" name="mood" value="very-happy">
	        <h5 class="text-preset-5">Very Happy</h5>
	      </label>
	      <label>
	        <input type="radio" name="mood" value="happy">
	        <h5 class="text-preset-5">Happy</h5>
	      </label>
	      <label>
	        <input type="radio" name="mood" value="neutral">
	        <h5 class="text-preset-5">Neutral</h5>
	      </label>
	      <label>
	        <input type="radio" name="mood" value="sad">
	        <h5 class="text-preset-5">Sad</h5>
	      </label>
	      <label>
	        <input type="radio" name="mood" value="very-sad">
	        <h5 class="text-preset-5">Very Sad</h5>
	      </label>
	      <button class="btn block blue-600 neutral-o-text" type="submit">
	        <h4  class="text-preset-4">Log Mood</h4>
	      </button>
	    </form>`;
});
