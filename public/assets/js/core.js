/**
 * bootstrap-admin-template - Free Admin Template Based On Twitter Bootstrap 3.x
 * @version 2.4.2
 * @license MIT
 * @link https://github.com/puikinsh/Bootstrap-Admin-Template
 */
'use strict';

;(function (window) {
    var
    // Are we expecting a touch or a click?
    buttonPressedEvent = 'touchstart click',
        Metis = function Metis() {
        this.init();
    };

    // Initialization method
    Metis.prototype.init = function () {
        this.buttonPressedEvent = buttonPressedEvent;
    };

    Metis.prototype.getViewportHeight = function () {

        var docElement = document.documentElement,
            client = docElement.clientHeight,
            inner = window.innerHeight;

        if (client < inner) return inner;else return client;
    };

    Metis.prototype.getViewportWidth = function () {

        var docElement = document.documentElement,
            client = docElement.clientWidth,
            inner = window.innerWidth;

        if (client < inner) return inner;else return client;
    };

    // Creates a Metis object.
    window.Metis = new Metis();
})(window);
'use strict';

;(function ($) {
    "use strict";

    var $navBar = $('nav.navbar'),
        $body = $('body'),
        $menu = $('#menu'),
        $left = $('#left');

    function addPaddingTop(el, val) {
        el.css('padding-top', val);
    }
    function removePaddingTop(el) {
        el.css('padding-top', 'inherit');
    }
    function getHeight(el) {
        return el.outerHeight();
    }

    function init() {
        var isFixedNav = $navBar.hasClass('navbar-fixed-top');
        var bodyPadTop = isFixedNav ? $navBar.outerHeight(true) : 0;

        $body.css('padding-top', bodyPadTop);

        if ($body.hasClass('menu-affix')) {
            $left.css({
                top: bodyPadTop
            });
            console.log($navBar.outerHeight(true));
        }
    }

    Metis.navBar = function () {
        var resizeTimer;
        init();
        $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(init(), 250);
        });
    };
    return Metis;
})(jQuery);
'use strict';

;(function ($, Metis) {
  "use strict";
  // Define toggleFullScreen

  Metis.toggleFullScreen = function () {
    if (window.screenfull !== undefined && screenfull.enabled) {
      $('#toggleFullScreen').on(Metis.buttonPressedEvent, function (e) {
        screenfull.toggle(window.document[0]);
        $('body').toggleClass('fullScreen');
        e.preventDefault();
      });
    } else {
      $('#toggleFullScreen').addClass('hidden');
    }
  };
  // Define boxFullScreen
  Metis.boxFullScreen = function () {
    if (window.screenfull !== undefined && screenfull.enabled) {
      $('.full-box').on(Metis.buttonPressedEvent, function (e) {
        var $toggledPanel = $(this).parents('.box')[0];
        screenfull.toggle($toggledPanel);
        $(this).parents('.box').toggleClass('full-screen-box');
        $(this).parents('.box').children('.body').toggleClass('full-screen-box');
        $(this).children('i').toggleClass('fa-compress');
        e.preventDefault();
      });
    } else {
      $('.full-box').addClass('hidden');
    }
  };
  Metis.panelBodyCollapse = function () {
    var $collapseButton = $('.collapse-box'),
        $collapsedPanelBody = $collapseButton.closest('.box').children('.body');

    $collapsedPanelBody.collapse('show');

    $collapseButton.on(Metis.buttonPressedEvent, function (e) {
      var $collapsePanelBody = $(this).closest('.box').children('.body'),
          $toggleButtonImage = $(this).children('i');
      $collapsePanelBody.on('show.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-minus fa-plus').addClass('fa-spinner fa-spin');
      });
      $collapsePanelBody.on('shown.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-spinner fa-spin').addClass('fa-minus');
      });

      $collapsePanelBody.on('hide.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-minus fa-plus').addClass('fa-spinner fa-spin');
      });

      $collapsePanelBody.on('hidden.bs.collapse', function () {
        $toggleButtonImage.removeClass('fa-spinner fa-spin').addClass('fa-plus');
      });

      $collapsePanelBody.collapse('toggle');

      e.preventDefault();
    });
  };
  Metis.boxHiding = function () {
    $('.close-box').on(Metis.buttonPressedEvent, function () {
      $(this).closest('.box').hide('slow');
    });
  };
  return Metis;
})(jQuery, Metis || {});
'use strict';

