<template>
    <h2>{{ customTitle }}</h2>

    <p>{{ counter }} <sup>2</sup> = {{squareCounter}}</p>
   
    <p data-testid="counter">{{ counter }}</p>

    <div class="buttons-container">
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>


</template>

<script>
export default {
    //Definiendo properties: props.
    //props:  ['title','start'],
    props:  {
        title: String,
        start: {
            type: Number,
            default: 100,
            //required: true
            validator(value){
                return value >= 0
            }
        }
    },
    //name: 'Counter',
    //data() objeto de manera reactiva.
    //Vue mantiene el estado de la aplicación
    //Se busca que los componentes no hagan calculos matemáticos.
    data(){
        return{
            counter: this.start
        }
    },
    //Se computa las veces que la llame.
    methods:{
        getSquareValue(){
            //console.log("Call by methods")
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
            //console.log("Call by computed")
            return this.counter * this.counter
        },
        customTitle(){
            return this.title || 'Counter'
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
