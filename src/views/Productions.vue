<template>
  <div class="content">
    <b-breadcrumb :items="items"/>
    <div class="container">
    <ul class="production-list">
      <li v-for="(item, index) in productions" v-bind:key="index">
        <b-card :title="item.title"
          :img-src="item.imgUrl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <p class="card-text">{{item.cardText}}</p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: 'productions',
  created() {
    const typeName = this.$route.params.type;
    this.productions = this.$store.getters.filterProductions(typeName);
    switch (typeName) {
      case 'type1':
        this.breadcrumbType = '类型一';
        break;
      case 'type2':
        this.breadcrumbType = '类型二';
        break;
      default:
        console.log('not mathch');
    }
  },
  data() {
    return {
      items: [{
        text: '首页',
        to: '/',
      }, {
        text: this.breadcrumbType,
        to: '/type',
      }, {
        text: '产品列表',
      }],
      productions: [],
      breadcrumbType: '',
    };
  },
  mounted() {
    this.$set(this.items, 1, {
      text: this.breadcrumbType,
      to: '/type',
    });
  },
  mehtods: {
    goto(link) {
      this.$router.push(link);
    },
  },
};
</script>
