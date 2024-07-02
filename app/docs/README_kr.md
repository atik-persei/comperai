<p align="left">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/atik-persei/comperai/assets/145193070/d6796a9d-e953-43f1-a61e-5444fd8d717e">
      <img src="https://github.com/atik-persei/comperai/assets/145193070/d6796a9d-e953-43f1-a61e-5444fd8d717e" height="180">
    </picture>
  </a>
</p>

![Static Badge](https://img.shields.io/badge/vercel-black)
[![Web Version Badge](https://img.shields.io/badge/web%20version-0.1.0-blue)](http://localhost:3000/docs/getting-started/project-structure#%EB%AA%A8%EB%8D%B8)
[![Model Version Badge](https://img.shields.io/badge/model%20version-1.0.0-blue)](http://localhost:3000/docs/getting-started/project-structure#%EB%AA%A8%EB%8D%B8)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fvercel.com&up_message=Up&down_message=down&link=https%3A%2F%2Fcomperai.org)

ㅤ  

# 📃 시작하기
효과적인 깃허브 이력 관리를 돕는 오픈소스 컴퍼레이를 소개합니다.
ChatGPT를 통해 커밋 스타일 가이드라인을 준수하는 커밋 메시지를 생성합니다.
개인 개발자이든, 대규모 팀의 일원이든 통일된 규칙과 지침을 따라 코드의 일관성 유지와 가독성을 높이고, 협업 원활성을 증대시킬 수 있습니다.
- 컴퍼레이를 시작하려면 [컴퍼레이 소개](https://comperai.org/docs) 과정을 방문하세요.
- 컴퍼레이 결과 예제를 확인하려면  [컴퍼레이 예제](https://comperai.org/docs/getting-started/introduction#%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95) 과정을 방문하세요.
ㅤ  

## 문서
전체 문서를 보려면 [컴퍼레이 문서](https://comperai.org/docs)를 방문하세요.

ㅤ  

## 커밋 규칙
컴퍼레이에서 수행하는 스타일 가이드라인 항목들에 대해 소개합니다.

### 타입
커밋 타입은 3가지의 문법적인 규칙이 존재합니다.
- 소문자로만 작성합니다.
- 이모티콘 뒤에 커밋 타입을 작성합니다.
- 콜론(:) 뒤에는 한칸의 공백을 부여합니다.

### 제목 규칙
수행한 내역을 간단하게 작성합니다.  
커밋 제목은 3가지의 문법적인 규칙이 존재합니다.  
- 50글자 이내로 작성합니다.
- 개조식 구문으로 작성합니다.
- 마침표 및 특수기호를 사용하지 않습니다.

### 본문 규칙
수행한 내역을 최대한 자세하게 작성합니다.  
커밋 제목은 2가지의 문법적인 규칙이 존재합니다.  
- 한줄 당 72자 이내로 작성합니다.
- 무엇을 왜 변경하였는지 작성합니다.


### 출력 결과
```
✨ feat: 덧셈을 수행하는 add 함수 추가

- 두 입력 파라미터의 합을 반환하는 'add' 함수 구현
```

ㅤ  

# 📃 배포
## 빠른 시작
**1단계 - 레포지토리 복사 및 설치**  
저장소를 복제하고, 환경변수를 구성한 후 컴퍼레이를 설치하세요.
```
git clone https://github.com/atik-persei/comperai
cd comperai

echo 'GPT_KEY=<Your GPT API KEY>
GPT_MODEL=<Your GPT Model ID>
GPT_SYSTEM=<Your GPT System Message>
GPT_INPUT_LIMIT=<Your Input Limit Length>' > .env

docker build -t comperai .
docker run -d --name comperai comperai
```
ㅤ  
**2단계 - 컴퍼레이 사용**  
이제 컴퍼레이를 사용하세요.
```
https://<Server ip OR Your ip>
```

ㅤ  

# 📃 다국어 문서
사용자를 위해 문서를 여러 언어로 번역하고 있습니다. 현재는 두 가지 언어를 지원합니다.

<p align="center">
    <a href="https://github.com/atik-persei/comperai">English</a>
    · 
    <a href="/app/docs/README_kr.md">한국어</a>
</p>