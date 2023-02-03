var sections = document.querySelectorAll('section');

onscroll = function () {
  var scrollPosition = this.document.documentElement.scrollTop;

  sections.forEach(section => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    )
      var currentId = section.attributes.id.value;
    removeActiveAllClass();
    addActiveClass(currentId);
  });
};

var removeActiveAllClass = function () {
  document.querySelectorAll('nav div ul li a').forEach(el => {
    el.classList.remove('active');
  });
};

var addActiveClass = function (id) {
  var selector = "nav div ul li a [href='#" + id + "']";
  console.log(selector, id);
  document.querySelector(selector).classList.add('active');
};
