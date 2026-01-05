import { studentData, adminSummaries, systemAlerts } from '@/lib/data';
import SummaryCard from './SummaryCard';
import Alerts from './Alerts';
import AIInsight from './AIInsight';
import AcademicPerformanceChart from './AcademicPerformanceChart';
import WellnessBreakdownChart from './WellnessBreakdownChart';
import StudentDataTable from './StudentDataTable';


export default function AdminDashboard() {

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {adminSummaries.map((summary) => (
          <SummaryCard key={summary.id} summary={summary} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="col-span-1 lg:col-span-3">
          <AcademicPerformanceChart />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <WellnessBreakdownChart />
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
           <StudentDataTable />
        </div>
        <div className="flex flex-col gap-6">
          <AIInsight />
          <Alerts alerts={systemAlerts} />
        </div>
      </div>
    </div>
  );
}
