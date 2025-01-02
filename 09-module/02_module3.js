// #3. default
export default function div(a, b) {
  return a / b;
}

/* * 기본 CLI 명령어
GUI - 그래픽 유저 인터페이스: 그래픽 컴퓨터한테 명령
CLI - (command line interface) : 명령어로 컴퓨터한테 명령
프롬프트(prompt): 컴퓨터가 사용자에게 명령어를 입력 받을 준비가 되었다고 알리는 것.

<git bash, terminal 에서 사용 가능한 명령어>

pwd(print working directory) : 현재 나의 위치 출력
~(home): 홈의 위치 (/c/user/계정명) -> 윈도우 기준

ls(list segements): 현재 위치에서 디렉토리, 파일 목록 확인
ls -a (all): 숨김 파일도 다 나옴

*숨김폴더/파일이란?
-> .으로 시작하며 시스템에는 존재하나 기본적으로 나타나지 않는 폴더/파일

ls -l(long): 파일/디렉토리 정보를 자세히 표시하는 옵션
ls -al: 모든 파일 자세히 (옵션 a + l 합친 것)
clear: 출력 내용 다 지우기 (터미널 청소)

cd(change directory): 디렉토리 위치 변경 (위치 이동)
cd .. : 한 단계 위로 올라감.
.. : 부모 폴더 의미
. : 현재 폴더 의미 (자기 자신)
mkdir(make diretory) 폴더이름 : 폴더 새로 만들기
touch 파일이름 : 파일 새로 만들기.
rm 파일이름 : 파일 삭제
rmdir (remove diretory) 폴더이름 : 폴더 삭제

*파일, 폴더, 이름 지을 때 주의할 점.
공백(space bar) 대신에 언더스코어(_) 혹은 하이픈(-)을 사용해서 단어 조합.
한글 제발 쓰지 마세요! 영어, 대소문자를 사용하고 숫자도 상관없음. */
