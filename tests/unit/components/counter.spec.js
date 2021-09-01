
//Mount monta componentes y subcomponentes. ShallowMount monta un solo componente.
import { shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'



describe('Counter Component', ()=>{



    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })



    // test('Debe hacer match con el snapshot', () => {
    //     //Wrapper nombre estandar
    //     //Update snapshot: npm run test:unit -- -u
    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()

    // })
    
    test('h2 debe tener valor por defecto "Counter"', () => {
        


        const h2 = wrapper.find('h2')
        console.log(h2.text())
        expect(h2.text()).toBe('Counter')
    })
    

    test('El valor por defecto debe ser 100 en el p', ()=>{
        //Wrapper
        //PTag
        //const p = wrapper.findAll('p')[1].text()
        const value = wrapper.find('[data-testid="counter"]').text()
        
        // Expect segundo p === 100
        //expect(p).toBe('100')
        expect(value).toBe('100')

    })


    test('debe de incrementar en 1 el valor del contador', async() =>{
        
        //Montar el componente

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')


        //Esperar al que el dom se actualice
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('99')

    })

    test('debe de establecer el valor por defecto', ()=>{

        const {start} = wrapper.props()
        //const start = wrapper.props('start')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value) ).toBe( start )

    })

    //Properties no agregarlas en el beforeEach porque puede afectar otras pruebas
    test('debe de mostrar la prop title', () => {

        const title = 'Hola Mundo!!'
        const wrapper = shallowMount(Counter,{
            props: {
                title,
                // start: '5'
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)
        console.log(wrapper.html())
    })
    


})