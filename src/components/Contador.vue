<template>
    <div class="wrap">
        <h4>Contador Vue</h4>
        <p>Clicks:{{contador}}</p>
        <button :class="{active}" @mouseover="hover = true" class="boton" @click="clicks">Click!!!</button>
    </div>
</template>

<script>
    export default {
        name: 'Contador',
        data: function(){
            return {
                contador: 0,
                hover: false
            }
            
        },
        methods: {
            clicks(){
                this.contador+= 1;
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