<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="bootstrap/css/datepicker.css" />
        <link rel="stylesheet" type="text/css" href="bootstrap/css/jquery.mCustomScrollbar.css" >
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="bootstrap/js/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
        <script type="text/javascript" src="js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script type="text/javascript" src="js/tools.js"></script>
        <!--[if lt IE 9]>
          <script src="js/html5.js" type="text/javascript"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container-fluid">
            <div class="row-fluid">
                <!-- Header -->
                <div class="span12">
                    <header id="top-header" class="span12">
                        <div class="logo"><a href="#">ZenClerk</a></div>
                        <ul>
                            <li><a href="#">Home</a></li>
                        </ul>
                    </header>
                </div>
                <!-- Left fixed column -->
                <aside class="fixed-column">
                    <nav class="left-nav">
                        <ul>
                            <li><a href="#" class="nav-chat">Chat</a></li>
                            <li><a href="#" class="nav-stats">Stats</a></li>
                            <li><a href="#" class="nav-settings">Settings</a></li>
                        </ul>
                    </nav>
                </aside>
                <!-- Main Content wrapper -->
                <div id="content-wrap">
                    <!-- Left inner column -->
                    <aside id="left-inner-column">
                        <!-- main navigation -->
                        <nav id="main-navigation">
                            <h3>Navigation</h3>
                            <ul>
                                <li class="active-page"><a href="index.php">Campaigns</a></li>
                                <li><a href="plans.php">Plans</a></li>
                                <li><a href="campaigns-ui.php">Campaigns UIs</a></li>
                            </ul>
                        </nav>
                    </aside>

                    <!-- Right main inner column -->
                    <div id="main-inner-column">
                        <?php include('inc/campaigns-tabs.php'); ?>
                    </div>
                </div>
                <!-- footer -->
                <footer id="f-bottom"> </footer>
            </div><!-- row-fluid end -->
        </div>
    </body>
</html>
