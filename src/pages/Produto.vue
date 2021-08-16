<template>
  <div class="app">
    <Header />
    <ProdutoCompra />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProdutoCompra from '../components/ProdutoCompra.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    ProdutoCompra,
    Footer,
  },
};
</script>

<style></style>
