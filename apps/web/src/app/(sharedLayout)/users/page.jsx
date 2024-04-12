import UserFilter from '@/components/forms/UserFilter';
import RightSidebar from '@/components/user/RightSidebar';
import UsersList from '@/components/user/UsersList';

function Users() {
  return (
    <>
      <div className="w-full 2xl:flex-1">
        <UserFilter />
        <UsersList />
      </div>
      <RightSidebar />
    </>
  );
}

export default Users;
