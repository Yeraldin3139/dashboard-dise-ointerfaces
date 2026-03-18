import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ChartCard from "../../components/ChartCard";
import PaymentGoalCard from "../../components/PaymentGoalCard";
import TotalBalanceCard from "../../components/TotalBalanceCard";
import CreditCard from "../../components/CreditCard";
import MandatoryPayments from "../../components/MandatoryPayments";
import PaymentHistory from "../../components/PaymentHistory";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      <Navbar />
      <div className="flex p-4 gap-3">
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-4">
          <Header />

          {/* Top row: 3 columns */}
          <div className="grid grid-cols-3 gap-4">
            <PaymentGoalCard />
            <ChartCard />
            <TotalBalanceCard />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <PaymentHistory />
            </div>
            <div className="flex flex-col gap-4">
              <CreditCard />
              <MandatoryPayments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
