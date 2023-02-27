<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Basic Page Needs
    ================================================== -->
    <meta charset="utf-8" />
    <!--[if IE]><meta http-equiv="x-ua-compatible" content="IE=9" /><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Spirit8 - Digital Agency One Page Template</title>
    <meta
      name="description"
      content="Spirit8 is a Digital agency one page template built based on bootstrap framework. This template is design by Robert Berki and coded by Jenn Pereira. It is simple, mobile responsive, perfect for portfolio and agency websites. Get this for free exclusively at ThemeForces.com"
    />
    <meta
      name="keywords"
      content="bootstrap theme, portfolio template, digital agency, onepage, mobile responsive, spirit8, free website, free theme, themeforces themes, themeforces wordpress themes, themeforces bootstrap theme"
    />
    <meta name="author" content="ThemeForces.com" />

    <!-- Favicons
    ================================================== -->
    <link
      rel="shortcut icon"
      href="{{baseURL}}/new/img/favicon.ico"
      type="image/x-icon"
    />
    <link
      rel="apple-touch-icon"
      href="{{baseURL}}/new/img/apple-touch-icon.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="{{baseURL}}/new/img/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="{{baseURL}}/new/img/apple-touch-icon-114x114.png"
    />

    <!-- Bootstrap -->
    <link
      rel="stylesheet"
      type="text/css"
      href="{{baseURL}}/new/css/bootstrap.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="{{baseURL}}/new/fonts/font-awesome/css/font-awesome.css"
    />

    <!-- Slider
    ================================================== -->
    <link
      href="{{baseURL}}/new/css/owl.carousel.css"
      rel="stylesheet"
      media="screen"
    />
    <link
      href="{{baseURL}}/new/css/owl.theme.css"
      rel="stylesheet"
      media="screen"
    />

    <!-- Stylesheet
    ================================================== -->
    <link
      rel="stylesheet"
      type="text/css"
      href="{{baseURL}}/new/css/style.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="{{baseURL}}/new/css/responsive.css"
    />

    <link
      href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,700,300,600,800,400"
      rel="stylesheet"
      type="text/css"
    />
  <style>
    .navbar-header{
      margin-left: -80px;
    }

    .section-title > h5{
      padding: 7px 0;
      color: #1f6a3f;
    }

    .section-title > h4{
      text-align: center;
      color: #1f6a3f;
    }

    .section-title > h3{
      font-size: 30px;
      text-align: center;
      color: #1f6a3f;
    }

    #dasar-hukum{
      font-size: 16px;
      margin: 30px 61px 
    }

    section{
      padding: 5px 0 50px;
    }

    #air-limbah{
      margin: 0 230px;
    }

    #pasal-hukum{
      text-align: center;
    }

    #footer{
      text-align: center;
    }
    #the-canvas {
      border: 1px solid black;
      direction: ltr;
    }
  </style>

    <script
      type="text/javascript"
      src="{{baseURL}}/new/js/modernizr.custom.js"
    ></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    {% include "users/layout/navbar.php" %}
    {% block content %} {% endblock %}

    {% include "users/modal/modal.html"%}

    {% include "users/layout/footer.php" %}
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script
      type="text/javascript"
      src="{{baseURL}}/new/js/jquery.1.11.1.js"
    ></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script
      type="text/javascript"
      src="{{baseURL}}/new/js/bootstrap.js"
    ></script>
    <script
      type="text/javascript"
      src="{{baseURL}}/new/js/SmoothScroll.js"
    ></script>
    <script
      type="text/javascript"
      src="{{baseURL}}/new/js/jquery.isotope.js"
    ></script>

    <script src="{{baseURL}}/new/js/owl.carousel.js"></script>
    <!-- Javascripts
    ================================================== -->
    <script type="text/javascript" src="{{baseURL}}/new/js/main.js"></script>
    </script>
  </body>
</html>