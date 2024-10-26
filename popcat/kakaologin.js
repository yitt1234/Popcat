const a = localStorage.getItem("nickname")
const b = localStorage.getItem("email")
const c = localStorage.getItem("image")

if(a !== null && b !== null && c !== null){
    document.getElementById("Info").innerHTML=a
    document.getElementById("email").innerHTML=b
    document.profileimage.src = c
    $("#30").hide();
} else {
    $("#30").show();
}
$(document).ready(function(){
    $("#visible").hide();

});

$("#visible").click(function(){
    $("#visible").hide();
    $("#Info").show();
    $("#email").show();
    $("#profileimage").show();
});

$("#profileimage").click(function(){
    $("#profileimage").hide();
    $("#Info").hide();
    $("#email").hide();
    $("#visible").show();
});

//카카오 로그인 코드
window.Kakao.init('Your Api key');
        function kakaoLogin() {
            window.Kakao.Auth.login({
                scope: ' account_email, profile_nickname, profile_image', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
                success: function(response) {
                    console.log((response)) // 로그인 성공하면 받아오는 데이터
                    $("#30").hide();
                    window.Kakao.API.request({ // 사용자 정보 가져오기 
                        url: '/v2/user/me',
                        success: (res) => {
                            const kakao_account = res.kakao_account;
                            //회원정보 띄우는코드
                            //email 주소 코드 kakao_account.email
                            //이름 띄우는 코드 kakao_account.profile.nickname
                            localStorage.setItem("key", kakao_account.profile.nickname)
                            localStorage.setItem("nickname", kakao_account.profile.nickname)
                            localStorage.setItem("email", kakao_account.email)
                            localStorage.setItem("image",kakao_account.profile.profile_image_url)
                            document.getElementById("Info").innerHTML=kakao_account.profile.nickname
                            document.getElementById("email").innerHTML=kakao_account.email
                            document.profileimage.src = kakao_account.profile.profile_image_url
                            console.log(kakao_account)
                            //document.igg.src
                        }
                    });
                    // window.location.href='/ex/kakao_login.html' //리다이렉트 되는 코드
                },
                fail: function(error) {
                    console.log(error)
                    alert("Login failed error: " + error.error_description)
                }
            });
        }
