import DonutChart from "../donutchar";


const UsageMatrix = ()=>{


    return(
        <>
        <h1 className="text-xl mt-5 p-2 font-bold">Usage</h1>
        <div className="mb-5 flex justify-between flex-wrap items-center">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold p-2">Graph Created: 12</h2>
                <DonutChart consumePersent={55} color1={'#dc2626'} color2={'#fee2e2'}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold p-2">Graph Shared: 5</h2>
                <DonutChart consumePersent={36} color1={'#1d4ed8'} color2={'#dbeafe'}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg font-bold p-2">Papers Collected: 7</h2>
                <DonutChart consumePersent={45} color1={'#15803d'} color2={'#dcfce7'}/>
            </div>

        </div>
        </>
    )
}

export default UsageMatrix;