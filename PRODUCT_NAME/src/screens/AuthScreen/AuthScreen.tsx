import { SectionTitle } from "@/components";

export type AuthScreenProps = {
  mode: "sign-in" | "sign-up";
};

export function AuthScreen({ mode }: AuthScreenProps) {
  return (
    <section>
      <SectionTitle title={mode === "sign-in" ? "Sign In" : "Sign Up"} />
      <p>TODO: implement authentication form for {mode}.</p>
    </section>
  );
}
