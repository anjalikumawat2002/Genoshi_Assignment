

const AccountDetails = ()=>{


    return(
        <>
        <div className="my-2 rounded-lg shadow-lg border dark:border-gray-600 border-gray-300 shadow-gray-300 dark:shadow-zinc-600 p-5 dark:bg-zinc-700 bg-gray-200">
            <div className="flex justify-between flex-wrap">
                <h1 className="text-xl font-bold">Current Subscription:</h1>
                <h1 className="text-xl font-bold">
                    plan_name
                </h1>
                <h2 className="text-md">
                    active
                </h2>
            </div>
            <h2 className="text-lg mt-1 px-2">Features</h2>
            <ul className="list-disc text px-2">
                <li className="translate-x-7">feature 1</li>
                <li className="translate-x-7">feature 2</li>
            </ul>

        </div>
        
        </>
    )
}

export default AccountDetails;