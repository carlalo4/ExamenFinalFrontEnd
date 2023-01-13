<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      token: localStorage.getItem('Token')
    };
  }, 
  methods: {
    mostrarUsuario(){
      alert("Timestamp: " + localStorage.getItem('Time') + " \nEmail: " + localStorage.getItem('Email') + "\nCaducidad: " + localStorage.getItem('Exp') + "\nID: " + localStorage.getItem('Id'));
    }, 
    cerrarSesion(){
      localStorage.clear();
      this.token = undefined;
      location.reload();
    }
  }
}

</script>

<template>
<header>

  <div class="logo">
    <h2 class="logo-nombre">
      <router-link to="/"> ExamenFinal </router-link>
    </h2>
  </div>

  <nav>
    <router-link to="/"> Inicio </router-link>
    <router-link v-if= "token" to="/formulario"> Formulario </router-link>
    <router-link to="/lista"> Lista </router-link>
  </nav>

  <div class="logo" v-if="!token">
    <a class="g_id_signin" data-type="standard" data-shape="pill" data-size="large"></a>
  </div>

  <div class="logo" v-if="token">
    <button class="boton1" v-if="token" v-on:click="mostrarUsuario();"> Datos usuario </button>
  </div>

  <div class="logo" v-if="token">
    <button class="boton1" v-if="token" v-on:click="cerrarSesion();"> Cerrar Sesion</button>
  </div>

</header>

<div padding-top="20px">
  <router-view/>
</div>

</template>

<style>
@import './assets/header_style.css';
</style>