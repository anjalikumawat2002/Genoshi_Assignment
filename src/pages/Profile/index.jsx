import AccountDetails from "../../components/Profile/accountDetails";
import ButtonGroup from "../../components/Profile/buttonGroup";
import FavouriteCollections from "../../components/Profile/favourites";
import RecentVisits from "../../components/Profile/recentVisits";
import SavedGraphs from "../../components/Profile/savedGraphs";
import UsageMatrix from "../../components/Profile/usageMatrix";
import UserDetails from "../../components/Profile/userDetails";

const UserAccount = ()=>{

    return(
        <>
        <section className="mx-auto pt-24 dark:text-white text-black">
            <UserDetails />
            <AccountDetails />
            <UsageMatrix />
            <RecentVisits />
            <ButtonGroup />
            <SavedGraphs />
            <FavouriteCollections />
            
        </section>
        </>
    )

}

export default UserAccount;