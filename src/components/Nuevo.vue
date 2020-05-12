<template>
    <div class="nuevo">
        <div class="elementos">
            <label for=""></label>
            <input type="text" 
                    v-model="mensaje.text"
                    ref="input">         
            <button @click="agregar">anotar!</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Nuevo',
    data() {
        return {
            mensaje: {
                text: '',
            },
        }
    },
    methods:{
        agregar(){
            this.$emit('agregar',this.mensaje);
            this.mensaje.text = ''
            this.$nextTick(() => {
                this.$refs['input'].focus()
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.nuevo {
    /*
    position: absolute ;
    bottom: 0 ;
    */
    margin: 0 100px ;    
    padding: 20px 10px ;
    overflow: hidden;
    background: #8bb ;    
}
.elementos {
    width: fit-content;
    margin: 0 auto;
}
label {
    font-size: 1.5rem;
    float: left;
    font-weight: bolder;
    padding-right: 30px;
}
input {
    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
    font-size: 1.5rem;
    float: left;
    padding: 10px;
    width: 200px;
    border: 1px solid #ddd;
    background: rgba($color: #fff, $alpha: .4);
}
button {
    font-family: 'Quicksand', sans-serif;
    font-family: 'Zilla Slab', serif;
    margin-left: 5px;
    float: left;
    font-weight: 900;
    font-size: 1.4rem;
    border: 1px solid rgba($color: #fff, $alpha: 0);
    padding: 10px 30px;
    background: #fff;    
    cursor: pointer;
    transition: all .2s;
}
button:hover {
    background: #66f;    
    color: #fff;
}

</style>
