import { AbstractVO } from "@/models/AbstractVO";

export type SessionProps = {
  userId: string | null;
  token: string | null;
};

export class SessionModel extends AbstractVO<SessionProps> {
  static empty() {
    return new SessionModel({ userId: null, token: null });
  }
}
