import axios, { AxiosInstance } from 'axios';

// const SERVER_URL = 'http://localhost:9090/api/'

const SERVER_URL = 'https://j8a707.p.ssafy.io/api/'
const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('accessToken') : null;

// 로그인 후 사용할 axios (-> 토큰이 필요한 경우)
export const authAxios: AxiosInstance = axios.create({
    baseURL: `${SERVER_URL}`,
    headers: {
        Authorization: 'Bearer ' + accessToken || '',
    },
});

authAxios.defaults.withCredentials = true;

// 로그인이 필요없는 axios
export const defaultAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_URL}`,
});

authAxios.interceptors.response.use(
  res => res,
  err => {
    console.log('interceptor:' + err.response.status);
    if (err.response.status === 403) refreshAPI();
  },
);

// 토큰 재발급
export const refreshAPI = async () => {
  await axios
    .post(
      `${SERVER_URL}/user/auth`,
      {},
      {
        headers: {
          'refresh-token': localStorage.getItem('refresh_token') || '',
        },
      },
    )
    .then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      // alert('인증 갱신 완료.');
      window.location.href = '/';
      localStorage.setItem('isLogin', 'true');
    })
    .catch(err => {
      console.log(err);
      alert('인증 갱신에 실패했습니다! 로그아웃 후 다시 로그인해주세요.');
    });
};


export const logout = () => {
  localStorage.removeItem('access_token');
  window.location.href = '/login';
};
