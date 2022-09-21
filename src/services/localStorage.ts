export interface TokensDto {
    jwtToken: string;
    refreshToken: string;
    accessToken: string;
  }
  
  const getUserTokens = (): TokensDto => {
    const tokens: string = window.localStorage.getItem(`${process.env.REACT_APP_LOCAL_STORAGE_NAME}`) ?? '';
    return tokens !== '' ? JSON.parse(tokens) : '';
  };
  
  const setUserTokens = (tokens: TokensDto) => {
    return window.localStorage.setItem(`${process.env.REACT_APP_LOCAL_STORAGE_NAME}`, JSON.stringify(tokens));
  };
  
  export { getUserTokens, setUserTokens };