;(function ($, Metis) {
    var $body = $('body'),
        $leftToggle = $('.toggle-left'),
        $count = 0;

    Metis.metisAnimatePanel = function () {

        if ($('#left').length) {
            $leftToggle.on(Metis.buttonPressedEvent, function (e) {

                if ($(window).width() < 768) {
                    $body.toggleClass('sidebar-left-opened');
                } else {
                    switch (true) {
                        case $body.hasClass("sidebar-left-hidden"):
                            $body.removeClass("sidebar-left-hidden sidebar-left-mini");
                            break;
                        case $body.hasClass("sidebar-left-mini"):
                            $body.removeClass("sidebar-left-mini").addClass("sidebar-left-hidden");
                            break;
                        default:
                            $body.addClass("sidebar-left-mini");
                    }

                    e.preventDefault();
                }
            });
        } else {
            $leftToggle.addClass('hidden');
        }
    };
    return Metis;
})(jQuery, Metis || {});
'use strict';

;(function ($) {
   $(document).ready(function () {

      $('[data-toggle="tooltip"]').tooltip();

      $('#menu').metisMenu();
      Metis.navBar();
      Metis.metisAnimatePanel();
      Metis.toggleFullScreen();
      Metis.boxFullScreen();
      Metis.panelBodyCollapse();
      Metis.boxHiding();
   });
})(jQuery);

//b-chain js code

var chainReportJson = [{ "hash": "22222", "from": "Citi", "to": "SOLAR CAPITAL LTD", "asset": "TSLA", "amount": 99, "timestamp": " 2017-11-10 08:09:04.423" },
    { "hash": "24434", "from": "UBS", "to": "SBAM NY (WTC)", "asset": "ATVI", "amount": 199, "timestamp": " 2017-11-11 01:20:04.423" },
    { "hash": "43523", "from": "JOHN HANCOCK FUNDS", "to": "ORBIS GROUP", "asset": "C", "amount": 299, "timestamp": " 2017-11-12 12:10:0.423" }];

