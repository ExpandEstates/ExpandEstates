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

  window.manipulatePageHeaders = function (
    pageHeader,
    pageHeaderText,
    pageDirectory,
    pageDirectoryText
  ) {
    $("#EE-page-header").load(
      "/theme/templates/EE-page-header.html",
      function (responseTxt, statusTxt, xhr) {
        var ref = $(this);
        ref.find("#" + pageHeader).text(pageHeaderText);
        ref.find("#" + pageDirectory).text(pageDirectoryText);
      }
    );
  };

  window.manipulateNavHeaders = function (page) {
    $("#EE-headers").load(
      "/theme/templates/EE-header.html",
      function (responseTxt, statusTxt, xhr) {
        var refPage = $(this);
        refPage.find("#" + page).addClass("active");
      }
    );
  };

  window.manipulateFAQCard = function (cardId, question, answer) {
    $("#EE-faq-card-" + cardId).load(
      "/theme/templates/EE-faq-card.html",
      function (responseTxt, statusTxt, xhr) {
        var faqCard = $(this);
        faqCard.find(".card-header").attr("id", "header-" + cardId);
        faqCard.find(".collapse").attr("id", "collapse-" + cardId);
        faqCard.find(".btn").attr("data-target", "#" + "collapse-" + cardId);
        faqCard.find(".btn").attr("aria-controls", "collapse-" + cardId);
        faqCard.find(".collapse").attr("aria-labelledby", "header-" + cardId);
        faqCard.find(".btn").text(question);
        faqCard.find(".card-body").text(answer);
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
