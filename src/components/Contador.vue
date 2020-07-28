<template>
    <div class="wrap">
        <h4>Contador Vue</h4>
        <p>Clicks:{{contador_clicks}}</p>
        <button class="boton" @click="clicks">Click!!!</button>
    </div>
</template>

<script>
export default {
    name: 'Contador',
    computed: {
        contador_clicks() {
            return this.$store.state.contador
        }   
    },
    methods: {
        clicks(){
            this.$store.commit('incremento')
        }
            
    }
}
</script>

<style scoped>
    .wrap{
        width: 400px;
        background: #24303c;
        padding: 30px;
        margin: auto;
        margin-top: 100px;
        border-radius: 4px;
        font-family: 'calibri';
        font-size: 25px;
        color: white;
        box-shadow: 7px 13px 37px #000;
    }

    .boton {
        width: 100%;
        background: #1f53c5;
        border: none;
        padding: 12px;
        color: white;
        margin: 16px 0;
        font-size: 25px;
    }

    .boton:hover{
        background: green;
    }
</style>