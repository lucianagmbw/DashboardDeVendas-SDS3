import BarChat from "components/BarChat";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3" >Dashboard de vendas</h1>

                <div className="row px-3">

                    <div className="col-sm-6">
                        <h5>Todas vendas</h5>
                        <BarChat />
                    </div>

                    <div className="col-sm-6">
                        <h5>Todas vendas</h5>
                        <DonutChart />
                    </div>


                </div>


                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;