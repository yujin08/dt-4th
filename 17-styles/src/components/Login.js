import styles from '../styles/Login.module.scss';

export default function Login() {
  return (
    <div className={styles.background}>
      <h1>로그인</h1>
      <div src="#">이미지</div>
      <label for="email">이메일*</label>
      <input type="text" id="email" />
      <label for="password">비밀번호*</label>
      <input type="password" id="password" />
      <button className={styles.btn}>로그인</button>
      <button>카카오 로그인</button>
    </div>
  );
}
