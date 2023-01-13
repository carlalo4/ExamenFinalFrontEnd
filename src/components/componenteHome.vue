<script>
export default {
  data: function () {
    return {
      busqueda: "",
      token: localStorage.getItem('Token')
    };
  }
}
</script>

<template>
  <div>
    <h1>Examen Final</h1>
    <h3>Inicio de la página</h3>
  </div>  
</template>

<style setup>
@import '../assets/componenteHomeStyle.css';
</style>