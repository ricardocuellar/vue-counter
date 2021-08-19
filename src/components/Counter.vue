<template>
    <h2>Counter!!!</h2>

    <p>{{ counter }} <sup>2</sup> = {{squareCounter}}</p>
   
    <div>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>


</template>

<script>
export default {
    //name: 'Counter',
    //data() objeto de manera reactiva.
    //Vue mantiene el estado de la aplicación
    //Se busca que los componentes no hagan calculos matemáticos.
    data(){
        return{
            counter: 5
        }
    },
    //Se computa las veces que la llame.
    methods:{
        getSquareValue(){
            console.log("Call by methods")
            return this.counter * this.counter  
        },
        //Increase, decrease. 
        increase(){
            //return this.counter++
            this.counter++
        },
        decrease(){
            //return this.counter--
            this.counter--
        }
    },
    //Propiedades computadas se guardan en cache para hacer más ágil el proceso
    //Se computa cuando el counter vuelva a cambiar.
    computed: {
        squareCounter(){
            console.log("Call by computed")
            return this.counter * this.counter
        }
    }
}
</script>

<style>

button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    margin: 0 5px;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}

</style>
