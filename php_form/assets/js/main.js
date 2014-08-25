// 数字部分は、あとで変数に入れる予定
$(function(){

  'use strict';

  var $paginationBlcok, $photoBlockNum, $photoPage, $pagination, nextBtn, prevBtn, firstBtn, lastBtn, firstBlock, lastBlock, firstPag, lastPag;
  $paginationBlcok = $('.pagination-block');
  $photoBlockNum = $('.photo-wrapper').length;
  $photoPage = $('.photo-wrapper');

  // 「次へ」、「戻る」のボタン（< >）
  nextBtn = $('.next');
  prevBtn = $('.prev');
  // 「最後へ」、「最初へ」のボタン(1,20)
  firstBtn = $('.first');
  lastBtn = $('.last');
  // 画像のブロック
  firstBlock = 's1';
  lastBlock = 's' + $photoBlockNum;
  // ページネーション
  firstPag = 'p1';
  lastPag = 'p' + $photoBlockNum;

  // paginationのDOMを作る関数
  function insertPag(num) {
    var paginationEach = $('<span>').appendTo($paginationBlcok).addClass('page' + ' ' + 'p' + num);
    var paginationLink = $('<a href="#"></a>').appendTo(paginationEach).text(num);
  }

  // $photoBlockNumの数だけ、paginationを作る（insertPag(num)関数を実行する ）
  for (var i = 1; i <= $photoBlockNum; i++) {
    insertPag(i);
  }

  // 5つのページネーションを表示する関数
  function showPag(a, b) {
    for (var i = a; i <= b; i++) {
      $pagination = $('.page');
      $pagination.eq(i - 1).addClass('on');
    }
  }

  // 初期設定 pagination1~5を表示する（showPag(a, b)関数の実行）
  showPag(1, 5);

　// ...を挿入
  var morePrev = $('<span class="continue prev">...</span>').prependTo($paginationBlcok);
  var moreNext = $('<span class="continue next on">...</span>').appendTo($paginationBlcok);

  _init();
  // 最初のブロック表示する関数
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

  // 「前へ」をクリックした時の処理
  prevBtn.on('click', function (){
    var currentPag = $('.current');
    var current = $('.photo-wrapper.show');

    if (!current.hasClass('s1')){
      $pagination.removeClass('current');
      current.removeClass('show');
      currentPag.prev().addClass('current');
      current.prev().addClass('show');
      if (current.hasClass('s6')) {
        $pagination.removeClass('on');
        showPag(1, 5);
        firstBtn.removeClass('on');
        morePrev.removeClass('on');
      } else if (current.hasClass('s11')){
        $pagination.removeClass('on');
        showPag(6, 10)
      } else if (current.hasClass('s16')) {
        $pagination.removeClass('on');
        showPag(11, 15)
        firstBtn.addClass('on');
        lastBtn.addClass('on');
        $('.continue').addClass('on');
      }
    }
  });

  // 「次へ」をクリックした時の処理
  nextBtn.on('click', function() {
    var currentPag = $('.current');
    var current = $('.photo-wrapper.show');

    if (!current.hasClass('s20')){
      $pagination.removeClass('current');
      current.removeClass('show');
      currentPag.next().addClass('current');
      current.next().addClass('show');
      if (current.hasClass('s5')) {
        $pagination.removeClass('on');
        showPag(6, 10);
        $('.continue').addClass('on');
        $('.first').addClass('on');
      } else if (current.hasClass('s10')){
        $pagination.removeClass('on');
        showPag(11, 15);
      } else if (current.hasClass('s15')) {
        $pagination.removeClass('on');
        showPag(16, 20);

        lastBtn.removeClass('on');
        moreNext.addClass('on');
      }
    }
  });

  // 「最初へ」のボタンをクリックした時の処理
  firstBtn.on('click', function (){
    var currentPag = $('.current');
    var current = $('.photo-wrapper.show');

    current.removeClass('show');
    $pagination.removeClass('current');

    $('.p1').addClass('current');
    $('.s1').addClass('show');

    // クラスの付け替え方を統一する
    firstBtn.removeClass('on');
    $pagination.removeClass('on');

    moreNext.addClass('on');
    lastBtn.addClass('on');

    showPag(1, 5);
    morePrev.removeClass('on');
  });

  // 「最後へ」のボタンをクリックした時の処理
  lastBtn.on('click', function (){
    var currentPag = $('.current');
    var current = $('.photo-wrapper.show');

    current.removeClass('show');
    $pagination.removeClass('current');

    $('.' + lastPag).addClass('current');
    $('.' + lastBlock).addClass('show');

    $pagination.removeClass('on');
    lastBtn.removeClass('on');

    morePrev.addClass('on');
    firstBtn.addClass('on');

    showPag(16, 20);
    moreNext.removeClass('on');
  });

});
