import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productionType: [
      {
        name: '类型1',
        url: 'productions/type1',
      },
      {
        name: '类型2',
        url: 'productions/type2',
      },
    ],
    productions: [
      {
        type: 'type1',
        imgUrl: '/images/tree.jpg',
        title: '类型一 产品1',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        type: 'type1',
        imgUrl: '/images/tree.jpg',
        title: '类型一 产品2',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        type: 'type1',
        imgUrl: '/images/tree.jpg',
        title: '类型一 产品3',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        type: 'type2',
        imgUrl: '/images/tree.jpg',
        title: '类型二 产品1',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        type: 'type2',
        imgUrl: '/images/tree.jpg',
        title: '类型二 产品2',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        type: 'type2',
        imgUrl: '/images/tree.jpg',
        title: '类型二 产品3',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
      {
        type: 'type2',
        imgUrl: '/images/tree.jpg',
        title: '类型二 产品4',
        cardText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      },
    ],
  },
  getters: {
    filterProductions: state => type => state.productions.filter(item => item.type === type),
  },
  mutations: {

  },
  actions: {

  },
});
