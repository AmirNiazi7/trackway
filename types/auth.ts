export interface SignInFormData {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

export interface SignInFormErrors {
  email?: string;
  password?: string;
  form?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AuthSuccessState {
  isSubmitted: boolean;
  email: string;
}
