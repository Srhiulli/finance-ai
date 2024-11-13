import { db } from "../_lib/prisma";

const Transaction = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          {transaction.amount} - {transaction.name}
        </div>
      ))}
    </div>
  );
};

export default Transaction;
