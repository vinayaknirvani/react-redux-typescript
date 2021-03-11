import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import React, { ChangeEvent, useRef } from 'react';

interface Props {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({ handleChange }) => {
    const inputRef = useRef<null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Input
                // type="text"
                placeholder="Type something"
                ref={inputRef}
                onChange={handleChange}
            />
            <Button
                marginTop="10px"
             ref={buttonRef}
            >Click me</Button>
        </>
    )
}

export default CustomInput
