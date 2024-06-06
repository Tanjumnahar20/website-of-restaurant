import useAuth from "../../../CustomHooks/useAuth";



const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            {
                user ? user.displayName : 'Admin home is here'
            }
        </div>
    );
};

export default AdminHome;