import { Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from 'apexcharts'
import { Props } from "react-apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-03-18T00:00:00.000Z',
            '2022-03-19T00:00:00.000Z',
            '2022-03-20T00:00:00.000Z',
            '2022-03-21T00:00:00.000Z',
            '2022-03-22T00:00:00.000Z',
            '2022-03-23T00:00:00.000Z',
            '2022-03-23T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
}

const series = [
    { name: "series1", data: [14, 160, 42, 64, 58, 128,] },
    { name: 'series2', data: [71, 56, 27, 38, 65, 18] }
]

interface GraphProps extends Props {
    graphTitle: string,
}

export function Graph({ graphTitle, type }: GraphProps) {

    return (
        <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius="8"
            pb="4"
        >
            <Text fontSize="lg" mb="4" >{graphTitle}</Text>
            <Chart type={type} options={options} series={series} height={160} />
        </Box>
    )

}