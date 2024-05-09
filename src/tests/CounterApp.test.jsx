import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp"

describe('pruebas sobre CounterApp', () => { 

    const initialValue = 10;
    
    test('Debe de hacer match con el snapshot', () => { 
       
        const { container } = render( <CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();
     });

     test('Debe de mostrar el valor inicial de 100', () => { 
       
        render( <CounterApp value={ 100 } />);
        //screen.debug();
        expect( screen.getByText(100)).toBeTruthy();
     });

     test('debe de incrementar el boton +1', () => { 
        render( <CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('11')).toBeTruthy();
      });

      test('debe de decrementar el boton -1', () => { 
        render( <CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('9')).toBeTruthy();
      });

      test('debe de funcionar el boton de rest', () => { 
        render( <CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('Reset') );

        expect( screen.getByText( 10 ) ).toBeTruthy();
      });
 });