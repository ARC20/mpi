function shownavFunction() {

const selectElement = (element) => document.querySelector(element);

	selectElement('#banner').classList.toggle('shownav');
	selectElement('#banner-curtain').classList.toggle('shownav');

selectElement('#banner-curtain').addEventListener('click', () => {
	selectElement('#banner').classList.remove('shownav');
	selectElement('#banner-curtain').classList.remove('shownav');

});
};

function closenavFunction() {
const selectElement = (element) => document.querySelector(element);

	selectElement('#banner').classList.remove('shownav');
	selectElement('#banner-curtain').classList.remove('shownav');
};

window.onscroll = function() {xFunction()};
function xFunction() {

  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    selectElement('#banner').classList.remove('shownav');
	selectElement('#banner-curtain').classList.remove('shownav');
  }
};
