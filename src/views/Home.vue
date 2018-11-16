<template>
  <div class="container">
    <div class="weixin-mock" v-if="weixinBrowser">
      <img src="@/assets/arrow.png" alt="arrow">
      <p>请在浏览器中打开哦！</p>
    </div>
    <img src="@/assets/demo.jpg" alt="" style="width: 100%">
    <b-jumbotron header="XXX 公司" lead="致力于生产高质量XXXXX" >
      <p>详细地址</p>
      <p>联系方式：+86 <a href="tel:13888888888">138-8888-8888</a></p>
      <b-btn variant="primary" @click="goto('type')">产品分类</b-btn>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'home',
  mounted() {
    const browserType = this.checkBrowser();
    if (browserType === 'weixin') {
      this.weixinBrowser = true;
      const body = document.getElementsByClassName('container')[0];
      body.style.height = '1px';
      body.style.overflow = 'hidden';
    }
  },
  data() {
    return {
      weixinBrowser: false,
    };
  },
  methods: {
    goto(link) {
      this.$router.push(link);
    },
    checkBrowser() {
      const versions = () => {
        const u = navigator.userAgent;
        // const app = navigator.appVersion;
        return { // 移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, // IE内核
          presto: u.indexOf('Presto') > -1, // opera内核
          webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
          iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, // 是否iPad
          webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
        };
      };
      const browser = {
        versions: versions(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
      };

      if (browser.versions.mobile) { // 判断是否是移动设备打开。browser代码在下面
        const ua = navigator.userAgent.toLowerCase();// 获取判断用的对象
        // const [msg] = ua.match(/micromessenger/i);
        // this.ua = msg;

        if (ua.match(/micromessenger/i) && ua.match(/micromessenger/i)[0] === 'micromessenger') {
          // 在微信中打开
          console.log(ua);
          return 'weixin';
        }
        // if (ua.match(/WeiBo/i) === 'weibo') {
        //   // 在新浪微博客户端打开
        // }
        // if (ua.match(/QQ/i) === 'qq') {
        //   // 在QQ空间打开
        // }
        // if (browser.versions.ios) {
        //   // 是否在IOS浏览器打开
        //   alert(`ios${ua}`);
        // }
        // if (browser.versions.android) {
        //   // 是否在安卓浏览器打开
        // }
      } else {
        // 否则就是PC浏览器打开
        return 'pc';
      }
      return 'pc';
    },
  },
};
</script>
