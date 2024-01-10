import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  lead_id?: User | null;
  name: string;
  status: boolean | null;
  updatedAt: Date;
};
