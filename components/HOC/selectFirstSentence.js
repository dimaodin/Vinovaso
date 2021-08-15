import PropTypes from 'prop-types';

SelectFirstSentence.propTypes = {
    style: PropTypes.object,
    styleRest: PropTypes.object,
    children: PropTypes.element.isRequired
}

export default function SelectFirstSentence({ children, style, styleRest }){
    const stringArr = children.props.children.split('');
    let firstPunc;
    for(let i = 0; i < stringArr.length; i++){
        if(['.', '!', '?', ':'].includes(stringArr[i])){
            firstPunc = i;
            break;
        }
    }
    
    const first = [];
    const rest = [];
    for(let i = 0; i < stringArr.length; i++){
        if(i <= firstPunc){
            first.push(stringArr[i])
        } else {
            rest.push(stringArr[i])
        }
    }

    switch(children.type){
        case 'h1':
            return (
                <h1>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </h1>
            )
        case 'h2':
            return (
                <h2>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </h2>
            )
        case 'h3':
            return (
                <h3>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </h3>
            )
        case 'h4':
            return (
                <h4>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </h4>
            )
        case 'h5':
            return (
                <h5>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </h5>
            )
        case 'h6':
            return (
                <h6>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </h6>
            )
        default:
            return (
                <p>
                    <span style={style}>{first.join('')}</span>
                    <span style={styleRest}>{rest.join('')}</span>
                </p>
            ) 
    }
}