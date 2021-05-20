import PropTypes from 'prop-types'

const Button2 = ({ color, text, onClick}) => {
    
    return  (
    <button onClick={onClick} style={{ backgroundColor: color }} 
     className='btn'>{text} 
     </button>)
}

Button2.defaultProps= {
    color: 'steelblue',
}

Button2.propTypes ={
    color: PropTypes.string,
    text: PropTypes.string,
    onClick:PropTypes.func,
}
export default Button2
