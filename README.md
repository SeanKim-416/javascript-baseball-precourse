# ⚾ 미션 - 숫자 야구 게임

## 🎯 기능 요구사항

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
  - 123을 제시한 경우 : 1스트라이크
  - 456을 제시한 경우 : 1볼 1스트라이크
  - 789를 제시한 경우 : 낫싱
- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작할 수 있다.
- 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다.
  - `예) <button id="game-restart-button">재시작</button>`

<br>

## 기능구현

### createComputerNum.js

#### makeRandomIndex : 랜덤한 정수를 반환하는 함수

- 배열의 길이를 인자로 받음.

#### createComputerNum : 컴퓨터의 숫자를 만드는 함수

- 1~9까지의 배열을 저장
- makeRandomIndex를 호출하여 인덱스를 지정
- 배열의 지정된 인덱스 값을 가져와 문자열에 합침
- 중복된 숫자가 나오지 않도록 배열에서 해당 인덱스 값은 제외함
- 3번 반복 후 문자열 반환

### play : 확인 버튼 이벤트 리스너 콜백

- 세부 동작은 추후 작성 예정

### getUserInput : 유저의 입력값을 가져오는 함수

- 문자열로 반환함
- 숫자가 아니면 아무것도 반환하지 않음

### getResult : 비교 수행

- 3번 반복
- 내 숫자가 상대의 숫자와 같은 인덱스의 위치에 있으면 strike 증가
- 내 숫자가 존재하기만 하면 ball 증가
