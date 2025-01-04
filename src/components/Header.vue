<template>
  <div>
		<header>
			<div class="wrapper">
				<img src="img/index_img/rectangle-2.png" 
					srcset="img/index_img/rectangle-2@2x.png 2x, 
					        img/index_img/rectangle-2@3x.png 3x" 
					class="Rectangle-2">
			</div>
			<div class="wrapper">
				<div class="w3-row">
					<div class="w3-col m4">
						<router-link to="/" title="首頁">
							<img src="img/index_img/group-2.png"
							srcset="img/index_img/group-2@2x.png 2x,
							        img/index_img/group-2@3x.png 3x"
							class="logo">
						</router-link>
					</div>
					<div class="w3-col m8">
						<a href="javascript:;" class="nav_icon" id="nav_icon" title="導覽"><i class="fa fa-bars fa-2x"></i></a>
						<nav class="mainnav">
							<a href="javascript:;" class="nav_close mobile" id="nav_close">x 關閉</a>
							<ul>
								<li>
                  <router-link to="/collageInfo" title="點擊可進入關於本院"><img src="img/index_img/4.png" srcset="img/index_img/4@2x.png 2x, img/index_img/4@3x.png 3x" class="menuitem"></router-link>
                </li>
								<li>
                  <router-link to="/newsList" title="點擊可進入最新消息"><img src="img/index_img/5.png" srcset="img/index_img/5@2x.png 2x, img/index_img/5@3x.png 3x" class="menuitem"></router-link>
                </li>
								<li>
                  <router-link to="/activityList" title="點擊可進入活動資訊"><img src="img/index_img/5.png" srcset="img/index_img/5@2x.png 2x, img/index_img/5@3x.png 3x" class="menuitem"></router-link>
                </li>
								<li>
                  <router-link to="/collageDepartment" title="點擊可進入系所單位"><img src="img/index_img/8.png" srcset="img/index_img/8@2x.png 2x, img/index_img/8@3x.png 3x" class="menuitem"></router-link>
                </li>
                <li>
                  <router-link to="/collageCourse" title="點擊可進入學院課程"><img src="img/index_img/9.png" srcset="img/index_img/9@2x.png 2x, img/index_img/9@3x.png 3x" class="menuitem"></router-link>
                </li>
                <li>
                  <router-link to="/regulation" title="點擊可進入法規章程"><img src="img/index_img/invalid-name.png" srcset="img/index_img/invalid-name@2x.png 2x, img/index_img/invalid-name@3x.png 3x" class="menuitem"></router-link>
                </li>
                <li>
                  <router-link to="/relatedResource" title="點擊可進入相關資源"><img src="img/index_img/2.png" srcset="img/index_img/2@2x.png 2x, img/index_img/2@3x.png 3x" class="menuitem"></router-link>
                </li>
                <li>
                  <router-link to="/collageHeadElection" title="點擊可進入院長遴選"><img src="img/index_img/3.png" srcset="img/index_img/3@2x.png 2x, img/index_img/3@3x.png 3x" class="menuitem"></router-link>
                </li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      User: null,
      LessonCatrgories: [],
      Keyword: "",
      TabIndexNo : -1,
    };
  },
  async mounted() {
    this.setBase("home-wide");
    this.User = this.$user.user;
    this.$user.addOnUpdateHandler((user) => {
      this.User = user.user;
    });
    this.$nextTick(()=>{
      $(".menu_burger").click(function () {
        if ($(".main-menu>ul").hasClass("show")) {
          $(".main-menu>ul").removeClass("show");
          $(".menu_burger").removeClass("on");
          $(".h_search").removeClass("act");
        } else {
          $(".main-menu>ul").addClass("show");
          $(".menu_burger").addClass("on");
        }
        
      });


      $(".menu_burger, header, .main").click(function () {
        
        $(".tSpaceLink .dDown-menu").removeClass("show");
        $(".sSpaceLink .dDown-menu").removeClass("show");
        $(".loggedInUser .dDown-menu").removeClass("show");
        
      });
        $(".main-menu li").click(function () {
          if ($(".main-menu>ul").hasClass("show")) {
            $(".main-menu>ul").removeClass("show");
            $(".menu_burger").removeClass("on");
          } 
        });
      $(".main-menu li:not('.zoom'), .h_search img").click(function () {
          $(".main-menu>ul").removeClass("show");
          $(".menu_burger").removeClass("on");
          $(".h_search").removeClass("act");
      });



      $(".loggedInUser > span").click(function () {
        if ($(".loggedInUser .dDown-menu").hasClass("show")) {
          $(".loggedInUser .dDown-menu").removeClass("show");
        } else {
          $(".loggedInUser .dDown-menu").addClass("show");
        }

          $(".tSpaceLink .dDown-menu").removeClass("show");
      });

      $(".tSpaceLink > span").click(function () {

          $(".loggedInUser .dDown-menu").removeClass("show");
        if ($(".tSpaceLink .dDown-menu").hasClass("show")) {
          $(".tSpaceLink .dDown-menu").removeClass("show");
        } else {
          $(".tSpaceLink .dDown-menu").addClass("show");
        }

      });

      $(".sSpaceLink > span").click(function () {
        if ($(".sSpaceLink .dDown-menu").hasClass("show")) {
          $(".sSpaceLink .dDown-menu").removeClass("show");
        } else {
          $(".sSpaceLink .dDown-menu").addClass("show");
        }
          $(".loggedInUser .dDown-menu").removeClass("show");
      });

      $(".topbar_o .dDown-menu a").click(function () {
          $(".dDown-menu").removeClass("show");
      });
    });
  },
  methods: {
  },
};

</script>