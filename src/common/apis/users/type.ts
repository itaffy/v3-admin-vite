export interface UserInfo {
  BaseID: number
  NickName: string
  UserName: string
  Sex: string
  IDCard: null | number
  PhoneNumber: string
  Email: null | string
  Adress: null | string
  LoginIP: string
  LastTime: string
  Pwd: string
  Role: string
  ImgUrl: null | string
}

export type CurrentUserResponseData = ApiResponseData<UserInfo>
