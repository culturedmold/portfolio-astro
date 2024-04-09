function setActiveNavigationLink() {
    document.querySelectorAll(".navigation-link").forEach((link: HTMLAnchorElement) => {

        console.log(window.location.href);
  
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
  
      });
}