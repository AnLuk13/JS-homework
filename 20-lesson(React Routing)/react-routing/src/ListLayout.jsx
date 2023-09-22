import { Outlet, useNavigation } from "react-router-dom";

function ListLayout() {
  const navigation = useNavigation();
  console.log(navigation.state);
  return <Outlet></Outlet>;
}

export default ListLayout;
