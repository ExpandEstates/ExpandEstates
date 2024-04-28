// (function ($) {
//   document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.hostname === "localhost") {
//       console.log("gello");
//       console.log(document.querySelectorAll("href"));
//       document.querySelectorAll("a[href]").forEach(function (anchor) {
//         console.log(anchor);
//         var href = anchor.getAttribute("href");
//         anchor.setAttribute("href", "/ExpandEstates" + href);
//       });
//     }
//   });
// })(jQuery);

// (function ($) {
//   document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.hostname === "localhost") {
//       console.log("hello");
//       var navLinks = document.querySelectorAll(".nav-link");
//       console.log(navLinks);
//       for (var i = 0; i < navLinks.length; i++) {
//         console.log("Loop iteration:", i);
//         var href = navLinks[i].getAttribute("href");
//         navLinks[i].setAttribute("href", "/ExpandEstates" + href);
//         console.log(navLinks[i]);
//       }
//     }
//   });
// })(jQuery);

// (function ($) {
//   window.addEventListener("load", function () {
//     if (window.location.hostname === "localhost") {
//       console.log("hello");
//       console.log(document.querySelectorAll("a[href]")); // Initial set of elements

//       // Function to update href attributes
//       function updateHrefAttributes() {
//         document.querySelectorAll("a[href]").forEach(function (anchor) {
//           var href = anchor.getAttribute("href");
//           anchor.setAttribute("href", "/ExpandEstates" + href);
//         });
//       }

//       // Initial update
//       updateHrefAttributes();

//       // Periodically check for new elements and update href attributes
//     }
//   });
// })(jQuery);
