
import { shallowMount} from '@vue/test-utils'
import Indecision from '@/components/Indecision'

//Node no soporta FETCH API y se debe simular (Crear un Mock)
//Cualquier interacción con endpoint debe ser con un Mock. 

describe('Indecision Component',()=>{

    //Inicializar wrapper
    let wrapper //undefine
    let clgSpy //Espias pendientes de los sucesos. Métodos, Librerias, llamadas.

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }) )

    beforeEach(()=>{
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn( console, 'log')
        jest.clearAllMocks()
    })


    test('Debe hacer match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo') //Si modifico el DOM debo esperar a que se renderice 

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveBeenCalledTimes(0)
        //expect(getAnswerSpy).not.toHaveBeenCalled()


    })

    test('Escribir el simbolo de "?" debe de disparar el getAnswer ',async()=>{
        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')

        expect( clgSpy ).toHaveBeenCalledTimes(1)
        expect( getAnswerSpy ).toHaveBeenCalled()

    })

    test('Pruebas en getAnswer', async() => {
        
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')



    })

    test('Pruebas en getAnswer - Fallo en el API', async() => {
        
        //Fallo de la API

        fetch.mockImplementation(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar el API')


    })
    
    
    

})