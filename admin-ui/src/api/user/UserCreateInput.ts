import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
