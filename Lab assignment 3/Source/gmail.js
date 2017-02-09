function logout()
{
    gapi.auth.signOut();
    location.reload();
}
function google()
{
    var myParams = {
        'clientid' : '379431461967-os16t1oe5iuqp20v27o7bagmdilu16p6.apps.googleusercontent.com',
        'cookiepolicy' : 'single_host_origin',
        'callback' : 'Callback',
        'approvalprompt':'force',
        'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    };
    gapi.auth.signIn(myParams);
}

function Callback(result)
{
    if(result['status']['signed_in'])
    {
        var request = gapi.client.plus.people.get(
            {
                'userId': 'me'
            });
        request.execute(function (resp)
        {
            var email = '';
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
                    }
                }
            }

            var str = "Name:" + resp['displayName'] + "<br>";
            str += "Image:" + resp['image']['url'] + "<br>";
            str += "<img src='" + resp['image']['url'] + "' /><br>";

            str += "URL:" + resp['url'] + "<br>";
            str += "Email:" + email + "<br>";
            document.getElementById("profile").innerHTML = str;
        });

    }
    window.location.href="Home.html";
}
function onLoadCallback()
{
    gapi.client.setApiKey('	AIzaSyC-928pbwFnNM6onCLbi1DYLSYfUfyPLPg');
    gapi.client.load('plus', 'v1',function(){});

}
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();