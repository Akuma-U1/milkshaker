import { HStack, VStack, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, AddIcon, SearchIcon } from '@chakra-ui/icons'
import styles from './Navbar.module.css'

interface NavbarMenuIcon {
    name: string,
    onClick?: (args?: any) => void,
    icon: JSX.Element,
    ariaLabel: string
}

const navbarMenu: NavbarMenuIcon[] = [{
    name: 'hamburger',
    onClick: (index: number) => {
        console.log("lol" + index)
    },
    icon: <HamburgerIcon />,
    ariaLabel: "Hamburger dropdown menu icon"
}, {
    name: 'hamburger',
    onClick: (index: number) => {
        console.log("lol" + index)
    },
    icon: <AddIcon />,
    ariaLabel: "Hamburger dropdown menu icon"
}, {
    name: 'hamburger',
    onClick: (index: number) => {
        console.log("lol" + index)
    },
    icon: <SearchIcon />,
    ariaLabel: "Hamburger dropdown menu icon"
}]

const Navbar = () => {
    const icons = navbarMenu.map((icon, index) => {
        return (
            <IconButton icon={icon.icon} key={index} aria-label={icon.ariaLabel} onClick={() => { icon.onClick ? icon.onClick(index) : null }} />
        )
    })
    return (
        <HStack className={styles.navbar}>
            {icons}
        </HStack>
    )
}

export default Navbar;