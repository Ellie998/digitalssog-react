## 개요

### 배포 링크
: https://digitalssog.com

### 프로젝트 목적

- 디지털 기기를 사용하는 방법에 대한 정보를 제공한다.
- 사용자가 기기의 화면과 동일한 미리보기 화면으로 기능을 직접 경험해보며 디지털 기기를 학습할 수 있는 기회를 제공한다.

### 목표

- 디지털 기기의 정보를 가장 많이, 손쉽게 익힐 수 있도록 돕는 서비스
- 어플이나 기기의 버전(릴리즈 버전, sw 버전 등)에 따라 달라지는 화면 구성에 대한 정보를 저장하여, 이전 버전의 사용자들도 언제든 사용 방법(how to use)에 대한 정보에 손쉽게 접근할 수 있는 서비스를 만든다.
### 미리보기
![main체험](https://github.com/Ellie998/digitalSSOG-next/assets/89681100/a4210fce-284c-49ec-9115-ed0377490cf1)
![기능설명체험영상](https://github.com/Ellie998/digitalSSOG-next/assets/89681100/ed88b219-0e2f-42e6-900a-5c66e8a42936)


### 사용 라이브러리

- 프레임워크
    - next 13.4.8 (app router)
    - react 18.2.0
    - react-dom 18.2.0
- 스타일
    - tailwind
    - mui
    - shadcn-ui
    - bootstrap-icons 1.10.5
    - react-icons 4.12.0
- form
    - react-hook-form 7.48.2
    - zod 3.22.4
    - uuid 9.0.1
    - react-toastify 9.1.3
- 데이터베이스
    - prisma/client 5.11.0
- 상태관리
    - recoil 0.7.7
- 인증
    - supabase 2.39.3

## 기능

### 용어 정리

- 기능 설명
    - <img width="200" alt="스크린샷 2024-03-15 오후 8 22 18" src="https://github.com/Ellie998/digitalSSOG-next/assets/89681100/68ff99b1-5036-40f7-b041-0b0a8e931ba7">

    - 기능을 사용하기 위한 순차적인 방법을 나열해놓은 것
    - 설명을 누르면 그 설명에 해당하는 기기화면을 보여준다.
- 기기 화면
    - <img width="200" alt="스크린샷 2024-03-15 오후 8 22 40" src="https://github.com/Ellie998/digitalSSOG-next/assets/89681100/72040163-f919-4164-be37-43b14d6afd88">

    - 기능 설명에 해당하는 기기 화면이다.
    - 실제 기기와 동일하게 동작한다.
    - 기기 화면에서 타겟을 누르면 다음 설명 화면으로 넘어간다.

### 제공 중인 기능

- 사용자
    - 디지털 기기의 기능 설명 제공
    - 디지털 기기의 기능 설명의 이해를 돕는 기기 화면을 제공
    - 로그인 기능
- 관리자
    - 디지털 기기의 기능 설명 데이터를 작성할 수 있는 form 제공

### 사이트 구조

- /   
    - <img width="200" alt="스크린샷 2024-03-15 오후 8 20 04" src="https://github.com/Ellie998/digitalSSOG-next/assets/89681100/6596fff1-c362-40c5-9782-8d9f1bbeb298">
    - 가장 먼저 보이는 페이지
    - /description/[기능이름]의 Link 제공
- /description/[기능이름]
    -    <img width="200" alt="스크린샷 2024-03-15 오후 8 21 36" src="https://github.com/Ellie998/digitalSSOG-next/assets/89681100/e6b6cadb-a218-417c-96ec-be807ec926bd">
 
    - 기능 설명을 위한 페이지
    - 각 기능별 사용 방법들과 사용 방법의 이해를 돕는 기기 화면을 제공
- /admin
    - [깃허브 링크](https://github.com/Ellie998/digitalSSOG-vanila)

### 추가하고 있는 기능

관리자 페이지에서 컨텐츠 생성을 효율적이고 빠르게 하는 방법에 대해 고민, 개선 중

- 기기 화면과 관련된 데이터를 DB에 저장할 수 있도록 데이터 처리 방법과 데이터 생성 방법을 개선중이다.
    - 기존
        
        컴포넌트 하나하나 코드로 작성하여 구현
        
    - 진행 중
        
        기능 설명과 기기 화면 정보를 연결하여, 데이터베이스에서 기기 화면 데이터를 불러와 
        

### 추가하고 싶은 기능

- 댓글 작성
- 좋아요 기능
- 로그인한 사용자에 한하여 기능을 즐겨찾기할 수 있는 기능
- 로그인한 사용자에 한하여 배우고 싶은 기능을 찜할 수 있는 기능
- 왕초보자를 위한 기능 제공 : 디지털 기기의 가장 기본 기능들의 설명을 모아놓은 화면 제공

### 개선하고 싶은 부분

- 페이지 성능 개선
- 페이지 디자인 개선

## 프로젝트 구현

### git flow

![git flow](https://github.com/Ellie998/digitalSSOG-next/assets/89681100/a39e8825-8ee2-4142-8eaf-445aa63e088f)

- main
    - 최종 배포를 위한 브랜치
- hotfix
    - main에서 급하게 수정해야 할 때 사용하는 브랜치
- dev
    - 자잘한 개선을 포함하는 브랜치
- feature
    - dev 브랜치로부터 나와, 새로운 기능을 개발, 개선하기 위한 브랜치
