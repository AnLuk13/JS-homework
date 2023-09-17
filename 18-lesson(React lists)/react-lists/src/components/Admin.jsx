import UserCard from "./Card";
import "../styles/Admin.scss";

function Admin() {
  const users = [
    {
      id: 1,
      username: "John",
      lastVisit: "13.09.23",
      isActive: true,
    },
    {
      id: 2,
      username: "Vano",
      lastVisit: "13.09.23",
      isActive: false,
    },
    {
      id: 3,
      username: "Tracy",
      lastVisit: "13.09.23",
      isActive: true,
    },
    {
      id: 4,
      username: "Angus",
      lastVisit: "13.09.23",
      isActive: true,
    },
    {
      id: 5,
      username: "Marcus",
      lastVisit: "13.09.23",
      isActive: true,
    },
    {
      id: 6,
      username: "Ava",
      lastVisit: "13.09.23",
      isActive: false,
    },
    {
      id: 7,
      username: "Mike",
      lastVisit: "13.09.23",
      isActive: false,
    },
    {
      id: 8,
      username: "Angel",
      lastVisit: "14.05.23",
      isActive: true,
    },
  ];

  return (
    <div className="admin-div">
      {users.map((user) => (
        <UserCard data={user} key={user.id}></UserCard>
      ))}
    </div>
  );
}

export default Admin;
