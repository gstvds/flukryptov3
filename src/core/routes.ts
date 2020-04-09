import { api } from '.'
import auth from '@react-native-firebase/auth';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface CreateUserPayload {
  email: string;
  password: string;
  name: string;
}

export const getData = async (page: number) => {
  return (await api.get(`data/top/totaltoptiervolfull?limit=20&tsym=USD&page=${page}`));
}

export const login = async (payload: LoginPayload) => {
  try {
    const response = await auth().signInWithEmailAndPassword(payload.email, payload.password);
    return response;
  } catch (error) {
    return error.code;
  }
}

export const signUp = async (payload: CreateUserPayload) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(payload.email, payload.password);
    response.user.updateProfile({
      displayName: payload.name,
    });
  } catch (error) {
    console.log(error);
  }
}

export const logout = async () => {
  try {
    await auth().signOut()
  } catch (error) {
    console.log(error);
  }
}