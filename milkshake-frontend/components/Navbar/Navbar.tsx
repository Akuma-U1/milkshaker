import { HStack, IconButton } from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { FiMenu } from 'react-icons/fi'
import styles from './Navbar.module.css'
import { Combobox } from '@headlessui/react'
import { useCallback, useState } from 'react'

interface NavbarMenuIcon {
    name: string,
    onClick?: (args?: any) => void,
    icon: JSX.Element,
    ariaLabel: string
}

const places = [
    'Wimpy, Faerie Glen',
    'Wimpy, Brooklyn',
    'Spar, Glenfair',
    'Spur, Brooklyn',
    'Col\'Caccio, Menlyn Park',
]

const navbarMenu: NavbarMenuIcon[] = [{
    name: 'hamburger',
    onClick: (index: number) => {
        console.log("lol" + index)
    },
    icon: <FiMenu />,
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
    const icons = useCallback(() => {
        return navbarMenu.map((icon, index) => {
            return (
                <IconButton icon={icon.icon} key={index} aria-label={icon.ariaLabel} onClick={() => { icon.onClick ? icon.onClick(index) : null }} />
            )
        })
    }, [])

    const [selectedPlace, setSelectedPlace] = useState(places[0])
    const [query, setQuery] = useState('')
    const filteredPlaces =
        query === ''
            ? places
            : places.filter((place) => {
                return place.toLowerCase().includes(query.toLowerCase())
            })
    return (
        <HStack className={styles.navbar}>
            <HStack className={styles.icons}>{icons()}</HStack>
            <HStack className={styles.searchbar}>
                <Combobox value={selectedPlace} onChange={setSelectedPlace}>
                    <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
                    <Combobox.Options style={{ "position": 'absolute' }}>
                        {filteredPlaces.map((place) => (
                            <Combobox.Option key={place} value={place}>
                                {place}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </Combobox>
            </HStack>
            <HStack className={styles.logo}><h1>Milkshaker!</h1></HStack>
        </HStack>
    )
}

export default Navbar;