<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="logo-header">
            <img class="logo__img" src="../assets/store_logo.jpg" alt="logo" />
          </h1>
        </div>
        <div class="col-md-6 header__right">
          <nav class="menu">
            <ul>
              <li>Clientes</li>
              <li>Pedidos</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
  background-color: #000;
  height: 80px;
  width: 100%;
  color: white;
}

.header__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.logo-header {
  width: 80px;
  padding-top: 0px;
  margin-top: 0px;
}

.logo__img {
  width: 100%;
}

.header-text {
  color: #e2e2e2;
  font-size: 14px;
  font-style: italic;
  margin: 8px;
  font-weight: 700;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #e2e2e2;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.menu ul li {
  padding: 4px 14px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5px;
}

.menu ul li:not(:last-child):after {
  content: '';
  display: inline-block;
  width: 1px;
  background-color: #e2e2e2;
  height: 10px;
  margin-left: 10px;
}

.menu ul li:hover {
  background-color: #333;
  transition: 0.5s;
  cursor: pointer;
}
</style>
