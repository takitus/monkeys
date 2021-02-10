// ==UserScript==
// @name         Natchezz List Sort
// @namespace    http://takitus.net/
// @version      0.1
// @downloadURL  https://github.com/takitus/monkeys/raw/main/natchezz/natchezzsort.user.js
// @updateURL    https://github.com/takitus/monkeys/raw/main/natchezz/natchezzsort.user.js
// @description  Displays only in stock items when choosing the 'show all' count on the page
// @author       takitus
// @match        https://www.natchezss.com/wishlist/*
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // init jquery
    var $ = window.jQuery;

    // move in stock to top of list
    $('.add-to-cart-alt button.btn-cart').closest('tr').each(function(){
      $(this).prependTo("#wishlist-table");
    });

    // minimize not in stock
    $('p.out-of-stock').closest('.last').hide();
})();
