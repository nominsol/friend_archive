(function() {
    "use strict";

    /**
     * Gallery Navigation
     */
    const galleryImages = [
        { src: 'assets/img/archive/1.jpg', description: '우리 유럽에서 정말 좋았는데..그치! 파리는 너무 더웠지만 좋았어 난 개인적으로 이 사진이 되게 맘에 들어 뭔가 자매같지 않아? 소영쨩은 유럽여행에 대해 나한테 못해준걸 아쉬워하지만 난 평생 이 기억으로 살 정도로 좋은 기억이야 2주 여행에 있어서 아쉬운 부분은 남을 수 밖에 없다고 생각해 !! 아직도 술자리에서 유럽여행 얘기 꺼낼 정도로 좋았다구..돈 마니 모아서 또 해외여행 가자 !!!!' },
        { src: 'assets/img/archive/2.jpg', description: '여기 공원 너무 예뻤어.. 날씨도 좋고 푸릇푸릇해서 정말 사진도 잘 나왔지 걷는 곳마다 포토존인 느낌? 여유롭고 포근했던 기억이야 이 사진이 마음에 들어서 메인화면 배경도 이 사진으로 결정했지!!' },
        { src: 'assets/img/archive/3.jpg', description: '이 그림 기억나? 소영쨩 그려준건데 소영이가 엄청 맘에 들어해서 나도 진짜 행복했어 내가 생각하는 전소영 감성..뽀용뽀용귀염우웅 감성..이 그림의 비하인드 스토리가 있어. 그때 너가 어떤 작가님 사진 보여주면서 너 스타일이라고 해서 그분 그림들 정독하면서 최대한 비슷하게 해봤어 물론 따라하지는 않고 분위기 참고만 했지! 저 때의 나는 소영이 그려주는게 좋았어' },
        { src: 'assets/img/archive/4.jpg', description: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ이 날 기억나? 우리 기숙사 살면서 웃긴 일화 진짜 많았는데 이 날 새벽에 편의점 가는데 나 잠옷에 걍 롱패딩 입고 너 선배한테 받은 과잠입고 진짜 패션 레전드 노숙자였자나 ㅋㅋㅋㅋ 새벽에 편의점 가서 참치김치컵밥 먹는게 우리 일상이었는데 그치' },
        { src: 'assets/img/archive/5.jpg', description: '기숙사에서의 일상은 배달음식이랑 심야괴담회 or 수탉 공포게임 영상이었지 반복되는 일상임에도 항상 새롭고 즐거웠어 맨날 치킨, 마라탕, 피자 먹구 그러다가 음식 먹고 배부르면 침대에 같이 누워서 영상 보다가 그냥 잠들어버리구 ㅋㅋㅋㅋㅋㅋ냉장고 없어서 남은 음식은 담날 아침에 바로 먹을 때도 많았는데, 상한 마라탕 먹은 순간은 정말 충격이었어..아직도 썩은 청경채 맛이 기억나' },
        { src: 'assets/img/archive/6.jpg', description: '전소영 만취해서 온 날.. 선배들이 데려다 주셔서 내가 1층에서 데려왔자나 근데 옆에서 난리치다가 라면 엎고 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 다른 날에는 컵밥엎었자나 그냥 못말리는 짱구가 따로 없삼' },
        { src: 'assets/img/archive/7.jpg', description: '기숙사 첫 날 !!!!집에서 나온 것도 처음인데 친구랑 같이 사는게 너무 두근두근 했어 기숙사에 먼저 들어간건 나였는데 혼자 짐풀고 있는데 너무 설렜다? 처음 너 꽃무늬 이불 봤을 때 개웃겼는데 ㅋㅋㅋㅋㅋ기숙사에서 같이 생활한게 대학시절 했던 모든 것들 중에 가장 기억에 많이 남을 지 몰랐지 저때는' },
        { src: 'assets/img/archive/8.jpg', description: '이거 내가 인스타스토리에 좋아요 누르는 사람?한테 그 사람에 대한 거 써줬던건데 전소영에 대해 썼던거야 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ2020년부터 너 좋아했나봐 근데 정치질 잘하는건 이미 파악 끝났었네 ^^ 그리고 전설의 대포,블루 스틸 사건 ㄷㄷ' },
        { src: 'assets/img/archive/9.jpg', description: '내 졸업식에서 찍었던 사진 !! 이 사진만 보면 울컥해..20살 때부터 바보같이 놀던 우리가 벌써 졸업이고 진짜 어른이 된 기분? 내 졸업식도 어제같은데 벌써 소영이 졸업식인게 안 믿겨 정말루 이 사진은 나중에 우리 자식들한테도 보여주자 ㅎㅎㅎ' },
        { src: 'assets/img/archive/10.jpg', description: '아 이사진은 최근인데 개웃겨 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ걍 둘다 만취인데 난 진짜 개쓉만취..이 날 많은 일이 있었지..근데 넘 재밌어썽 ㅋㅋㅋㅋ 강남에서 같이 카공하자고 해놓고 수다만 겁나 떨다가 바로 술마셔버리기~!코다차야 마라짬뽕은 전설이다... 너랑 둘이 술만 마시면 만취하는 것 같아.. 근데 너랑 술 마시면 너무너무너무너무 재밌고 행복해서 조절이 안돼' },
        { src: 'assets/img/archive/11.jpg', description: '술 마시기 전 멀쩡했던 순간.. 이 날 우리 둘다 너무 예뻤어!! 완전 꾸꾸꾸 데이였지 20살 때 찍었던 사진 따라한건데 얼굴은 너무 성숙해져버린,,시간 왤케 빠른거야~!~! ' },
        { src: 'assets/img/archive/12.jpg', description: '헤헤 내가 뽑아 준 인형 내 것도 뽑아서 커플인형이지로옹 너가 갖고싶다 한 인형 금방 뽑아버려서 너무 뿌듯했다?' },
        { src: 'assets/img/archive/13.jpg', description: '내 배경화면 추천 사진에 너 엽사가 젤 많이 뜬다?ㅋㅋㅋㅋㅋㅋㅋㅋ왜 그런지는 모르겠어 엽사말고 예쁜사진도 뜨긴하는데 젤 웃긴 사진들이 개 많이 떠' },
        { src: 'assets/img/archive/14.jpg', description: '크리스마스 이브 날! 이승주랑 너랑 나랑 셋이 노는데 정말 행복했어 열심히 꾸미고 갔는데 너가 예쁘다고 해줘서 기분 좋았지 힛 술을 많이 마시지는 않았지만 이브답게 잔잔하고 평화로우면서 나름 들뜨는 연말 분위기를 제대로 즐길 수 있었어 헤어지기 직전에 눈 오는 것도 정말 낭만 미쳤었는데.. 화이트 크리스마스 이브를 같이 즐길 수 있어서 좋았어' },
        { src: 'assets/img/archive/15.jpg', description: '한국민속촌 간 날이징 민진이랑 같이 놀아줘서 너무 고마워.. 민진이가 진짜 좋아했어!! 이 때 이후로 자꾸 민진이가 너 찾더라 ㅋㅋㅋㅋㅋ한복입은 전소영은 진짜 레전드였는데.. 모르는 아기가 너보고 "혹시 공주님이세요..?" 했잖아 ㅋㅋㅋㅋㅋ 동심지켜주겠다고 공주라고 한 너도 기여웠어 근데 진짜 추워서 콧물훌쩍훌쩍 나왔엉 ㅋㅋㅋㅋ 전에 막걸리 먹은거..넘 좋았어..^^ㅎㅎㅎㅎ' },
        { src: 'assets/img/archive/16.jpg', description: '한 명은 공밤MC 한 명은 공연한 날 !! 이 때 전소영은 ㄹㅇ 전설임..살 빼가지고 홀쭉한데 스타일링도 넘넘 잘 어울렸어 나 너 춤추는 것만 보면 왜 자꾸 울컥하는지 모르겠다? 아니 ㄹㅇ 누가보면 내가 낳은 줄 알겠어.. 너 춤 짱 잘 추더라구..코찔찔이 아가가 언제 저렇게 커가지고 열심히 춤을 추는거야..ㅜㅠ' },
        { src: 'assets/img/archive/17.jpg', description: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ전소영 나랑 헤어지기 싫어서 질질 짜는거 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ' },
        { src: 'assets/img/archive/18.jpg', description: '같이 잠실 갔다가 돌아오는 버스에서 찍은 사진!! 머리는 둘다 화려해가지구 자매같아 진짜루 저 옷도 너가 잘 어울린다고 해서 바로 구매했자너;; 진저베어도 진짜 맛있었는데.. 담에 또 먹으러 가자아아아 맛난거 먹구 같이 석촌호수 산책하니까 진짜 좋더라 날씨도 딱 좋았오' },
        { src: 'assets/img/archive/19.jpg', description: '진저베어에서 내가 찍어준 사진 넘 기여웡 히피펌 전소영 대박이었지..정말루 이사진도 완전 인스타 여친짤 아니냐고' },
        { src: 'assets/img/archive/20.jpg', description: '이날 꼭꼭 서로 인생샷 찍어주자고 한 날!! 히피펌 때 전소영은 머리 묶은게 정말 예뻤어 나름 공주데이라고 조용한 술집 간 우리 ㅋㅋㅋㅋㅋㅋㅋ' },
        { src: 'assets/img/archive/21.jpg', description: '나 이 사진이 너무 좋다..?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ아 진짜로 유럽할머니 갬성이야 ㅋㅋㅋㅋㅋ 히피펌인데 머릿결 관리 안하는 전소영.. 학교 올 때는 그지꼴로 다니는 전소영..ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ이 사진 너무 바보같고 무해함..ㄹㅇ 욕들어도 헤헤 할 것 같아서 진짜 시골똥개같은 귀여움이 있음..꼬순내 날 것 같아' },
        { src: 'assets/img/archive/22.jpg', description: '축제에서 줄 서고 있을 때 !! 신난 전소영과 지친 노민솔..사람 많은 곳에서도 참 잘 놀아 우리..^^ 같이 축제 공연 보면서 진짜 좋았는데 같이 부스 즐기고 공연 보고 야간 푸드트럭 부스에서 폭우 쏟아질 때 술 마시면서 놀고.. 나 아이패드 딴 순간에 같이 신나가지고 소리지르고 ㅋㅋㅋㅋㅋ 진짜 청춘이었다 우리 ' },
        { src: 'assets/img/archive/23.jpg', description: '동네친구니까 밤에 같이 러닝 뛰는 것도 좋아써 항상 내가 지치면 너가 옆에서 도와주고 러닝 자세 알려주고 그랬는데 다 뛰고 나면 항상 자판기에서 너는 토레타 나는 파워에이드 마셨잖아 바로 헤어지기 아쉬워서 채플관 앞 계단에 앉아서 수다도 떨구' },
        { src: 'assets/img/archive/24.jpg', description: '아진짜로 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ술쳐먹고 화장실 갈 때 내가 항상 주의하는 이유..^^ 서로가 훔쳐봐벌임 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 근데 이 사진 전소영 진짜 개변태같이 나왔어 ㅇㅈ?ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 너 시점에서 찍힌 나도 있는데 진짜 레전드 몰카임 ㅋㅋㅋㅋㅋㅋㅋ심지어 나 브이하고있음' },
        { src: 'assets/img/archive/25.jpg', description: '유럽갔다와서 처음 컴공팟 모인 날 ~! 오랜만에 소주마셔서 신나게 취해버림 지현수 집에서 만취한 전소영 영상들이 진짜 레전드임..걍 개웃김 그 쌍욕따발총으로 쏴버리는 전소영 영상 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ우울할 때 가끔 보면 행복함..^^ ' },
        { src: 'assets/img/archive/26.jpg', description: '유럽에서 맨날 숙소돌아오면 술파티 ㅋㅋㅋㅋㅋ 둘다 공주잠옷입고 뭐하냐구 패트와 매트같아 유럽에서도 웃긴 일화가 너무 많아 ' },
        { src: 'assets/img/archive/27.jpg', description: '이탈리아에서 숙취로 인해 소파에서 죽어버린 전소영..ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 지나가던 사람들이 다 너 쳐다보고 갔다고 ㅋㅋㅋㅋ 이 날 같이 못 돌아다녀서 미안하다고 했지만 난 진짜 괜찮았엉 !!이후에 신라면 컵라면 먹고 살아나는 너가 참 웃겼어' },
        { src: 'assets/img/archive/28.jpg', description: '진짜 안 추울거라매^^^^^^^ 둘다 추워서 죽을 뻔한 날..감기 안 걸려서 다행이야 ㅋㅋㅋㅋㅋㅋㅋ 그래도 풍경은 참 예뻤어 추워서 죽을 것 같을 때 컵라면 딱 먹어주니까 살 맛 나더랔ㅋㅋㅋㅋㅋㅋㅋ인생샷 찍기는 개뿔 둘다 추워가지고 찡그린 채로 억지로 웃는 사진만 있어 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ' },
        { src: 'assets/img/archive/29.jpg', description: '유럽에서의 정상사진 ~~ 기차 이동 시간에는 둘 다 입벌리고 잘 때가 더 많았지 ㅋㅋㅋㅋㅋㅋ전소영은 이때 다이어트 성공해가지고 모든 사진이 레전드임..나도 다이어트해서 갈걸..아직도 후회됨 하지만 조아따!!! 근데 이 사진 우리 둘 분위기 넘 정반대야 ㅋㅋㅋㅋㅋ색감도 ' },
        { src: 'assets/img/archive/30.jpg', description: '공항에서 팔찌하고 찍은 사진!! 우정반지 우정팔찌 다다다ㅏ 너무 좋고 예뻤는데 술쳐먹고 반지 잃어버려서 나 진짜 우울했어...다시 유럽가게 된다면 꼭 살거야..너가 갑자기 옆에 있던 비둘기랑 소통해서 웃겼는데 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ다른 외국인들이 신기하게 쳐다봤음' },
        { src: 'assets/img/archive/31.jpg', description: '몽마르뜨 언덕에서 아이스크림 가게 줄 기다리면서 찍은 사진 카메라에 너랑 나 같이 나와서 넘 웃겨 ㅋㅋㅋㅋㅋㅋ이 사진에서 입은 자켓 너랑 완전 찰떠쿵으로 잘 어울렸어 ' },
        { src: 'assets/img/archive/32.jpg', description: '유럽에서 정말 좋았던 순간 중에 하나 !!!!! 파리에서 크루즈 탄거 ! 음식도 맛있었는데 이 날 정말 너어어어어무 더웠어서 크루즈 타니까 살 것 같드라 ..^^ 밖에 에펠탑도 보이는데 너무 황홀했자나..소주4병은 거뜬한 대장군들이 샴페인 쨘 치고 노니까 새롭더라 그리고 전소영 단독사진이 진짜 개웃김ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ더워서 얼굴 빨개가지구' },
        { src: 'assets/img/archive/33.jpg', description: '전소영을 처음 만난 순간에는 상상도 못했어 우리가 같이 에펠탑을 보게 될 줄은 !!!솔직히 에펠탑 처음 봤을 때 설명하기 어려운 감정이 막 들면서 너무 벅찼다? 근데 당시에는 너무 더워서 빨리 감상하고 사진찍고 시원한 곳으로 가고 싶었지 ㅋㅋㅋㅋ죽기 전에 꼭 에펠탑은 보고 싶었는데 그걸 대학생 때 소영이랑 본건 다시 오지 않을 행운이었어' },
        { src: 'assets/img/archive/34.jpg', description: '전소영의 꿈!! 위키드 뮤지컬 보기! 너무너무 좋았는데 이 날 렌즈땜에 눈이 너무 아팠던게 아쉬워 ㅠㅠㅠ 그래도 너무 좋았어 뒷자리 시끄러움 아가들은 조금 혼내주고 싶었지만^^ 좌석도 꽤나 앞자리에서 되게 잘 보였어 ' },
        { src: 'assets/img/archive/35.jpg', description: '틈만 나면 우는 전찔찔 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 랍스타햄버거 먹다가 나한테 미안하다고 냅다 우는 전소영..이런 아이를 어떻게 안 사랑하나요^^... 근데 여기 햄버거 진심 개맛있었음 일찍 가서 웨이팅도 없었구 !! 완전 럭키비키니시티잖아' },
        { src: 'assets/img/archive/36.jpg', description: '여기 오르세였나?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 박물관이 너어무 지루해서 걍 웃긴거 찾기로 바껴버린 순간 우리 둘다 작품 포즈 따라하면서 엽사 찍었는데..우린 이게 맞아..^^' },
        { src: 'assets/img/archive/37.jpg', description: '런던에서는 아직 지치지도 않고 완전 설레고 에너지 넘쳤던 것 같아 이 날 둘다 소녀소녀하게 입고 레스토랑 가서 곱상한 척하고 메인 3개 시키고 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 딱 이 사진 찍을 때가 그 탁구 보이 앞이었는데 진짜 그때 인스타 알아냈어야 했다 ㅇㅈ? ' },
        { src: 'assets/img/archive/38.jpg', description: '이때 술먹고 하루필름에서 서로 사진 찍어줬었는데 나 이날 전소영 사진 넘 맘에 들어.. 저 소영쨩 머리색이랑 똑같은 곰돌이 머리띠도 넘 귀여버...포즈도 옷도 완전 찰떡존예자나!!~~!~!!!~!전소영 프사에 내가 찍어준 사진 많았던 것도 나름 뿌듯했었는데 ㅋㅋㅋㅋㅋ 담에 내가 또 인생사진 찍어줄게 ' },
        { src: 'assets/img/archive/39.jpg', description: '마카오와 죠마 데이 ㅋㅋㅋㅋㅋㅋ 어떻게 코디가 이렇게 똑같나요? 누가 우리 뒷모습 찍어줬는데 진짜 그냥 중성마녀들 그잡채임 ㅋㅋㅋㅋㅋ같이 학식먹던 것도 너무 그립다.. 학식먹고 바로 블루포트에서 아아 조져줘야하는데..그리고 수다겁나 떨다가 아슬아슬하게 강의실 들어가구ㅠ 강의 다 끝나면 명진당에서 같이 공부하다가 산책하면서 별구경하고 편의점에서 맛난거 먹구   진짜 그립다' },
        { src: 'assets/img/archive/40.jpg', description: '술 마시다가 채영이랑 셋이 cu에서 라면먹고 술마시기 ~!! 전소영 만취하면 그냥 자버린다고여 ㅋㅋㅋㅋㅋㅋ 항상 매운 라면 먹고 입주변 다 물드는 ..^^ 저 니트도 내가 생일 선물로 사줬던건데 잘 입어줘서 너무 고마옹 너랑 찰떡이야 진쨔!!!' },
        { src: 'assets/img/archive/41.jpg', description: '늦은 시간에 강의실에서 공부하다가 마라탕 시켜먹기~! 전소영 맨날 마라탕 먹은거 얼굴로 티 낸다고 ㅋㅋㅋㅋㅋㅋ 이 날도 공부 안하고 계속 유튜브 봤죠 우리 소영친구?^^ 마라탕 먹고 나면 배부르니까 꼭 산책해줘야돼 ㅋㅋㅋ 결국 순공시간은 코딱지만했던 나날들이었지만, 그래서 공부하는게 덜 힘들었어 오히려 즐거워서' },
        { src: 'assets/img/archive/42.jpg', description: '밥도 꼬옥 같이 먹어줘야지 이 날은 스태프 핫도그 먹었넹 근데 진짜 너만큼 폰게임에 진심인 친구 없다..어케 볼 때마다 폰게임에 미쳐있는거냐구..질리면 다른 겜으로 넘어가버리는 것도 신기해 70살 할머니 되어서도 폰게임 하고 있을 듯' },
        { src: 'assets/img/archive/43.jpg', description: '공대학실에서 전소영 가끔 화장해줄 때 재밌었어 ㅋㅋㅋㅋ 내가 하면 원래 소영화장 보다 진하게 되는데 난 그런 뽝뽝뽝 메이크업을 한 전소영이 새롭고 예쁘더라구 한번쯤은 쿨톤 메이크업 해주고 싶어!!!!!!담에 우리 서로 웜쿨 바꿔서 화장해주기 어때?' },
        { src: 'assets/img/archive/44.jpg', description: '이 날 ~!~!!~!~!~ 꾸꾸꾸라고 해서 완전 꾸미고 평소에 안하는 머리띠까지 쓰고 갔는데 전소영 패딩입어서 실망했는데 안에 예쁜 니트있어서 안도했다 ㅎㅎㅎ 우리 같이 찍은 네컷사진 중에 제일 마음에 들어 색감도 그림체도 너무 다른 우리지만 너무 잘 어울려 소영쨩은 사람이 어떻게 그렇게 말랑말랑 뽀짝하게 예쁜거지,,' },
        { src: 'assets/img/archive/45.jpg', description: '전설의 가평여행 ㅋㅋㅋㅋㅋ이 날 우리 셋이 사진을 한바가지를 찍었었지 같이 수영한 것도 진짜 재밌었어 마지막에는 파스타도 먹고 술도 마시고 할리갈리도 하구 그리고 레전드사각턱토론데이..내가 져서 6잔을 연속으로 마신거 개 에바였음;;;이제는 인정할게..하지만 내 눈에 넌 예쁘단 말이야 !!!!!!!!!!!!!!!!!! 그것만 알아줘^^ 결국엔 노민솔만만만취엔딩..^^ ' },
        { src: 'assets/img/archive/46.jpg', description: '기숙사에서 서로 화장해준 날 ~! 전소영의 화장은 정말 연하구나를 다시 한번 알게 됐자나.. 그래도 이 날 화장 맘에 들어써희희 이 때 우리 되게 어려보인다 그치 둘 다 단발이었던 시절엔 더 자매같았던 것 같아' },
        { src: 'assets/img/archive/47.jpg', description: '이 날 소영쨩 사진이 없네 .. 기억나? 우리가 처음 술배뜬 날..^^ 아무술집에서 삼겹살튀김에 소주 너무 좋았는데~!!! 이날 결국 내가 졌자나..진짜 만취영상 생각하면 개 수치스러움...만취하고 2차로 포차천국 갔던 것 같은데 그때 수민이 후드집업 빌려입고 ㅋㅋㅋㅋ우리 둘이 만나면 둘 중 한 명은 만취한다는 이야기가 있다. 나는 그 이야기를 무척 좋아한다.' },
        { src: 'assets/img/archive/48.jpg', description: '졸업선물 준다고 역북까지 찾아온 소영쨩 나는 졸업선물이 뭘까? 하고 혼자 이것저것 생각했었는데 정말 상상도 못한 선물이었어 내가 살면서 받아본 선물 중에 단연코 최고였어 어떻게 우리 둘만의 졸업앨법을 만들 생각을 한거냐고..진짜 눈물났던 순간이었어 이호창씨 영상 따라하는 것도 진짜 취향저격이었다고 ㅋㅋㅋㅋㅋㅋ항상 상상도 못한 선물들과 순간들을 주는 너가 정말 신기해 내가 제일 감동받을 만한 것들을 다 알고있는 것 같아 사실 알고 있어도 실행하기가 어려운건데 정말 고마워 소영이 같은 친구가 곁에 있는건 나에게 주어진 가장 큰 축복 중에 하나인 것 같아 어쩌면 나 전생에 거북선 조타수였을지도..' },
        // { src: 'assets/img/archive/49.jpg', description: 'Description for image 49' },
        // { src: 'assets/img/archive/50.jpg', description: 'Description for image 50' },
        // { src: 'assets/img/archive/51.jpg', description: 'Description for image 51' },
        // { src: 'assets/img/archive/52.jpg', description: 'Description for image 52' },
        // { src: 'assets/img/archive/53.jpg', description: 'Description for image 53' },
        // { src: 'assets/img/archive/54.jpg', description: 'Description for image 54' },

        // 추가 이미지가 있을 경우 여기에 추가

    ];

    let currentIndex = 0;
    const totalImages = galleryImages.length; // 전체 이미지 수

    function updateGallery() {
        const gallery = document.querySelector('#gallery img');
        const description = document.querySelector('#gallery p');
        const currentImgElement = document.getElementById("current-img");

        // 갤러리 이미지 및 설명 업데이트
        gallery.src = galleryImages[currentIndex].src;
        description.textContent = galleryImages[currentIndex].description;

        // 현재 이미지 번호 업데이트
        currentImgElement.textContent = `${currentIndex + 1}/${totalImages}`;
    }

    document.querySelector('#prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
        updateGallery();
    });

    document.querySelector('#next').addEventListener('click', function() {
        currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
        updateGallery();
    });

    // 초기화 함수 호출
    updateGallery();

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });

    });

    /**
     * Preloader (optional, if needed for this page)
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll initialization (if using AOS on this page)
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);

    function navmenuScrollspy() {
        // Define navmenulinks here
        const navmenulinks = document.querySelectorAll('#navmenu a');

        navmenulinks.forEach(navmenulink => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navmenulink.classList.add('active');
            } else {
                navmenulink.classList.remove('active');
            }
        });
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

})();