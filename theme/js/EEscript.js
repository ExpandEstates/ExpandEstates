/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  "use strict";
  $(function () {
    $("#EE-call-to-action").load(
      window.location.hostname === "expandestates.github.io"
        ? "/ExpandEstates/main/templates/EE-call-to-action.html"
        : "/main/templates/EE-call-to-action.html"
    );
  });
  $(function () {
    $("#EE-widget-sidebar").load(
      window.location.hostname === "expandestates.github.io"
        ? "/ExpandEstates/main/templates/EE-widget-sidebar.html"
        : "templates/EE-widget-sidebar.html"
    );
  });
  $(function () {
    $("#EE-footer").load(
      window.location.hostname === "expandestates.github.io"
        ? "/ExpandEstates/main/templates/EE-footer.html"
        : "/main/templates/EE-footer.html"
    );
  });

  window.manipulatePageHeaders = function (
    pageHeader,
    pageHeaderText,
    pageDirectory,
    pageDirectoryText
  ) {
    $("#EE-page-header").load(
      window.location.hostname === "expandestates.github.io"
        ? "/ExpandEstates/main/templates/EE-page-header.html"
        : "templates/EE-page-header.html",
      function (responseTxt, statusTxt, xhr) {
        var ref = $(this);
        ref.find("#" + pageHeader).text(pageHeaderText);
        ref.find("#" + pageDirectory).text(pageDirectoryText);
      }
    );
  };

  window.manipulateNavHeaders = function (page, context) {
    var templatePath = ""; // Define the default template path

    // Determine the template path based on the context
    switch (context) {
      case "rootDir":
        templatePath = "./main/templates/EE-header.html";
        break;
      case "mainDir":
        templatePath = "./templates/EE-header.html";
        break;
      case "pagesDir":
        templatePath = "../templates/EE-header.html";
        break;
      // Add more cases for different contexts if needed
      default:
        templatePath = "/main/templates/default-header.html"; // Default template path
    }

    // Load the header using the determined template path
    $("#EE-headers").load(templatePath, function (responseTxt, statusTxt, xhr) {
      var refPage = $(this);
      refPage.find("#" + page).addClass("active");
      if (window.location.hostname === "expandestates.github.io") {
        document.querySelectorAll("a[href]").forEach(function (anchor) {
          var href = anchor.getAttribute("href");
          anchor.setAttribute("href", "/ExpandEstates" + href);
        });
      }
    });
  };

  window.manipulateFAQCard = function (cardId, question, answer) {
    $("#EE-faq-card-" + cardId).load(
      "templates/EE-faq-card.html",
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

  window.manipulateWidgetPostContent = function (
    cardId,
    postTitle,
    postDate,
    newImgSrc,
    newHrefSrc
  ) {
    $("#EE-widget-post-content-" + cardId).load(
      window.location.hostname === "expandestates.github.io"
        ? "/ExpandEstates/main/templates/EE-widget-post-content.html"
        : "templates/EE-widget-post-content.html",
      function (responseTxt, statusTxt, xhr) {
        var faqCard = $(this);
        faqCard.find("img").attr("src", newImgSrc);
        faqCard.find("a").attr("href", newHrefSrc);
        faqCard.find("h5").text(postTitle);
        faqCard.find("h6").text(postDate);
      }
    );
  };

  window.generatePostContent = function (
    cardId,
    postTitle,
    postDate,
    newImgSrc,
    newHrefSrc
  ) {
    // Create div element for FAQ card
    const cardDiv = `<div id="EE-widget-post-content-${cardId}"></div>`;
    $("#EE-post-container").append(cardDiv);

    const script = document.createElement("script");
    script.textContent = `
      $(function () {
        manipulateWidgetPostContent("${cardId}","${postTitle}", "${postDate}", "${newImgSrc}", "${newHrefSrc}");
      });
      `;
    document.body.appendChild(script);
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
