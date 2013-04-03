<!-- New plan Template -->
<h1 class="page-title">Edit Plan 'Winter Plan5'</h1>

<ul class="breadcrumb">
    <li><a href="#">Home</a> <span class="divider">/</span></li>
    <li><a href="#">Plans</a> <span class="divider">/</span></li>
    <li class="active">New</li>
</ul>
<div class="clearfix"></div>
<ul id="top-tabs-inner" class="nav nav-tabs">
    <li class="active"><a href="#list-campagin-uis-tab" data-toggle="tab"><span class="list-tab-icon"></span>List</a></li>
    <li><a href="#list-campagin-uis-edit-tab" data-toggle="tab"><span class="edit-tab-icon"></span>Edit</a></li>
    <li><a href="#add-campagin-uis-tab" data-toggle="tab"><span class="addnew-tab-icon"></span>Add new</a></li>
</ul>
<div class="tab-content">
    <!-- List Campaigns uis -->
    <div class="tab-pane active in fade" id="list-campagin-uis-tab">
        <?php include('inc/list-campaigns-uis.php'); ?>
    </div>
    <!-- Edit Campaigns uis -->
    <div class="tab-pane in fade" id="list-campagin-uis-edit-tab">
        <?php include('inc/list-campaigns-uis-edit.php'); ?>
    </div>
    <!-- Add New campaign uis -->
    <div class="tab-pane in fade" id="add-campagin-uis-tab">
        <?php include('inc/campaign-edit-plan-design-tab.php'); ?>
    </div>
</div>
