import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  lead_id?: UserWhereUniqueInput | null;
  name?: string;
  status?: boolean | null;
};
