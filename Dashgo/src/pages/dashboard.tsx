import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { Graph } from "../components/Graph";
import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar/index"

export default function Dashboard() {
    const [showChart, setShowChart] = useState(false);

    setTimeout(() => {
        setShowChart(true);
    }, 1);

    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth="1480" mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start" >
                    
                    {showChart && (<Graph graphTitle="Inscrições da semana" type="area"/>)}

                    {showChart && (<Graph graphTitle="Taxa de abertura" type="area"/>)}                    
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}