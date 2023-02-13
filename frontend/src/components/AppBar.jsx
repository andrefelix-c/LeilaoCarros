import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
    Box
} from '@chakra-ui/react'

import { 
    HamburgerIcon,
} from '@chakra-ui/icons'

import TypeSelector from './TypeSelector';

function AppBar(props) {
    return(
        <Box m={5}>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <TypeSelector setValue={props.setValue} value={props.value} changeType={props.changeType}/>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default AppBar;