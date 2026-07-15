import { useAuth } from "@/api/hooks/auth/use-auth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Now
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              You have 4 new notifications this week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                { title: "New subscription payment", time: "2 hours ago", amount: "+$250.00", icon: <CheckCircle2 className="h-4 w-4 text-muted-foreground" /> },
                { title: "System update completed", time: "4 hours ago", amount: "", icon: <Clock className="h-4 w-4 text-muted-foreground" /> },
                { title: "New user registered", time: "5 hours ago", amount: "", icon: <Users className="h-4 w-4 text-muted-foreground" /> },
                { title: "Server usage spike", time: "12 hours ago", amount: "", icon: <Activity className="h-4 w-4 text-muted-foreground" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                    {item.icon}
                  </span>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.time}
                    </p>
                  </div>
                  {item.amount && (
                    <div className="ml-auto font-medium">{item.amount}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your project settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline" className="w-full justify-between">
              Create New Project
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              View Reports
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Manage Team
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
