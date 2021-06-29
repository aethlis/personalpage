var projects = [

    {
        project_name: ".기후변화와 주거권",
        project_type: "Team Project MTP",
        info_data: [
            {
                project_link: "./projectpage.html",
                project_infoname: "거캠 20/3모듈 주제중심",
                project_img: "./",
            }
        ]
    },

    {
        project_name: ".잘못된 재활용",
        project_type: "Team Project PD",
        info_data: [
            {
                project_link: "./",
                project_infoname: "거캠 20/3모듈 문제정의",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".시각장애인을 위한 교통서비스",
        project_type: "Team Project MTP",
        info_data: [
            {
                project_link: "./",
                project_infoname: "거캠 20/4모듈 문제정의",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".친환경 플라스틱 표기마크",
        project_type: "Team Project PD",
        info_data: [
            {
                project_link: "./",
                project_infoname: "거캠 20/4모듈 문제정의",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".M(aking)Lab",
        project_type: "School Curriculum",
        info_data: [
            {
                project_link: "./",
                project_infoname: "21/1모듈 알파랩 - MLab",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".C(oding)Lab",
        project_type: "School Curriculum",
        info_data: [
            {
                project_link: "./",
                project_infoname: "21/1모듈 알파랩 - CLab",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".Wynsome",
        project_type: "Adv. Team Project",
        info_data: [
            {
                project_link: "./",
                project_infoname: "문제정의 심화 - 윈썸",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".내가 표현하는 음악",
        project_type: "Personal Project",
        info_data: [
            {
                project_link: "./",
                project_infoname: "20/3모듈 개인프로젝트 - 음악 미디작곡",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".믹싱 & 마스터링",
        project_type: "Personal Project",
        info_data: [
            {
                project_link: "./",
                project_infoname: "20/4모듈 개인프로젝트 - 믹싱 & 마스터링",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".음악동아리",
        project_type: "After School",
        info_data: [
            {
                project_link: "./",
                project_infoname: "CJ 도너스캠프 음악동아리",
                project_img: "./"
            }
        ]
    },

    {
        project_name: ".Album 제작",
        project_type: "After School",
        info_data: [
            {
                project_link: "./",
                project_infoname: "MnJ & 오마이컴퍼니 / 크라우드 펀딩 프로젝트",
                project_img: "./"
            }
        ]
    },

]

for (var i in projects) {
    var project = projects[i]
    for (var j in project.info_data) {
        var date = project.info_data[j]
        document.querySelector(".scrollSelector").innerHTML += `
        <div class="scrollContents" id="data-${i}">
            <div class="scrollTitle">${project.project_name}</div>
            <div class="scrollType">${project.project_type}</div>
        </div>
        `;
    }
}
{/* <div class="scrollTitle"><a href="${date.project_link}">${project.project_name}<a></div> */}

// for (var k in projects) {   
//     var el  = document.getElementById(`data-${k}`);
//     var data = Object.assign({}, projects[k]);
    
//     el.addEventListener('click', function() {
//         console.log(data);
//         alert(JSON.stringify(data))
//     })
// }



