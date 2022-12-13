import { TextWrapper } from "./style";
import { useEffect, useState } from 'react';

const TextArea = ({ content, onChange }) => {

    const [val, setValue] = useState(content);

    useEffect(() => {
        setValue(content);
        console.log('chan', val, content);
    }, [content]);

    return(
        <div>
          <TextWrapper
            value={val}
            onChange={(event) => onChange(event.target.value)}
            />
        </div>
        
        
    )
}

export default TextArea;