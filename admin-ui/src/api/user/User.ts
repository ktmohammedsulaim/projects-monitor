import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Project | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
