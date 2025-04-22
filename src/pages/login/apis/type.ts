export interface LoginRequestData {
  /** admin 或 editor */
  userName: string
  /** 密码 */
  password: string
  /** 验证码 */
  // code: string
}

export interface LoginResult {
  BaseUserID: number
  Client: number
  CuID: number
  IP: string
  IsNewUser: boolean
  LoginTime: string
  PhoneNumber: string
  ProjectName: string
  Token: string
  UserId: number
  UserName: string
}

export type CaptchaResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<LoginResult>
