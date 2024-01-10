import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  projects?: ProjectWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
