<template>
  <section>
    <div class="card">
      <img :src="image" alt="produto-img" />
      <h2>{{ title }}</h2>
      <h3>{{ preco }}</h3>
      <div class="btn">
        <router-link to="/produto"><button>Fazer pedido</button></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: Image,
    title: String,
    preco: String,
  },
};
</script>

<style>
.card {
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
}

.card h2 {
  margin: 0;
  padding: 10px 0;
  font-weight: bold;
  color: #000000;
}

.card h3 {
  margin: 0;
  padding-bottom: 20px;
  color: #000000;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card button {
  text-decoration: none;
  font-size: 16px;
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: #c3121c;
  color: #ffffff;
  border: none;
}

.card button:hover {
  background-color: #860f15;
  cursor: pointer;
  transition: 0.5s ease;
}
</style>
