window.addEventListener('DOMContentLoaded', setup)

    function setup() {
      document.querySelector('button#dropdown-nav').addEventListener('click', toggleDropDown)
      document.querySelector('button#back-btn').addEventListener('click', closeDropDown)
      let isDropDownOpen = false;
      let isDropDownClosed = false;

      function toggleDropDown() {
        isDropDownOpen = !isDropDownOpen;
        document.body.classList.toggle('dropdown-open', isDropDownOpen);
      }

      function closeDropDown() {
        isDropDownClosed = !isDropDownClosed;
        document.body.classList.toggle('dropdown-open', isDropDownClosed);
      }
    }