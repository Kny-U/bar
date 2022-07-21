// メニューバーのファンクション
$(function () {
  var headNav = $(".headerBar");

  $(document).ready(function () {
    headNav.addClass("none");
  });

  //scrollだけだと読み込み時困るのでloadも追加
  $(window).on("load scroll", function () {
    //現在の位置が500px以上かつ、クラスfixedが付与されていない時
    if ($(this).scrollTop() > 200 && headNav.hasClass("fixed") == false) {
      //headerの高さ分上に設定
      headNav.css({ top: "-100px" });
      //クラスfixedを付与
      headNav.removeClass("none");
      headNav.addClass("fixed");
      //位置を0に設定し、アニメーションのスピードを指定
      headNav.animate({ top: 0 }, 1000);
    }
    //現在の位置が300px以下かつ、クラスfixedが付与されている時にfixedを外す
    else if ($(this).scrollTop() < 200 && headNav.hasClass("fixed") == true) {
      headNav.removeClass("fixed");
      headNav.animate({ top: "-100px" }, 1000);
      headNav.addClass("none");
    }
  });
});

// スクロールトップ
$(function () {
  $(".scrolltop").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    $(".headerBar").addClass("none");
    return false;
  });
});

// ショップ名フェードイン
$(function () {
  $(document).ready(function () {
    $(".shopname").hide().fadeIn(2000);
  });
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 40;
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


function fadeAnime(){
  $(".fadeLeftTrigger").each(function () {
    //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeLeft"); // 画面内に入ったらfadeLeftというクラス名を追記
    } else {
      $(this).removeClass("fadeLeft"); // 画面外に出たらfadeLeftというクラス名を外す
    }
  });

  $(".fadeRightTrigger").each(function () {
	//fadeRightTriggerというクラス名が
	var elemPos = $(this).offset().top - 50; //要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight) {
	  $(this).addClass("fadeRight"); // 画面内に入ったらfadeRightというクラス名を追記
	} else {
	  $(this).removeClass("fadeRight"); // 画面外に出たらfadeRightというクラス名を外す
	}
  });
};


// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述