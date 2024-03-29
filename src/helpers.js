export function millisecondsToTime(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

export function formatDate(inputDate) {
    const parts = inputDate.split(/[- :]/);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${monthNames[parseInt(parts[1]) - 1]} ${parseInt(parts[2])}, ${parts[0]}`;
    return formattedDate;
}

export async function getToken(){
    const resp = await fetch('https://accounts.spotify.com/api/token', {
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&client_secret=${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
    })
    const json = await resp.json()

    const expiresIn = json.expires_in;
    const expirationTime = new Date().getTime() + expiresIn * 1000;

    localStorage.setItem('token', json.access_token)
    localStorage.setItem('token_exp', expirationTime)
    return json.access_token
}

export async function authFetch(request){
    const tokenExpiration = +localStorage.getItem('token_exp') || 0
    const currentTime = new Date().getTime();
    if(currentTime > tokenExpiration){
       await getToken()
    }
    const token = localStorage.getItem('token')
    const resp = await fetch(`https://api.spotify.com/v1/${request}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const json = await resp.json()
    return json
}