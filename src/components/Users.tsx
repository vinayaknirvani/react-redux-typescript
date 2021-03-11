import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import { Center, Heading, List, ListItem } from '@chakra-ui/layout';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResetLoader, SetLoader } from '../redux/actions/global/GlobalActions';
import { AddUser } from '../redux/actions/users/UserActions';
import { IUser } from '../redux/models/IUser';
import { RootStore } from '../redux/store';

interface Props {

}

const Users: React.FC<Props> = () => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const dispatch = useDispatch();
    const { users } = useSelector((state: RootStore) => state.users);
    const [user, setUser] = useState<IUser>({ firstName: "", lastName: "" });

    // const [user, setUser] = useState<IUser>({ firstName: "", lastName: "" });
    // const [users, setUsers] = useState<IUser[]>([
    //     { firstName: "Vinayak", lastName: "Nirvani" },
    //     { firstName: "Praveen", lastName: "Purushothaman" },
    //     { firstName: "Tushar", lastName: "Jain" },
    //     { firstName: "Ayush", lastName: "Tamra" }]);
    return (
        <>
            <Center marginTop="20px" flexDirection="column">
                <Button marginBottom="20px" colorScheme="blue" onClick={onOpen}>Add user</Button>
                <List spacing={3}>
                    {users.map((user, index) => {
                        return <ListItem
                            key={index}
                            border="1px solid lightgrey"
                            borderRadius="lg"
                            display="flex" alignItems="center"
                            padding="10px"
                        >
                            <Avatar size="sm" />
                            <Heading size="md" textAlign="left" marginLeft="10px" flex={1}>{`${user.firstName} ${user.lastName}`}</Heading>
                        </ListItem>
                    })}
                </List>
            </Center>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input
                                placeholder="First name"
                                onChange={(e) => setUser({ ...user, firstName: e.currentTarget.value })}
                                required />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input
                                placeholder="Last name"
                                onChange={(e) => setUser({ ...user, lastName: e.currentTarget.value })}
                                required />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => {
                            if (user.firstName && user.lastName) {
                                dispatch(SetLoader());
                                dispatch(AddUser(user));
                                onToggle();
                                setTimeout(function () {
                                    dispatch(ResetLoader());
                                }, 2000);
                            }
                        }}>Save</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Users
