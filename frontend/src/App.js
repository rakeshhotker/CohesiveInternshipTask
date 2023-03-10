import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Transactioncrud from "./components/Transactioncrud";
function App() {
  let username = "selena";
  const [transactions, setTransactions] = useState([]);
  var [flag, setFlag] = useState(false);
  return (
    <>
      <div className="flex">
        <div className="w-1/3 h-screen">
          <Sidebar
            username={username}
            transactions={transactions}
            setTransactions={setTransactions}
            flag={flag}
            setFlag={setFlag}
          />
        </div>
        <div className="w-2/3 h-screen">
          <div>
            <Transactioncrud
              username={username}
              transactions={transactions}
              setTransactions={setTransactions}
              flag={flag}
              setFlag={setFlag}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
