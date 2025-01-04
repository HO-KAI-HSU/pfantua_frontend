$( document ).ready(function() {
    // $(".home .topbar_o").append('<div class="container"><a href="https://www.npm.gov.tw/" class="parentLink">故宮博物院官網</a><a href="login.html">登入</a><a href="register.html">註冊</a></div>');


    $(".main-menu").append('<ul><li><a href="sCourseAll.html" title="學生課程">學生課程</a><ul class="sub-menu"><li><a href="#" title="全部課程">全部</a></li><li><a href="#" title="國小課程">國小</a></li><li><a href="#" title="國中課程">國中</a></li><li><a href="#" title="高中課程">高中</a></li></ul></li><li><a href="tCourseAll.html" title="師培課程">師培課程</a></li><li><a href="t_resource.html" title="教學資源">教學資源</a></li><li><a href="https://www.npm.gov.tw/" class="parentLink" title="故宮首頁連結">故宮博物院</a></li><li><a href="login.html" title="登入">登入</a></li><li><a href="register.html" title="註冊">註冊</a></li><li class="zoom"><a href="#" title="點擊放大icon"><img src="/img/zoom-w.png" alt="點擊放大icon"></a></li></ul><div class="h_search"><input type="text" placeholder="搜尋更多" title="searchtext"><a href=""><img src="/img/send.svg" alt="搜尋更多icon"/></a></div>');
    
    $("footer").append('<div class="container"><div class="f_logo"><img src="/img/f_Logo.png" alt="故宮線上學校Footer商標"></div><div class="f_contact"><div class="fc_content fc1"><h4>北部院區</h4><div class="detail"><p> <span><img src="/img/f_icon_address.png" alt="故宮線上學校Footer北院地址icon"></span>111001臺北市士林區至善路二段221號</p><p> <span><img src="/img/f_icon_phone.png" alt="故宮線上學校Footer北院電話icon"></span>(02)2881-2021 / (02)6610-3600</p><p> <span><img src="/img/f_icon_mail.png" alt="故宮線上學校Footer北院信箱icon"></span>service@npm.gov.tw</p></div></div><div class="fc_content fc2"><h4>南部院區</h4><div class="detail"><p> <span><img src="/img/f_icon_address.png" alt = "故宮線上學校Footer南院地址icon"></span>612008嘉義縣太保市故宮大道888號</p><p> <span><img src="/img/f_icon_phone.png" alt = "故宮線上學校Footer南院電話icon"></span>(05)3620-777</p><p> <span><img src="/img/f_icon_mail.png" alt = "故宮線上學校Footer南院信箱icon"></span>sbservice@npm.gov.tw</p></div></div></div>');
    
    $(".copyRight").append('<div class="container"><div class="copyRightInner"><p>國立故宮博物院著作權所有　Copyright © National Palace Museum. All Rights Reserved.</p><p>建議瀏覽器:Google Chrome最新版本、Microsoft Edge (螢幕最佳顯示效果為1920*1080)</p></div></div>');
    
    $(".logo").append('<a href="index-wide.html" title="故宮線上學校"><img src="/img/logo.png" alt="故宮線上學校商標"></a>');


    $("header .zoom").click(function(){
      if ($(".h_search").hasClass("act")) {
        $(".h_search").removeClass("act");
      } else {
        $(".h_search").addClass("act");
      }
      return false;
    });
    $(".LoginBox .submitBtn").click(function () {
      $(".topbar_o").html('<div class="container"><div class="topInner"><a href="history.html" class="parentLink">觀看紀錄</a><div class="loggedInUser"><span>Hi, Kim Chen</span><ul class="dDown-menu"><li><a href="profile.html">編輯個人資料</a></li><li><a href="#">登出</a></li></ul></div></div>');
      $(".LoginBox ").addClass('logged');
      $(".LoginBox.logged").html('<div class="doll"><img src="/img/doll.png" alt=""></div><h3>Welcome</h3><h2 class="userName">Kim Chen</h2><div class="submitBtn"><a href="history.html">觀看紀錄</a></div><a href="index-wide.html" class="logout">登出</a>')
      return false;
    });

    $(".page .topbar_o").html('<div class="container"><div class="topInner"><a href="history.html" class="parentLink" title="innerpage">觀看紀錄</a><div class="loggedInUser"><span>Hi, Kim Chen</span><ul class="dDown-menu"><li><a href="profile.html" title="innerpage">編輯個人資料</a></li><li><a href="#" title="innerpage">登出</a></li></ul></div></div>');

    //學生專區 topbar
    $(".page.sSpace .topbar_o").html('<div class="container"><div class="topInner"><div class="tSpaceLink"><span>學生專區</span><ul class="dDown-menu"><li><a href="myClass_student.html" title="innerpage">我的課程</a></li><li><a href="addClass_student.html" title="innerpage">加入課程</a></li><li><a href="history_student.html" title="innerpage">上課紀錄</a></li></ul></div><div class="loggedInUser"><span>Hi, 王小明您好</span><ul class="dDown-menu"><li><a href="profile.html" title="innerpage">編輯個人資料</a></li><li><a href="index-wide.html" title="innerpage">登出</a></li></ul></div></div></div>');

    //教師專區 topbar
    $(".page.tSpace .topbar_o").html('<div class="container"><div class="topInner"><div class="tSpaceLink"><span>教師專區</span><ul class="dDown-menu"><li><a href="myClass.html" title="innerpage">我的班級</a></li><li><a href="addClass.html" title="innerpage">建立班級</a></li><li><a href="trackClass.html" title="innerpage">學習進度追蹤</a></li></ul></div><div class="loggedInUser"><span>Hi, 王大明老師</span><ul class="dDown-menu"><li><a href="history.html" title="innerpage">觀看紀錄</a></li><li><a href="profile.html" title="innerpage">編輯個人資料</a></li><li><a href="index-wide.html" title="innerpage">登出</a></li></ul></div></div></div>');

    

    $(".courseList a").click(function () {
      if ($(this).hasClass("choose")) {
        $(this).removeClass("choose");
      } else {
        $(this).addClass("choose");
      }
      return false;
    });

    if ($(".processBar").hasClass("x3")) {
      $(".nextBtn").hide();
    
    }

    $(".confirmTable td label:nth-child(1)").click(function () {
      $(".nextBtn").show();
      $(".confirmBtn").hide();
    });

    $(".confirmTable td label:nth-child(2)").click(function () {
      $(".nextBtn").hide();
      $(".confirmBtn").show();
    });
    $(".studentDetail").click(function () {
      $(".popUp").removeClass("hide");
      return false;
    });

    $(".p_foot .confirmBtn a").click(function () {
      $(".popUp").addClass("hide");
      return false;
    });

    $(".t_resource .tableStyle1").hide();
    $(".t_resource #tabContent1").show();
    $(".t_resource .tab li:nth-child(1)").click(function () {
      $(this).find("a").addClass("act");
      $(this).siblings().find("a").removeClass("act");
      $("#tabContent1").show().siblings('.tableStyle1').hide();
      return false;
    });
    $(".t_resource .tab li:nth-child(2)").click(function () {
      $(this).find("a").addClass("act");
      $(this).siblings().find("a").removeClass("act");
      $("#tabContent2").show().siblings('.tableStyle1').hide();
      return false;
    });
    $(".t_resource .tab li:nth-child(3)").click(function () {
      $(this).find("a").addClass("act");
      $(this).siblings().find("a").removeClass("act");
      $("#tabContent3").show().siblings('.tableStyle1').hide();
      return false;
    });

    $(".copyBtn").click(function () {
      alert("課程代碼已複製");
      return false;
    });

    $(".addToMyClass").click(function () {
      alert("已為您將本課程加入我的課程");
    });


    $(".addClassInput .submitBtn").click(function () {
      $(".cSearchResult").fadeIn();
      return false;
    });

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
          document.getElementById('vid-cont').requestFullscreen();
          $("#vid-cont").addClass("fs");
      } else if (document.exitFullscreen) {
          document.exitFullscreen(); 
          $("#vid-cont").removeClass("fs");
      }
    }
    





});

