import styles from '../styles/Mypage.module.scss';

export default function Mypage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.image_box}>
        <div className={styles.icon}>수정 아이콘</div>
      </div>
      <div className={styles.background}>
        <div className={styles.title}>마이페이지</div>
        <div className={styles.user_list}>
          <div className={styles.user_wrap}>
            <div className={styles.user}>김하나</div>
            <div className={styles.user}>김두리</div>
            <div className={styles.user}>김세찌</div>
          </div>
          <button className={styles.enroll}>아이등록</button>
        </div>
        <div className={styles.info_box}>
          <div className={styles.info_title}>아이 정보보기</div>
          <div className={styles.info_content}>
            <div className={styles.info_a}>생년월일</div>
            <div className={styles.info_b}>2025년 1월 30일</div>
          </div>
          <div className={styles.info_content}>
            <div className={styles.info_a}>성별</div>
            <div className={styles.info_b}>여자</div>
          </div>
          <div className={styles.info_content}>
            <div className={styles.info_a}>신장</div>
            <div className={styles.info_b}>120cm</div>
          </div>
          <div className={styles.info_content}>
            <div className={styles.info_a}>체중</div>
            <div className={styles.info_b}>12kg</div>
          </div>
          <div className={styles.info_content}>
            <div className={styles.info_a}>머리둘레</div>
            <div className={styles.info_b}>30cm</div>
          </div>
        </div>
        <button className={styles.edit_btn}>수정</button>
      </div>
      <div className={styles.invisible}></div>
    </div>
  );
}
