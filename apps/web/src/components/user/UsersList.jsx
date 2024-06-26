import { authors } from '../../data/user';
import UserData from './UserData';

function UsersList() {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full">
        <tbody>
          {authors?.map((item, index) => (
            <UserData key={item.id} userInfo={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
