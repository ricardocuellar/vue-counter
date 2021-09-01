


//Pruebas tienen muchos nombres
//Test suite
describe('Example Component', ()=>{

  //Test piezas individuales de evaluación pequeña
  test( 'Debe de ser mayor a 10', () =>{

      //Arreglar
      let value = 10

      //Actuar
      value += 2
      //Observar el resultado
      //https://jestjs.io/docs/expect#tobegreaterthannumber--bigint
      expect(value).toBeGreaterThan(10)
  })

})