import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {

    //EL SNAPSHOT CREA UNA FOTO DE TODO EL HTML DEL COMPONENTE, LA CUAL PUEDE CREAR ERRORES CON LAS PRUEBAS SI EL COMPONENTE SE MODIFICA
    //AL MODIFICARSE, LA FOTO TOMADA DEL COMPONENTE YA NO SERIA IGUAL AL ACTUAL Y HABRIA QUE MODIFICARLO
    // test('debe de hacer match con el snapshot', () => { 

    //     const title = 'Hola, Soy Goku';
    //     const { container } =render( <FirstApp title={ title } /> )

    //     expect( container ).toMatchSnapshot();
    //  });

    test('debe de mostrar el titulo de un h1', () => {

        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        //se brinca el render y busca en el dom el elemento por tipo (tambien se puede usar por clase o id)
        // const h1 = container.querySelector('h1'); 
        // //console.log(h1.innerHTML)
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    test('debe de mostrar subtitulo enviado por props', () => {

        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo'
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={ subTitle }
            />
        )

        expect( getAllByText(subTitle).length ).toBe(2);
    });
});