import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type VerifyEmailDataInput, verifyEmailSchema } from "@/lib/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/api/hooks/auth/use-auth";
import { useVerifyEmail, useVerifyEmailToken } from "@/api/hooks/auth";
import { useEffect } from "react";

export default function VerifyEmailForm() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { handleSubmit, register } = useForm<VerifyEmailDataInput>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      token: token || "",
    },
  });

  const sendVerificationRequest = useVerifyEmail();
  const verifyEmailToken = useVerifyEmailToken();

  useEffect(() => {
    if (token) {
      verifyEmailToken.mutate({ token });
    }
  }, [token]);

  const onSubmit: SubmitHandler<VerifyEmailDataInput> = (data) => {
    verifyEmailToken.mutate(data);
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Verify Email</h1>
                <p className="text-balance text-muted-foreground">
                  {token
                    ? "Verifying your email..."
                    : `An email has been sent to ${user?.email}. Please check your inbox and enter the verification token below.`}
                </p>
              </div>

              {!token && (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <Field>
                    <FieldLabel htmlFor="token">Verification Token</FieldLabel>
                    <Input
                      id="token"
                      type="text"
                      placeholder="Paste your token here"
                      {...register("token")}
                      required
                    />
                  </Field>
                  <Field>
                    <Button type="submit" disabled={verifyEmailToken.isPending}>
                      {verifyEmailToken.isPending ? "Verifying..." : "Verify Token"}
                    </Button>
                  </Field>

                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                    Didn't receive it?
                  </FieldSeparator>

                  <Field>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => sendVerificationRequest.mutate()}
                      disabled={sendVerificationRequest.isPending}
                    >
                      {sendVerificationRequest.isPending ? "Sending..." : "Resend Email"}
                    </Button>
                  </Field>
                </form>
              )}
            </FieldGroup>
          </div>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
