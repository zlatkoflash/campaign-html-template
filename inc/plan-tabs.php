<!-- New plan Template -->
<h1 class="page-title">New Plan</h1>

<ul class="breadcrumb">
    <li><a href="#">Home</a> <span class="divider">/</span></li>
    <li><a href="#">Plans</a> <span class="divider">/</span></li>
    <li class="active">New</li>
</ul>
<div class="clearfix"></div>
<ul id="top-tabs-inner" class="nav nav-tabs">
    <li class="active"><a href="#list-plans-tab" data-toggle="tab"><span class="list-tab-icon"></span>List</a></li>
    <li><a href="#add-new-plan-tab" data-toggle="tab"><span class="addnew-tab-icon"></span>Add new</a></li>
</ul>
<div class="tab-content">
    <!-- List Plans -->
    <div class="tab-pane active in fade" id="list-plans-tab">
        <?php include('inc/list-plans-tab.php'); ?>
    </div>
    <!-- Add New Plan -->
    <div class="tab-pane in fade" id="add-new-plan-tab">
        <?php include('inc/new-plan-tab.php'); ?>
    </div>
</div>
