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

export interface IFeedBack {
  id: string;
  userId: string;
  text: string;
  isConfirmed: boolean;
  name: string;
  imgUrl: string;
}

export interface IAddFeedBack {
  userId: string;
  text: string;
}

export interface IResetPassword {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}

export interface ISubject {
  description: string;
  id: string;
  imgId: string;
  name: string;
  fileUploads: IFile;
}

export interface ITeacher {
  user: IUser;
  description: string;
  yearsofExperience: string;
  id: number;
}

export interface IYear {
  name: string;
  id: string;
}

export interface ILesson {


  
}
