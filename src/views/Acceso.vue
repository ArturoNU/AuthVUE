<template>
  <div>
    <h1>Acceso de usuiarios</h1>
    <form @submit.prevent="ingresoUsuario({email: email, password: pass})">
      <input type="email" placeholder="Ingrese su correo" v-model="email" />
      <input type="password" placeholder="Ingrese su contraseña" v-model="pass" />
      <button type="submit">Acceder</button>
    </form>
    <p>{{error}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "acceso",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    ...mapActions(["ingresoUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
  },
};
</script>