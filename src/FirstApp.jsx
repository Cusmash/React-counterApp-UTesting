import PropTypes from 'prop-types'

const getResult = (a,b) => {
    return a + b;
}

const newMessage = {
    message: 'HelloWorld',
    title: 'Fernando'
}

export const FirstApp = ( { title, subTitle, name } ) => {


  return (
    <>
    <h1 data-testid="test-title">{ title }</h1>
        {/* <h1>{ getResult(3,3) }</h1> */}
        {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay un titulo',
    subTitle: 'No hay subtitulo',
    name: 'Fernando Herrera'
}