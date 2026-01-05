import ExpenseTrackerForm from './components/ExpenseTrackerForm/ExpenseTrackerForm';
import ExpenseList from './components/IncomeExpenseList/expenseList';
import IncomeList from './components/IncomeExpenseList/IncomeList';
import TotalBalance from './components/TotalBalance/TotalBalance';

export default function ExpenseBoard() {
    return (
        <>
            <div class="relative mx-auto mt-10 w-full max-w-7xl">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ExpenseTrackerForm />

                    <div class="lg:col-span-2">
                        <TotalBalance />

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                            <IncomeList />
                            <ExpenseList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
