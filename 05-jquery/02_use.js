// val() - value
function getValue() {
  // js
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jQuery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  // document.querySelector('input').value = '하이!'

  // jQuery
  $('input').val('하이하이!');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style.fontSize = '20px'; // 인라인 방식
  span.style.color = 'red';
}

function changeCssJquery() {
  // case 1
  $('span').css('font-size', '40px'); // css 스타일
  $('span').css('color', 'blue');

  // case2 - css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
    color: 'blue', // 모든 span에 대해 폰트 색상 변경
  });
}

function getCssJquery() {
  // js
  // console.log(document.querySelector('span').style.color)
  // style 객체는 인라인 스타일에 설정된 값만 가져올 수 있음

  // jQuery
  console.log($('span').css('color'));
  // .css() 메서드는 브라우저에게 계산된 스타일 값을 반환
  // 계산된 스타일을 반환하므로, 인라인 스타일뿐만 아니라 모든 적용된 스타일 정보를 가져올 수 있음
  // 반환 값은 대부분 RGB형식
}

// attr()
function changeAttrJS() {
  // Quiz
  // a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');
  a.setAttribute('href', 'https://www.naver.com'); // HTML 속성 값을 설정하는 방법
  a.href = 'https://www.naver.com'; // DOM 요소의 속성에 직접 접근하는 방법
}

function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net/');
}

function changeTextJS() {
  // Quiz
  // p-text 클래스를 갖는 요소를 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const p = document.querySelector('.p-text');
  p.innerText = 'js로 텍스트 변경함.';
}

function changeTextJquery() {
  $('.p-text').text('jquery로 텍스트 변경함.');
}

// html()
function changeHtmlJS() {
  // 퀴즈
  // p-html 클래스를 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const p = document.querySelector('.p-html');
  p.innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // Quiz
  // 1. colors 클래스 갖는 요소 선택하고
  const colors = document.querySelector('.colors');

  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');

  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  li.innerText = '마지막 자식으로 추가된 js';

  // 4. colors 클래스를 갖는 요소에 '맨 마지막 자식'으로 li 요소 추가
  colors.append(li);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>'); // 태그도 적용됨!
}

// prepend()
function prependJS() {
  const color2 = document.querySelector('.colors');
  const li = document.createElement('li');
  li.innerText = '첫 자식으로 추가된 js';
  color2.prepend(li);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const green = document.querySelector('.green');

  // 2. li 태그 요소 생성한 후
  const li = document.createElement('li');

  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';

  // 4. li 요소의 color 색깔을 blue
  li.style.color = 'blue';
  //   li.setAttribute('style', 'color: blue');

  // 5. green 클래스를 갖는 요소의 '바로 이전 형제 요소'로 li 요소 추가
  green.before(li);
}

function beforeJquery() {
  $('.green').before(
    '<li style="color: blue">green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
  );
}

// after()
function afterJS() {
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.innerText = '다음 형제요소로 추가(js)';
  green.after(li);
}

function afterJquery() {
  $('.green').after('<li>다음 형제요소로 추가(jquery)</li>');
}

// 요소 삭제하기
// remove()
function removeJS() {
  // Quiz
  // li2 아이디 갖는 요소 선택하여 그 요소 삭제
  const li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  // 참고! js에서는 empty 메서드가 없습니다.
  // 1. ul 태그이자 nums 클래스를 갖는 요소를 선택 후
  const nums = document.querySelector('ul.nums');

  // 2. 해당 요소의 HTML을 빈 문자열로 설정
  nums.innerHTML = '';
}

function emptyJquery() {
  $('.nums').empty();
}
