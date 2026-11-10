const titles = [
    "하울의 움직이는 섬",
    "승리호",
    "박스트롤",
    "지상 최대의 쇼",
    "오디세이",

    // 박스 오피스 1~5
    "극장판 치이카와: 인어 섬의 비밀",
    "하트 오브 비스트",
    "최종면접",
    "명탐정 코난: 30호 살인 사건",
    "암살자(들)"
];

const years = [
    2004,
    2021,
    2014,
    2017,
    2026,

    2026,
    2026,
    2026,
    2026,
    2026
];

const ratings = [
    8.2,
    8.4,
    8.2,
    6.9,
    8.3,

    7.1,
    7.2,
    8.0,
    7.0,
    7.5
];

const audiences = [
    0,
    0,
    0,
    0,
    0,

    2797524,
    389837,
    179066,
    115609,
    3478353
];




// Part B : 영화 객체 10건
const movies = [
    // 내 인생 영화
    {
        title: "하울의 움직이는 섬", year: 2026, date: "2026-09-30", rating: 7.4,
        audience: 0, poster: "/rVOll8XOde5BuIF4tGO1q0pfngQ.jpg", type: "mine", rank: null
    },
    {
        title: "너의 이름은", year: 2016, date: "2016-07-01", rating: 8.4,
        audience: 0, poster: "/2DJCufz3Oa703PbLjNX1pM6MCG2.jpg", type: "mine", rank: null
    },
    {
        title: "엔드 오브 에반게리온", year: 1997, date: "1997-07-19", rating: 8.2,
        audience: 0, poster: "/AfyuI3glMCBDFmNPj9PY6DwbgGp.jpg", type: "mine", rank: null
    },
    {
        title: "명탐정 코난: 100만 달러의 펜타그램 포스터", year: 2024, date: "2024-04-12", rating: 6.9,
        audience: 0, poster: "/4TMkOnI6rCYxqD059aeeQSBv5mc.jpg", type: "mine", rank: null
    },
    {
        title: "모노노케 히메", year: 1997, date: "1997-07-12", rating: 8.3,
        audience: 0, poster: "/gl0jzn4BupSbL2qMVeqrjKkF9Js.jpg", type: "mine", rank: null
    },


    // 박스 오피스 1~5
    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.4,
        audience: 23394977, poster: "/rVOll8XOde5BuIF4tGO1q0pfngQ.jpg", type: "boxoffice", rank: 1
    },
    {
        title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
        audience: 3382132, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2
    },
    {
        title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
        audience: 112193, poster: "wkm9BQLok7U2KihcCspCa663Qse.jpg", type: "boxoffice", rank: 3
    },
    {
        title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.0,
        audience: 2006488, poster: "/w5OX3u2SpMVRU0sol0mtIaf4LSI.jpg", type: "boxoffice", rank: 4
    },
    {
        title: "클레이페이스", year: 2026, date: "2026-10-19", rating: 7.5,
        audience: 84051, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5
    },

];
