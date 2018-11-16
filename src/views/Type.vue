<template>
  <div class="content">
    <b-breadcrumb :items="items"/>
    <div class="container">
    <ul class="production-list">
      <li v-for="item in productionTypes" v-bind:key="item.id">
        <a @click="goto(item.url)">{{item.name}}</a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: 'type',
  data() {
    return {
      items: [{
        text: '首页',
        to: '/',
      }, {
        text: '分类',
        to: '#',
      }],
    };
  },
  computed: {
    productionTypes() {
      return this.$store.state.productionType;
    },
  },
  methods: {
    goto(link) {
      this.$router.push(link);
    },
  },
};
</script>
