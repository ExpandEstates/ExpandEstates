(function ($) {
  "use strict";
  $(function () {
    $("#EE-call-to-action").load("/theme/templates/EE-call-to-action.html");
  });
  $(function () {
    $("#EE-widget-sidebar").load("/theme/templates/EE-widget-sidebar.html");
  });
  $(function () {
    $("#EE-footer").load("/theme/templates/EE-footer.html");
  });

  // $("#EEHeader").load("header.html", function(responseTxt, statusTxt, xhr) {
  //   if (statusTxt == "success") {
  //     // Manipulate the loaded content directly
  //     $("#header1").addClass("active");
  //     console.log("Class added to #header1:", $("#header1").attr("class"));
  //   } else if (statusTxt == "error") {
  //     console.error("Error loading header.html:", xhr.status + ": " + xhr.statusText);
  //   }
  // });

  window.fetchAndManipulatePageHeaders = function (
    pageHeader,
    pageHeaderText,
    pageDirectory,
    pageDirectoryText
  ) {
    $("#EE-page-header").load(
      "/theme/templates/EE-page-header.html",
      function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
          // Manipulate the loaded content directly based on the 'page' parameter
          $("#" + pageHeader).text(pageHeaderText);
          $("#" + pageDirectory).text(pageDirectoryText);
        } else if (statusTxt == "error") {
          console.error(
            "Error loading header.html:",
            xhr.status + ": " + xhr.statusText
          );
        }
      }
    );
  };

  window.fetchAndManipulateHeaders = function (page) {
    $("#EE-headers").load(
      "/theme/templates/EE-header.html",
      function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
          // Manipulate the loaded content directly based on the 'page' parameter
          $("#" + page).addClass("active");
        } else if (statusTxt == "error") {
          console.error(
            "Error loading header.html:",
            xhr.status + ": " + xhr.statusText
          );
        }
      }
    );
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var toTopButton = document.querySelector(".to-contact-btn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  }
})(jQuery);
