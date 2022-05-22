import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing={12} align="flex-start" >
            <NavSection title="GERAL">
                <NavLink href="/dashboard" name="Dashboard" icone={RiDashboardLine} />
                <NavLink href="/users" name="Usuários" icone={RiContactsLine} />
            </NavSection>

            <NavSection title="AUTOMAÇÃO" >
                <NavLink href="/forms" name="Formulários" icone={RiInputMethodLine} />
                <NavLink href="/automations" name="Automação" icone={RiGitMergeLine} />
            </NavSection>
        </Stack>
    )
}