var clientJson = [{ "clientName": "CITI ADMINISTRATION", "clientId": "AD000001", "clientType": "Admin", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912452", "Asset": ""},
    { "clientName": "THE GREENWALL FOUNDATION", "clientId": "20180001", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912975", "Asset": ""},
    { "clientName": "SOLAR CAPITAL LTD", "clientId": "20180002", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912325", "Asset": ""},
    { "clientName": "PFPC-DFA FUNDS-IRISH", "clientId": "20180003", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912345", "Asset": ""},
    { "clientName": "ORBIS GROUP", "clientId": "20180004", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912790", "Asset": ""},
    { "clientName": "JOHN HANCOCK FUNDS", "clientId": "20180005", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912964", "Asset": ""},
    { "clientName": "TARPON INSTITUTIONAL FIA", "clientId": "20180006", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912467", "Asset": ""},
    { "clientName": "UBS", "clientId": "20180007", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912702", "Asset": ""},
    { "clientName": "ACTIVA SICAV FUND", "clientId": "20180008", "clientType": "Regular", "clientStatus":"Active", "Currency": "EUR", "SkAccountNumber": "348912896", "Asset": ""},
    { "clientName": "SBAM NY (WTC)", "clientId": "20180009", "clientType": "Regular", "clientStatus":"Closed", "Currency": "USD", "SkAccountNumber": "348912704", "Asset": ""},
    { "clientName": "CREDIT Suisse", "clientId": "20180010", "clientType": "Regular", "clientStatus":"Active", "Currency": "USD", "SkAccountNumber": "348912860", "Asset": ""},
    { "clientName": "VOT-FI Roma Multi", "clientId": "20180011", "clientType": "Regular", "clientStatus":"Active", "Currency": "EUR", "SkAccountNumber": "348912235", "Asset": ""}];

var nodeJson = [{ "name": "peer0.org1.example.com", "id": "PR_00001", "status": "Active", "type": "Peer" },
    { "name": "peer0.org2.example.com", "id": "PR_00002", "status": "Active", "type": "Peer" },
    { "name": "peer0.org3.example.com", "id": "PR_00003", "status": "Active", "type": "Peer" },
    { "name": "peer0.org4.example.com", "id": "PR_00004", "status": "Active", "type": "Peer" },
    { "name": "peer0.org5.example.com", "id": "PR_00005", "status": "Active", "type": "Peer" },
    { "name": "peer0.org6.example.com", "id": "PR_00006", "status": "Closed", "type": "Peer" },
    { "name": "peer0.org7.example.com", "id": "PR_00007", "status": "Closed", "type": "Peer" },
    { "name": "hyperledger/fabric-orderer-01", "id": "OD_00001", "status": "Active", "type": "Order" },
    { "name": "hyperledger/fabric-orderer-02", "id": "OD_00002", "status": "Active", "type": "Order" },
    { "name": "hyperledger/fabric-orderer-03", "id": "OD_00003", "status": "Active", "type": "Order" }];

function generateHashString(len) {
    len = len || 64;
    var $chars = 'abcdef1234567890';
    var maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function getClientById(clientId){
    var result ={};
    if(clientJson.length >0){
        for(var i = 0; i<clientJson.length; i++){
            if(clientJson[i].clientId === clientId){
                result = clientJson[i];
            }
        }
    }
    return result;
}

function getClientIdList(){
    var result =[];
    if(clientJson.length >0){
        for(var i = 0; i<clientJson.length; i++){
            result.push(clientJson[i].clientId);
        }
    }
    return result;
}

function getNodeIdList(){
    var nodelist = JSON.parse(localStorage.getItem("NodeList"));//JSON.parse(str);
    var peerNodeList = nodelist.PeerNodes;
    var orderNodesList = nodelist.OrderNodes;
    var result =[];
    if(peerNodeList.length >0){
        for(var i = 0; i<peerNodeList.length; i++){
            result.push(peerNodeList[i].NodeID);
        }
    }
    if(orderNodesList.length >0){
        for(var j = 0; j<orderNodesList.length; j++){
            result.push(orderNodesList[j].NodeID);
        }
    }
    return result;
}

function getNodeNameList(){
    var nodelist = JSON.parse(localStorage.getItem("NodeList"));
    var peerNodeList = nodelist.PeerNodes;
    var orderNodesList = nodelist.OrderNodes;
    var result =[];
    if(peerNodeList.length >0){
        for(var i = 0; i<peerNodeList.length; i++){
            result.push(peerNodeList[i].NodeName);
        }
    }
    if(orderNodesList.length >0){
        for(var j = 0; j<orderNodesList.length; j++){
            result.push(orderNodesList[j].NodeName);
        }
    }
    return result;
}


function getChainReportItem(hash, from, to, asset, amount, timestamp) {
    //var hash = '449d677056d2a18657652d9eb39084e98e286849cebb1ddf32b6d3efae010a05';
    return "<div class='panel panel-default'><div class='panel-heading'><a>" + hash + "</a><div class='pull-right'> Timestamp: " + timestamp + " </div></div><div class='panel-body'>" + "" + from + "&emsp;<i class='fa fa-arrow-right' aria-hidden='true'></i>&emsp;"
        + to + "&emsp;" + "<div class='btn btn-danger pull-right'>" + amount + "&emsp;" + asset + "</div></div></div>";

}

function getTraderItem(trader) {
    return "<div class='panel panel-default'><div class='panel-heading'><a>" + trader.$class + "</a><div class='pull-right'> Timestamp: " + trader.tradeId + " </div></div><div class='panel-body'>" + "" + "&emsp;<i class='fa fa-arrow-right' aria-hidden='true'></i>&emsp;"
        + "" + "&emsp;" + "<div class='btn btn-danger pull-right'>" + trader.firstName + "&emsp;" + trader.lastName + "</div></div></div>";

}

//Node list functions
function getNodeRowItem(node, nodeType) {
    //return "<div class='panel panel-default'><div class='panel-heading'><a>" + trader.$class + "</a><div class='pull-right'> Timestamp: " + trader.tradeId + " </div></div><div class='panel-body'>" + "" + "&emsp;<i class='fa fa-arrow-right' aria-hidden='true'></i>&emsp;"
      //  + "" + "&emsp;" + "<div class='btn btn-danger pull-right'>" + trader.firstName + "&emsp;" + trader.lastName + "</div></div></div>";
    return "  <tr>\n" +
        "<td>" + node.name + "</td>\n" +
        "<td>" + node.id + "</td>\n" +
        "<td>" + node.status + "</td>\n" +
        "<td>" + node.type + "</td>\n" +
        "</tr>"
}

function getNodeAllRows(data){
    var html = "";

    // var peerNodeList = data.PeerNodes;
    // var orderNodesList = data.OrderNodes;
    if(data.length >0){
        for(var i = 0; i<data.length; i++){
            html += getNodeRowItem(data[i]);
        }
    }
    // if(peerNodeList.length >0){
    //     for(var i = 0; i<peerNodeList.length; i++){
    //         html += getNodeRowItem(peerNodeList[i], "Peer");
    //     }
    // }
    // if(orderNodesList.length >0){
    //     for(var j = 0; j<orderNodesList.length; j++){
    //         html += getNodeRowItem(orderNodesList[j], "Order");
    //     }
    // }

    return html;
}

function getNodeHeadItem() {
    return "<table id=\"dataTable\" class=\"table table-bordered table-condensed table-hover table-striped\">\n" +
        "<thead>\n" +
        "<tr>\n" +
        "<th>Name</th>\n" +
        "<th>ID</th>\n" +
        "<th>Status</th>\n" +
        "<th>Type</th>\n" +
        "</tr>\n" +
        "</thead>\n" +
        "<tbody>"
}

function getNodeTailItem() {
    return "</tbody></table>"
}

function nodeAndNetworkOnPageReady(){
    var $table = $('#collapse4_table');
    var html = getNodeHeadItem();
    //var nodelist = JSON.parse(localStorage.getItem("NodeList"));
    //var nodelist = nodeJson;
    html += getNodeAllRows(nodeJson);
    html += getNodeTailItem();
    $table.append(html);

      // $.ajax({
      //     url: "http://182.61.49.216:8081/getAllNodes",
      //     type:'get',
      //     dataType: 'json',
      //     jsonp: "callback",
      //     //data: data,
      //     success: function(result){
      //         html += getNodeAllRows(result);
      //         html += getNodeTailItem();
      //         $table.append(html);
      //     },
      // });

}

function submitTransactionOnPageReady(){
    var nodeIdList = getNodeNameList();//getNodeNameList
    var html = "";
    if(clientJson.length >0){ //clientName
        for(var i = 0; i<clientJson.length; i++){
            html += "<option value='" + clientJson[i].clientName + "'>" + clientJson[i].clientId + " - " + clientJson[i].clientName + "</option>";
        }
    }
    // for(var i=0;i<nodeIdList.length;i++){
    //     html += "<option>" + nodeIdList[i] + "</option>";
    // }

    $('#submitTrans_broker').append(html);
}


//data: JSON array of trader data
function updateTraderDataHtml(data){
    //$('#chainreportpnl')
    $('#chainreportpnl').empty();
    var html = "";
    if(data.length==0){
        html += "<h4>No data available.</h4>";
    }
    else {
        for(var i=0; i<data.length; i++){
            html += getTraderItem(data[i]);
        }
    }
    $('#chainreportpnl').append(html);
}

//get trade data
$(document).on('click','#btnGetTradeData',function(){
    $.ajax({
        url: "http://192.168.0.112:3000/api/Trader",
        type:'get',
        //data: data,
        success: function(result){
            updateTraderDataHtml(result);
        },
        //dataType: 'JSON'
    });
});

//submit new transaction
$(document).on('click', '#btnSubmitTransaction', function () {
    var broker = $('#submitTrans_broker').val();
    var asset = $('#submitTrans_asset').val();
    var amount = $('#submitTrans_amount').val();
    var timestamp = new Date();
    var data = JSON.parse(localStorage.getItem("chaindata"));
    if(!data){
        data = [];
    }
    var hash = generateHashString();
    data.push({ "hash": hash, "from": getCurrentUser().clientName, "to": broker, "asset": asset, "amount": amount, "timestamp": timestamp });
    localStorage.setItem("chaindata", JSON.stringify(data));
    bootbox.alert("<i class='fa fa-2x fa-check-circle-o' style='color:green'></i>&emsp;Transaction submitted successfully.", function () { });
    //alert("Transaction submitted successfully.");
});

function cacheNodeListOnLogin(){
    $.ajax({
        url: "http://182.61.49.216:8081/getAllNodes",
        type:'get',
        dataType: 'json',
        jsonp: "callback",
        success: function(result){
            localStorage.setItem("NodeList", JSON.stringify(result))
        },
    });
}

//submit new transaction
$(document).on('click', '#btnLoginSubmit', function (event) {
    event.preventDefault();
    //var nodeIdList = getNodeIdList();//getNodeIdList
    var nodeIdList = getClientIdList();
    var inputId = $('#txtLoginId').val();
    if($.inArray(inputId, nodeIdList) == -1){//not match
        bootbox.alert("<i class='fa fa-2x fa-times-circle' style='color:red'></i>&emsp;Invalid ID or Password. Please try again.", function () { });
        $('#txtLoginId').val("");
        $('#txtLoginPsw').val("");
        return false;
    }
    else{
        localStorage.setItem("loggedInClient", JSON.stringify(getClientById(inputId)));
        window.location = "dashboard.html";
    }

});

function dashboardOnReady(){
    var client = JSON.parse(localStorage.getItem("loggedInClient"));
    $('#clientnameheader').prepend(client.clientName);
    $('#clienttypetext').prepend(client.clientType + " Account");

    $('#db_clientId').prepend(client.clientId);
    $('#db_type').prepend(client.clientType);
    $('#db_status').prepend(client.clientStatus);
    $('#db_currency').prepend(client.Currency);
    $('#db_skaccount').prepend(client.SkAccountNumber);
}

function getCurrentUser(){
    return JSON.parse(localStorage.getItem("loggedInClient"));
}

function getAssetTableHtml(){
    var html = "<div class=\"body\">\n" +
        "                                                        <table class=\"table table-condensed table-hovered sortableTable tablesorter tablesorter-default\" role=\"grid\">\n" +
        "                                                            <thead>\n" +
        "                                                            <tr role=\"row\" class=\"tablesorter-headerRow\">\n" +
        "                                                                <th data-column=\"0\" class=\"tablesorter-header tablesorter-headerUnSorted\" tabindex=\"0\" scope=\"col\" role=\"columnheader\" aria-disabled=\"false\" unselectable=\"on\" aria-sort=\"none\" aria-label=\"Country\n" +
        "\n" +
        "                          : No sort applied, activate to apply an ascending sort\" style=\"user-select: none;\"><div class=\"tablesorter-header-inner\">Name\n" +
        "                                                                    <i class=\"fa sort\"></i>\n" +
        "                                                                </div></th>\n" +
        "                                                                <th data-column=\"1\" class=\"tablesorter-header tablesorter-headerUnSorted\" tabindex=\"0\" scope=\"col\" role=\"columnheader\" aria-disabled=\"false\" unselectable=\"on\" aria-sort=\"none\" aria-label=\"Visit\n" +
        "\n" +
        "                          : No sort applied, activate to apply an ascending sort\" style=\"user-select: none;\"><div class=\"tablesorter-header-inner\">Quantity\n" +
        "                                                                    <i class=\"fa sort\"></i>\n" +
        "                                                                </div></th>\n" +
        "\n" +
        "                                                            </tr>\n" +
        "                                                            </thead>\n" +
        "                                                            <tbody aria-live=\"polite\" aria-relevant=\"all\">";
}

function initAccountDisplay(){
    var client = JSON.parse(localStorage.getItem("loggedInClient"));
    $('h5.media-heading').append(client.clientName);
    $('#left-status a').append(client.clientType + " Account");
    $('#left-lastaccess').append(new Date().toDateString());
    if(client.clientType == "Regular"){
        $('#portrait').attr("src", "assets/img/user_regular.png")
        $('.admin-only').hide();
    }
    if(client.clientType == "Admin"){

    }

}
