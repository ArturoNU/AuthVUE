<template>
  <div>
    <h1>Ruta protegida</h1>
    <p>Bienvenido {{usuario.email}}</p>
    <router-link to="/agregar">
      <button>Agregar</button>
    </router-link>
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
        {{item.id}} - {{item.nombre}}
        <router-link :to="{name: 'Editar', params: {id: item.id}}">
          <button>Editar</button>
        </router-link>
        <button @click="eliminarTarea(item.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "inicio",
  created() {
    this.getTareas();
  },
  computed: {
    ...mapState(["usuario", "tareas"]),
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"]),
  },
};
</script>