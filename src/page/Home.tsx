import Button from "../components/ui/Button";
import Card from "../components/layout/Card/Card";
import Header from "../components/template/home/Header";
import { Home } from "../components/template/home";
import { useAuth } from "../context/AuthProvider";

const HomePage = () => {
    const {onLogout, user} = useAuth();

    return (
        <div className="w-screen h-screen">
            <div className="h-[10%] w-full">
                <Header>
                    <div className="flex justify-end items-center">
                        <Button className="w-[250px] h-[50px]" label="Logout" onClick={onLogout}/>
                    </div>
                </Header>
            </div>
            <div className="flex items-center justify-center h-[90%] bg-[#F1F5F9]">
                <Card className="bg-[#fff] items-center p-5 gap-5 w-[356px]">
                    <h1>Profile picture</h1>
                    <Home.Avatar avatar={null}/>
                    <Home.Input label="Your Name" value={user?.name} readOnly/>
                    <Home.Input label="Your Email" value={user?.email} readOnly/>
                </Card>
            </div>
        </div>
    )
}

export default HomePage;