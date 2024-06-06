import useAuth from "../../../CustomHooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            {
                user ? user.displayName : 'welcome to the user home'
            }
        </div>
    );
};

export default UserHome;