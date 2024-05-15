import Card from "../components/layout/Card/Card";
import Header from "../components/template/home/Header";

const HomePage = () => {
    return (
        <div className="w-screen h-screen">
            <div className="h-[8%]">
                <Header>
                    <div>

                    </div>
                </Header>
            </div>
            <div className="flex items-center justify-center h-[92%] bg-[#F1F5F9]">
                <Card className="bg-[#fff] items-center p-10">
                    <h1>Picture profile</h1>
                </Card>
            </div>
        </div>

    )
}

export default HomePage;