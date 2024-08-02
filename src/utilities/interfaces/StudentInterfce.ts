import { IFile, IUser, IYear } from "./PublicInterfce";

export interface IStudent {
  file: IFile | null;
  location: string;
  specialization: string;
  user: IUser;
  fatherPhone: string;
  year:IYear
}
