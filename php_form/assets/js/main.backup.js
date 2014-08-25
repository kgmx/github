$(function(){

  'use strict';

  var $photoBlockNum, $photoPage, $pagination, nextBtn, prevBtn, firstBtn, lastBtn, firstBlock, lastBlock, firstPag, lastPag;
  $photoBlockNum = $('.photo-wrapper').length;
  $photoPage = $('.photo-wrapper');
  nextBtn = $('.next');
  prevBtn = $('.prev');
  firstBtn = $('.first');
  lastBtn = $('.last');
  firstBlock = 's1';
  lastBlock = 's' + $photoBlockNum;
  firstPag = 'p1';
  lastPag = 'p' + $photoBlockNum;
  var $paginationBlcok = $('.pagination-block');
  var current = $('.show');
  var currentPag = $('.current');

  console.log(currentPag);


  // paginationを挿入する関数
  function insertPag(num) {
    var paginationEach = $('<span>').appendTo($paginationBlcok).addClass('page' + ' ' + 'p' + num);
    var paginationLink = $('<a href="#"></a>').appendTo(paginationEach).text(num);
  }

  // $photoBlockNumの数だけ、paginationを作る
  // for ( var i = 1; i <= $photoBlockNum; i++) {
  // 最初にpagination5までを作る
    for (var i = 1; i <= 5; i++) {
      insertPag(i);
    }

　// ...を挿入
  var continuePag = $('<span>...</span>').appendTo($paginationBlcok);


  $pagination = $('.page');

  _init();
  // 最初のブロックを出す関数
  function _init() {
    $('.s1').addClass('show');
    $('.p1').addClass('current');
  }

  // paginationをクリックした時の処理
  $pagination.on('click', function() {
    var index = $pagination.index(this) + 1;
    $pagination.removeClass('current');
    $(this).addClass('current');
    $photoPage.removeClass('show');
    $('.s' + index).addClass('show');
  });


  // // nextBtn,prevbtnをクリックした時に実行する関数
  // // 引数がnull, undefined, NaN, '', 0の時はfalseになるので、if文は通らない
  // // 旧
  // function moveOne(target, isNext) {
  //   if (!current.hasClass(target)) {
  //     $pagination.removeClass('current');
  //     current.removeClass('show');

  //     // numberやstrigでも（falseになる値以外なら）if文は通る
  //     if (isNext === true) {
  //       currentPag.next().addClass('current');
  //       current.next().addClass('show');
  //     } else {
  //       currentPag.prev().addClass('current');
  //       current.prev().addClass('show');
  //     }
  //   }
  // }
