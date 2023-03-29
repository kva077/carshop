import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Parts from "./layouts/parts";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import About from "./layouts/about";
import Users from "./layouts/users";
import AppLoader from "./components/ui/hoc/appLoader";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import Busket from "./layouts/busket";
import Works from "./layouts/works";
import Footer from "./components/ui/footer";
import AddPart from "./components/pages/part/addPart";
import BusketLoader from "./components/ui/hoc/busketLoader";
import EditPartsPage from "./components/pages/part/editPartsPage/editPartsPage";
import PartsLoader from "./components/ui/hoc/partsLoader";

const App = () => {
    return (
        <AppLoader>
            <BusketLoader>
                <PartsLoader>
                    <NavBar />
                    <Switch>
                        <ProtectedRoute
                            path="/user/:userId/:edit?"
                            component={Users}
                        />
                        <ProtectedRoute
                            path="/parts/:partId?/:edit?"
                            component={Parts}
                        />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/logout" component={LogOut} />
                        <ProtectedRoute
                            role="admin"
                            path="/editparts"
                            component={EditPartsPage}
                        />
                        <Route path="/busket" component={Busket} />
                        <ProtectedRoute path="/add" component={AddPart} />
                        <Route path="/about" component={About} />
                        <ProtectedRoute path="/works/:workId?/:edit?" component={Works} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>

                    <Footer />
                </PartsLoader>
            </BusketLoader>
        </AppLoader>
    );
};

export default App;
