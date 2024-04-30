"use strict";

const sass = require("gulp-sass")(require("sass"));
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const rimraf = require("rimraf");
const comments = require("gulp-header-comment");
const mail = require("gulp-mail");

var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");
const fs = require("fs");

var app = express();
var server = http.Server(app);
var port = 500;
app.use(express.static("./theme/"));

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send_email", function (req, res) {
  console.log("Im here");
  var name = req.body.name;
  var userEmail = req.body.userEmail;
  console.log("from" + userEmail);
  var to = req.body.to;
  var subject = req.body.subject;
  var message = req.body.message;
  var phoneNbr = req.body.phoneNbr;

  const replacements = {
    "{{name}}": name,
    "{{userEmail}}": userEmail,
    "{{message}}": message,
    "{{phoneNbr}}": phoneNbr,
  };

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "expandestates@gmail.com",
      pass: "cazl hvkj culg uzko",
    },
  });

  var emailConfirmation = {
    from: "expandestates@gmail.com",
    to: userEmail,
    subject: subject,
    html: "asdfs",
  };
  transporter.sendMail(emailConfirmation, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Send: " + info.response);
    }
    res.redirect("Thank-You.html");
  });

  // fs.readFile("/email-confirmation.html", "utf8", (err, htmlContent) => {
  //   Object.entries(replacements).forEach(([placeholder, value]) => {
  //     htmlContent = htmlContent.replace(new RegExp(placeholder, "g"), value);
  //   });
  //   var emailConfirmation = {
  //     from: "expandestates@gmail.com",
  //     to: userEmail,
  //     subject: "Thank You and Anticipating Further Communication",
  //     html: htmlContent,
  //   };
  //   transporter.sendMail(emailConfirmation, function (error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Email Send: " + info.response);
  //     }
  //     res.redirect("/main/thank-you.html");
  //   });
  // });
  // fs.readFile("/email-confirmation-team.html", "utf8", (err, htmlContent) => {
  //   Object.entries(replacements).forEach(([placeholder, value]) => {
  //     htmlContent = htmlContent.replace(new RegExp(placeholder, "g"), value);
  //   });
  //   var mailOptions = {
  //     from: userEmail,
  //     to: "expandestates@gmail.com",
  //     subject: subject,
  //     html: htmlContent,
  //   };
  //   transporter.sendMail(mailOptions);
  // });
});

server.listen(port, function () {
  console.log("Starting Server on port: " + port);
});

var path = {
  src: {
    html: "source/*.html",
    others: "source/*.+(php|ico|png)",
    htminc: "source/partials/**/*.htm",
    incdir: "source/partials/",
    plugins: "source/plugins/**/*.*",
    js: "source/js/*.js",
    scss: "source/scss/**/*.scss",
    images: "source/images/**/*.+(png|jpg|gif|svg)",
    templates: "source/templates/",
    pages: "source/pages/",
  },
  build: {
    dirBuild: "theme/",
    dirDev: "theme/",
  },
};

gulp.task("pages:build", function () {
  return gulp
    .src(path.src.pages + "*.html")
    .pipe(
      fileinclude({
        basepath: path.src.pages,
      })
    )
    .pipe(
      comments(`
    WEBSITE: https://themefisher.com
    TWITTER: https://twitter.com/themefisher
    FACEBOOK: https://www.facebook.com/themefisher
    GITHUB: https://github.com/themefisher/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev + "pages/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

gulp.task("templates:build", function () {
  return gulp
    .src(path.src.templates + "*.html")
    .pipe(
      fileinclude({
        basepath: path.src.templates,
      })
    )
    .pipe(
      comments(`
    WEBSITE: https://themefisher.com
    TWITTER: https://twitter.com/themefisher
    FACEBOOK: https://www.facebook.com/themefisher
    GITHUB: https://github.com/themefisher/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev + "templates/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// HTML
gulp.task("html:build", function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        basepath: path.src.incdir,
      })
    )
    .pipe(
      comments(`
    WEBSITE: https://themefisher.com
    TWITTER: https://twitter.com/themefisher
    FACEBOOK: https://www.facebook.com/themefisher
    GITHUB: https://github.com/themefisher/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// SCSS
gulp.task("scss:build", function () {
  return gulp
    .src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("/"))
    .pipe(
      comments(`
    WEBSITE: https://themefisher.com
    TWITTER: https://twitter.com/themefisher
    FACEBOOK: https://www.facebook.com/themefisher
    GITHUB: https://github.com/themefisher/
    `)
    )
    .pipe(gulp.dest(path.build.dirDev + "css/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Javascript
gulp.task("js:build", function () {
  return gulp
    .src(path.src.js)
    .pipe(
      comments(`
  WEBSITE: https://themefisher.com
  TWITTER: https://twitter.com/themefisher
  FACEBOOK: https://www.facebook.com/themefisher
  GITHUB: https://github.com/themefisher/
  `)
    )
    .pipe(gulp.dest(path.build.dirDev + "js/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Images
gulp.task("images:build", function () {
  return gulp
    .src(path.src.images)
    .pipe(gulp.dest(path.build.dirDev + "images/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Plugins
gulp.task("plugins:build", function () {
  return gulp
    .src(path.src.plugins)
    .pipe(gulp.dest(path.build.dirDev + "plugins/"))
    .pipe(
      bs.reload({
        stream: true,
      })
    );
});

// Other files like favicon, php, sourcele-icon on root directory
gulp.task("others:build", function () {
  return gulp.src(path.src.others).pipe(gulp.dest(path.build.dirDev));
});

// Clean Build Folder
gulp.task("clean", function (cb) {
  rimraf("./theme", cb);
});

// Watch Task
gulp.task("watch:build", function () {
  gulp.watch(path.src.html, gulp.series("html:build"));
  gulp.watch(path.src.htminc, gulp.series("html:build"));
  gulp.watch(path.src.scss, gulp.series("scss:build"));
  gulp.watch(path.src.js, gulp.series("js:build"));
  gulp.watch(path.src.images, gulp.series("images:build"));
  gulp.watch(path.src.plugins, gulp.series("plugins:build"));
  gulp.watch(path.src.templates, gulp.series("templates:build"));
  gulp.watch(path.src.pages, gulp.series("pages:build"));
});

// Dev Task
gulp.task(
  "default",
  gulp.series(
    "clean",
    "html:build",
    "js:build",
    "scss:build",
    "images:build",
    "plugins:build",
    "others:build",
    "templates:build",
    "pages:build"
    // gulp.parallel("watch:build", function () {
    //   bs.init({
    //     server: {
    //       baseDir: path.build.dirDev,
    //     },
    //   });
    // })
  )
);

// Build Task
gulp.task(
  "build",
  gulp.series(
    "html:build",
    "js:build",
    "scss:build",
    "images:build",
    "plugins:build"
  )
);
