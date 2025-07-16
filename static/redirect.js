// static/redirect.js
document.addEventListener("DOMContentLoaded", function () {
  // Fix links in Docusaurus
  document.querySelectorAll("a").forEach((link) => {
    if (link.href.startsWith(window.location.origin + "/")) {
      link.href = "/blogs" + new URL(link.href).pathname;
    }
  });
});
