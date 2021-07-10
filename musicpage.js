var musics = [

    {
        music_link: "",
    },

    {
        project_name: ".친환경 플라스틱 표기마크",
        project_type: "Team Project PD",
        project_link: "./projectpage-bioplastic.html",
        info_data: [
            {
                project_infoname: "거캠 20/4모듈 문제정의",
                project_img: "./images/2020_4M_PD/coverphoto.jpg"
            }
        ]
    },

    {
        project_name: ".M(aking)Lab",
        project_type: "School Curriculum",
        project_link: "./projectpage-MLab.html",
        info_data: [
            {
                project_infoname: "21/1모듈 알파랩 - MLab",
                project_img: "./images/MLABBB.jpg"
            }
        ]
    },

    {
        project_name: ".내가 표현하는 음악",
        project_type: "Personal Project",
        project_link: "./projectpage-producing.html",
        info_data: [
            {
                project_infoname: "20/3모듈 개인프로젝트 - 음악 미디작곡",
                project_img: "./images/personalprojectphoto.jpg"
            }
        ]
    },

    {
        project_name: ".믹싱 & 마스터링",
        project_type: "Personal Project",
        project_link: "./projectpage-mix&master.html",
        info_data: [
            {
                project_infoname: "20/4모듈 개인프로젝트 - 믹싱 & 마스터링",
                project_img: "./images/mix&master.jpg"
            }
        ]
    },
]

{/* <div class="scrollTitle"><a href="${date.project_link}">${project.project_name}<a></div> */}


//scrollContents에 해당하는 태그 모두 불러오기
var el = document.getElementsByClassName('scrollContents');
var hoverInfo = document.getElementById('hoverInfo')
var hoverTitle = document.getElementById('hoverTitle')
var hoverImage = document.getElementById('hoverImage')

for (var i in musics) {
    var music = musics[i]
    for (var j in music.info_data) {
        var date = music.info_data[j]
        document.querySelector(".scrollSelector").innerHTML += `
        <a href="${music.project_link}" class="scrollContents" id="data-${i}">
            <div class="scrollTitle">${music.project_name}</div>
            <div class="scrollType">${music.project_type}</div>
        </a>
        `;
    }
}

//forEach 반복문을 사용해 유사배열의 각각의 요소에 data 할당
//참고 : https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2

Array.prototype.forEach.call(el, function (item, index) {
    item.addEventListener('mouseover', function () {
        hoverInfo.style.display = "flex"

        var data = Object.assign({}, projects[index].info_data);
        var image = projects[index].info_data[0].project_img
        var title = projects[index].info_data[0].project_infoname
        var link = projects[index].info_data[0].project_link
        
        hoverTitle.innerHTML = title
        hoverImage.innerHTML = `<a href="${link}">
                                <img src="${image}" alt="" id="images">
                                </a>`;

        let tween = gsap.fromTo(hoverInfo, {opacity: 0}, {
            duration: 0.5,
            opacity: 1,
            ease: Circ.easeOut
        })

        document.querySelector('scrollWrap') = () => tween.play()
        
        // hoverInfo.classList.add('.opacityGetter')

        // TweenMax.from(hoverInfo, 1, {
        //     duration: 1,
        //     opacity: 1,
        // })
        
        // const els = gsap.utils.toArray('.scrollContents');

        // els.forEach (hoverInfo => {
        //     gsap.from(hoverInfo, {
        //         duration: 0.5,
        //         opacity: 0,
        //         y: 200,
        //         // rotation: -10,
        //         // scrollTrigger: {
        //         //     trigger: slide,
        //         //     scrub: 1,
        //         //     // toggleActions: "restart none none reverse",
        //         //     markers: true,
        //         //     start: "center bottom",
        //         //     end: "40% 50%",
        //         // }
        //     })
        // })
    })
});

Array.prototype.forEach.call(el, function (item, index) {
    item.addEventListener('mouseout', function () {
        var data = Object.assign({}, projects[index]);
        var image = projects[index].info_data[0].project_img
        var title = projects[index].info_data[0].project_infoname
        var link = projects[index].info_data[0].project_link


        // hoverInfo.style.display = "none"


        let tween = gsap.fromTo(hoverInfo, {opacity: 1}, {
            duration: 0.5,
            opacity: 0,
            ease: Circ.easeOut
        })

        document.querySelector('scrollWrap') = () => tween.play()

        hoverTitle.innerHTML = ""
        hoverImage.innerHTML = ""
        // hoverInfo.classList.remove('opacityGetter')

        // TweenMax.to(hoverInfo, 1, {
        //     duration: 1,
        //     opacity: 0,
        // })
    })
});