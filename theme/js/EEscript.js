/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  "use strict";
  $(function () {
    $("#EEcall-to-action").load("/theme/templates/EEcall-to-action.html");
  });
  $(function () {
    $("#EEwidget-sidebar").load("/theme/templates/EEwidget-sidebar.html");
  });
  $(function () {
    $("#footer").load("/theme/templates/footer.html");
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
    $("#EEpage-header").load(
      "/theme/templates/EEpage-header.html",
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
    $("#EEHeaders").load(
      "/theme/templates/header.html",
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
})(jQuery);
