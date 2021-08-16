<template>
  <section class="produtos">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="produtos__title">Produtos</h2>
        </div>
        <div class="col-md-6">
          <input
            class="input_search"
            type="text"
            v-model="search"
            placeholder="Pesquisar..."
          />
        </div>
      </div>
      <div class="row">
        <div
          v-for="produto in produtosFiltered"
          :key="produto.id"
          class="col-md-4"
        >
          <Card
            :image="produto.image"
            :title="produto.title"
            :preco="produto.preco"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Produtos',
  components: {
    Card,
  },
  data: function() {
    return {
      search: '',
      produtos: [
        {
          id: 1,
          image: require('../assets/store_logo.jpg'),
          title: 'Produto01',
          preco: 'R$10',
        },
        {
          id: 2,
          image: require('../assets/store_logo.jpg'),
          title: 'Produto01',
          preco: 'R$10',
        },
        {
          id: 3,
          image: require('../assets/store_logo.jpg'),
          title: 'Produto03',
          preco: 'R$30',
        },
        {
          id: 4,
          image: require('../assets/store_logo.jpg'),
          title: 'Produto04',
          preco: 'R$30',
        },
        {
          id: 5,
          image: require('../assets/store_logo.jpg'),
          title: 'Produto05',
          preco: 'R$20',
        },
        {
          id: 6,
          image: require('../assets/store_logo.jpg'),
          title: 'Produto06',
          preco: 'R$10',
        },
      ],
    };
  },
  computed: {
    produtosFiltered: function() {
      return this.produtos.filter((produto) => {
        return (
          produto.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>

<style>
.produtos {
  padding: 56px 0px;
  background-color: #e2e2e2;
  width: 100%;
}
.produtos .row {
  align-items: flex-start;
}
.produtos .produtos__title {
  font-size: 36px;
  padding: 0;
  margin: 0;
}
.produtos input {
  border-radius: 50px;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  width: 70%;
  height: 30px;
  padding: 4px 14px;
  float: right;
}
.produtos input:focus {
  outline: none;
  border: 1px solid green;
  transition: 0.5s ease;
}
</style>
