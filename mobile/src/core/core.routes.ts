import core, { api } from '.'
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
    core.loading.set(true);
    const response = await auth().signInWithEmailAndPassword(payload.email, payload.password);
    return response;
  } catch (error) {
    console.log(`loginError: ${error}`);
    return error.code;
  } finally {
    core.loading.set(false);
  }
}

export const signUp = async (payload: CreateUserPayload) => {
  try {
    core.loading.set(true)
    const response = await auth().createUserWithEmailAndPassword(payload.email, payload.password);
    response.user.updateProfile({
      displayName: payload.name,
    });
  } catch (error) {
    console.log(`signUpError: ${error}`);
  } finally {
    core.loading.set(false);
  }
}

export const logout = async (navigate: (stack: string) => void) => {
  try {
    core.loading.set(true);
    await auth().signOut()
    core.user.state.currentUser.reset();
    core.user.state.credentials.reset();

    navigate('Loading');
  } catch (error) {
    console.log(`logoutError: ${error}`);
  } finally {
    core.loading.set(false);
  }
}

export const getIdToken = async () => {
  try {
    core.loading.set(true);
    if (auth().currentUser) {
      const idToken = await auth().currentUser?.getIdToken();
      const uid = await auth().currentUser?.uid;
      core.user.state.credentials.set({ uid, idToken });
    }
    if (auth().currentUser?.isAnonymous) core.user.state.currentUser.set({ status: 'loaded', isAnonymous: true })
    else if (!auth().currentUser?.isAnonymous) core.user.state.currentUser.set({ status: 'loaded', isAnonymous: false })
  } catch (error) {
    console.log(`getIdToken: ${error}`);
  } finally {
    core.loading.set(false);
  }
}

export const getUser = async () => {
  try {
    core.loading.set(true);
    const { currentUser } = auth();
    if (currentUser === null) {
      await auth().signInAnonymously();
      core.user.state.currentUser.set({ status: 'loaded', isAnonymous: true });
    } else if (currentUser && typeof currentUser === 'object') {
      await getIdToken();
    }
  } catch (error) {
    console.log(`getUserError: ${error}`);
  } finally {
    core.loading.set(false);
  }
}