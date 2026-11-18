# web-hw2
# 실습과제 #2 : 영화 데이터를 자바스크립트로
- 이름 / 학번 : 이윤 / 2651051
- 사이트 주소 : https://iyun31013-crypto.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-26)


## 구현 항목 체크
-  Part A: data.js에 10칸짜리 배열 4개. app.js에서 for와 if(또는 switch)로 계산한 A1에서 A5 이 다섯 줄이 콘솔에 찍혔습니다.
-  Part B 함수 7개: movies 10건. average, best, filterByRating, sortBy, search, formatNumber, yearsSince가 표의 입력과 출력대로 동작했으며 자가테스트 1-8번도 통과했습니다..
-  Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 C1, C2, 상위 5편 표, C4가 콘솔에 찍힙니다..
-  출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 pre id="out"에 Part B 요약 3줄(textContent 한 번).
-  코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름.
-  제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI 기록, 어느 파일에도 API 키 없음. 


## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기)
| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' | '1,234,567' |
| 2 | average(movies).toFixed(1) | '7.6' | '7.6' |
| 3 | best(movies).title | '너의 이름은' | '너의 이름은' |
| 4 | sortBy(movies, "rating", true)[0].title | '너의 이름은' | '너의 이름은' |
| 5 | filterByRating(movies, 8).length | '4' | '8' |
| 6 | search(movies, " 인터 ").length | '0' | '0' |
| 7 | yearsSince("2014-11-06") | '12' | '12' |
| 8 | movies[0].title | '극장판 치이카와: 인어 섬의 비밀' | '극장판 치이카와: 인어 섬의 비밀' |

5번이 다른 이유: 평점 필터 함수는 처음에 8점 이상인 영화의 정보를 배열 형태로 반환했지만, A3 코드는 조건에 맞는 영화의 개수만 계산하도록 작성되어 있어 출력 결과의 형태가 달랐다.


## 어려웠던 점 3가지와 해결
1. Part A - A4 연도대별 영화 수 배열을 switch문으로 만들기
- 어려웠던 점: 영화 개봉 연도를 기준으로 각각 분단하고, 각 구간에 해당하는 영화 수를 배열에 저장하는 과정에서 switch문을 어떻게 활용해야 할지 어려웠습니다.
- 해결 방법: 먼저 연도별로 구간을 나누어 생각한 뒤, 각 조건에 맞게 case를 작성하였습니다. 여러 번 코드를 실행하면서 영화 수가 각 구간에 제대로 들어가는지 확인하고 수정하였습니다.

2. Part B - document.getElementById()를 활용해 3개의 줄 출력하기
- 어려웠던 점: document.getElementById("out").textContent를 이용해 여러 내용을 한 번에 출력하는 과정에서 줄바꿈을 적용하는 방법과 문장을 연결하는 부분이 헷갈렸습니다.
- 해결 방법: 각 내용을 하나씩 작성한 다음 줄바꿈 기호인 \n을 사용하여 세 줄로 구분했습니다. 실행 결과를 확인하면서 원하는 형태로 출력되도록 수정하였습니다.

3. Part C - TMDB 데이터 오류 찾기
- 어려웠던 점: 없음.
- 해결 방법: x


## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
- google 서치: VS코드 if문과 switch문 전환 방식


## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 : document.getElementById에서 정확히 이게 무슨 역할이야?
- 답변 요약 : HTML문서에서 특정 id를 가진 요소를 찾아오는 역할로 특정 방을 찾아가는 주소 기능으로이용된다.
- 채택 여부 : 채택함 