import "./styles.css";
import { Button, Card, Row } from "antd";

const Cards = ({
  showExpenseModal,
  showIncomeModal,
  income,
  expense,
  currentBalance,
  resetBalance,
}) => {
  return (
    <div>
      <Row className="card-row container">
        <Card className="mycard">
          <h2 className="title">Current Balance</h2>
          <p>₹{currentBalance}</p>
          <Button className="btn reset-balance-btn" onClick={resetBalance}>
            Reset Balance
          </Button>
        </Card>
        <Card className="mycard">
          <h2 className="title">Total Income</h2>
          <p>₹ {income}</p>
          <Button className="btn reset-balance-btn" onClick={showIncomeModal}>
            Add Income
          </Button>
        </Card>
        <Card className="mycard">
          <h2 className="title">Total Expenses</h2>
          <p>₹ {expense}</p>
          <Button className="btn reset-balance-btn" onClick={showExpenseModal}>
            Add Expense
          </Button>
        </Card>
      </Row>
    </div>
  );
};

export default Cards;