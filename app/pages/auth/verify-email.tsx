import VerifyEmailForm from "@/components/auth/verify-email/verify-email-form";

export default function VerifyEmail() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <VerifyEmailForm />
      </div>
    </div>
  );
}
