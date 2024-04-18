(function ($) {
  "use strict";
  $(function () {
    $("#EEcall-to-action").load("./templates/EEcall-to-action.html");
  });
  $(function () {
    $("#EEwidget-sidebar").load("./templates/EEwidget-sidebar.html");
  });
  $(function () {
    $("#footer").load("./templates/footer.html");
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
      "./templates/EEpage-header.html",
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
      "./templates/header.html",
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
