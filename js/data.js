const platforms = [
    {
        name: "크몽",
        category: "freelance",
        description: "한국 최대 프리랜서 마켓플레이스. 디자인, 개발, 마케팅, 번역 등 50만+ 전문가가 활동 중입니다.",
        link: "https://kmong.com/",
        earning: "월 50-500만원",
        difficulty: "⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/kmong_placeholder.png"
    },
    {
        name: "탈잉",
        category: "teaching",
        description: "원데이 클래스, 온라인 강의로 내 재능을 수익화. 요리, 운동, 취미 등 다양한 분야의 수업 개설 가능.",
        link: "https://taling.me/",
        earning: "월 30-300만원",
        difficulty: "⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/taling_placeholder.png"
    },
    {
        name: "숨고",
        category: "service",
        description: "생활 밀착형 서비스 플랫폼. 인테리어, 청소, 레슨, 이사 등 실생활 서비스 제공으로 수익 창출.",
        link: "https://soomgo.com/",
        earning: "월 100-800만원",
        difficulty: "⭐⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/soomgo_placeholder.png"
    },
    {
        name: "위시켓",
        category: "dev",
        description: "IT 프로젝트 외주 플랫폼. 개발자, 디자이너를 위한 고단가 프로젝트 매칭 서비스.",
        link: "https://www.wishket.com/",
        earning: "월 200-1000만원+",
        difficulty: "⭐⭐⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/wishket_placeholder.png"
    },
    {
        name: "오투잡",
        category: "freelance",
        description: "마케팅, 영상 편집, 데이터 입력 등 간단한 작업부터 전문 프로젝트까지 다양한 부업 기회.",
        link: "https://o2job.co.kr/",
        earning: "월 20-200만원",
        difficulty: "⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/o2job_placeholder.png"
    },
    {
        name: "프립",
        category: "teaching",
        description: "취미, 여행, 액티비티 호스트 모집. 내가 좋아하는 일을 하면서 수익 창출!",
        link: "https://www.frip.co.kr/",
        earning: "월 50-400만원",
        difficulty: "⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/frip_placeholder.png"
    },
    {
        name: "숨은고수",
        category: "service",
        description: "전문가 매칭 플랫폼. 과외, 레슨, 수리, 청소 등 생활 서비스를 제공하며 안정적 수익.",
        link: "https://soomgo.com/",
        earning: "월 80-600만원",
        difficulty: "⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/soomgo2_placeholder.png"
    },
    {
        name: "클래스101",
        category: "teaching",
        description: "내 취미와 재능을 온라인 강의로! 수강생이 많을수록 자동으로 수익이 쌓이는 구조.",
        link: "https://class101.net/",
        earning: "월 10-500만원",
        difficulty: "⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/class101_placeholder.png"
    },
    {
        name: "인프런",
        category: "teaching",
        description: "IT 개발 강의 플랫폼. 프로그래밍, 데이터 사이언스 등 전문 지식으로 수익화.",
        link: "https://www.inflearn.com/",
        earning: "월 30-1000만원+",
        difficulty: "⭐⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/inflearn_placeholder.png"
    },
    {
        name: "아이디어스",
        category: "selling",
        description: "핸드메이드 작품 판매 플랫폼. 수공예품, 디지털 아트, 맞춤 제작품 등 판매 가능.",
        link: "https://www.idus.com/",
        earning: "월 50-500만원",
        difficulty: "⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/idus_placeholder.png"
    },
    {
        name: "브랜디",
        category: "selling",
        description: "온라인 쇼핑몰 플랫폼. 의류, 잡화 등을 직접 소싱하여 판매하는 리셀러 부업.",
        link: "https://www.brandi.co.kr/",
        earning: "월 100-1000만원+",
        difficulty: "⭐⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/brandi_placeholder.png"
    },
    {
        name: "쿠팡 파트너스",
        category: "affiliate",
        description: "제휴 마케팅의 정석! 블로그, 유튜브로 상품 추천하고 수수료 받기.",
        link: "https://partners.coupang.com/",
        earning: "월 10-300만원",
        difficulty: "⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/coupang_placeholder.png"
    },
    {
        name: "에이블리 파트너스",
        category: "affiliate",
        description: "패션 쇼핑몰 제휴 프로그램. 여성 패션 타겟으로 높은 전환율!",
        link: "https://a-bly.com/",
        earning: "월 20-200만원",
        difficulty: "⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/ably_placeholder.png"
    },
    {
        name: "당근마켓 프로",
        category: "selling",
        description: "중고 거래를 넘어 비즈니스로! 당근 프로로 전문 판매자 등록 후 지역 기반 수익.",
        link: "https://www.daangn.com/",
        earning: "월 30-500만원",
        difficulty: "⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/daangn_placeholder.png"
    },
    {
        name: "번역가 네트워크",
        category: "freelance",
        description: "외국어 실력을 돈으로! 문서 번역, 영상 자막 번역 등 다양한 번역 프로젝트.",
        link: "https://www.gentranslator.com/",
        earning: "월 50-400만원",
        difficulty: "⭐⭐⭐⭐",
        image: "https://storage.googleapis.com/gemini-prod/images/translator_placeholder.png"
    }
];
