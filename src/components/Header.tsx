import { Text } from '@chakra-ui/layout';
import React, { useRef } from 'react';

interface Props {
}

const Header: React.FC<Props> = () => {
    const inputRef = useRef();
    return (
        <Text>This is header</Text>
    )
}

export default Header
