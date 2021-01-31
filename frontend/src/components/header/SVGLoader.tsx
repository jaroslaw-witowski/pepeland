import React, { CSSProperties } from 'react';

interface SVGLoaderProps {
    imageAdress: string,
    alt: string,
    style?: {},
} 

const SVGLoader: React.FC <SVGLoaderProps> = ({ imageAdress, alt, style}) => {
    return <img style={style} src={imageAdress} alt={alt}/>
}

export default SVGLoader;
