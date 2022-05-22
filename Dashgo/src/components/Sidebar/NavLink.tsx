import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
    name: string,
    icone: ElementType,
    href: string
}

export function NavLink({ href, name, icone, ...rest }: NavLinkProps) {
    return (
        <ActiveLink passHref href={href}>
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icone} fontSize="20" />
                <Text ml="4" fontWeight="medium">{name}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}