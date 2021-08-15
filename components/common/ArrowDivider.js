import styles from './ArrowDivider.module.scss';
import PropTypes from 'prop-types';

const ArrowDivider = ({ size, BGcolor = "transparent", border }) => {
    if(!size){
        throw ': Size prop is required.';
    } else if (!['px', 'rem', 'em'].some(measurement => measurement === size.measurement)){
        throw ': "Measurement" property must be either in "px", "rem", or "em".';
    }

    if(border && border.size > 10){
        throw ': Border.size cannot be larger than "10".'
    }
    
    const concatonatedTriangleSize = `${size.value}${size.measurement}`
    const borderStyles= {
        height: border ? border.size : '0',
        backgroundColor: border ? border.color : 'transparent'
    }
    
    const borderPosition = border ? `calc(50% + ${size.value / 2 * Math.sqrt(2)}${size.measurement} - ${border.size}px)` : 'unset';

    return(
        <div style={{ height: concatonatedTriangleSize, marginTop: `-${concatonatedTriangleSize}` }} className={styles.ArrowDivider}>
            <div 
                style={{ ...borderStyles, right: borderPosition }} 
                id={styles.left} 
                className={styles.border}
            />
            <div 
                style={{ ...borderStyles, left: borderPosition }} 
                id={styles.right} 
                className={styles.border}
            />
            <div 
                style={{ 
                    height: concatonatedTriangleSize, 
                    width: concatonatedTriangleSize, 
                    boxShadow: `0 300px 0 5000px ${BGcolor}` ,
                    borderRight: border ? `${border.size}px solid ${border.color}` : 'none',
                    borderBottom: border ? `${border.size}px solid ${border.color}` : 'none'
                }} 
                className={styles.shape}
            />
        </div>
    )
}

ArrowDivider.propTypes = {
    size: PropTypes.object.isRequired,
    BGcolor: PropTypes.string,
    border: PropTypes.object
}

export default ArrowDivider;