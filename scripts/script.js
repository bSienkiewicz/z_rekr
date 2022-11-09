extendBreadcrumb = function () {
  const urlArray = window.location.href.split("/");
  const url = urlArray.slice(3);
  if (url[0] === "") {
    url[0] = "Home";
  } else if (url[0] != "Home") {
    url.unshift("Home");
  }
  const breadcrumb = document.getElementById("Breadcrumb-list");

  for (var i = 0; i < url.length; i++) {
    // Create a new list item and anchor tag for each url
    var li = document.createElement("li");
    li.className = "breadcrumb-item";

    if (i < url.length - 1) {
      // If not the last item in the url, create an anchor tag
      var a = document.createElement("a");
      if (i === 0) {
        // If first item in the url, link to the home page
        a.href = "/";
      } else {
        // Otherwise, link to clicked url
        a.href = "/" + url.slice(1, i + 1).join("/");
      }
      // Set the text of the anchor tag to the current url
      a.innerHTML = url[i].charAt(0).toUpperCase() + url[i].slice(1);
      li.appendChild(a);
    } else {
      // If last item in the url, remove file extension and don't create an anchor tag
      if (url[i].search(".html") > -1) {
        url[i] = url[i].replace(".html", "");
      }
      li.innerHTML = url[i].charAt(0).toUpperCase() + url[i].slice(1);
    }
    // Append list item to breadcrumb
    breadcrumb.appendChild(li);
  }
};

extendBreadcrumb();
