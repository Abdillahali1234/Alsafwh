export interface IUser {
  email: string;
  fileUploads: IFile;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  gender: string;
}

export interface IFile {
  publicId: string;
  typeRecourse: number;
  url: string;
  name: string;
}
