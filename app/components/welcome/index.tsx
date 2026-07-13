import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useBase } from "@/api/hooks/base";
import WelcomeSkeleton from "@/components/welcome/skeleton";

export default function WelcomePage() {
  const { data, isPending, isError, error } = useBase();

  if (isPending) {
    return <WelcomeSkeleton />;
  }

  return (
    <div className="grid gap-4 p-2 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>API Information</CardTitle>
          <CardDescription>General information about the API.</CardDescription>
        </CardHeader>

        <CardContent>
          {isError ? (
            <p>Version: api error</p>
          ) : (
            <p>Version: {data?.apiVersion}</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Check</CardTitle>
          <CardDescription>Current status of the service.</CardDescription>
        </CardHeader>

        <CardContent>
          {isError ? (
            <p className="text-red-600">{error.message}</p>
          ) : (
            <p className="text-green-600">{data?.message}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
