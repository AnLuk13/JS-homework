import { Outlet, useNavigation } from "react-router-dom";

function ListLayout() {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <>
      {navigation.state === "loading" && <div>Loading...</div>}
      {navigation.state === "idle" && <Outlet></Outlet>}
    </>
  );
}

export default ListLayout;
