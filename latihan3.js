function proses(){
    let nama = document.getElementById("nama")
    const tulis = document.getElementById("tulis")

    tulis.innerHTML = "Nama saya " + nama.value
}

function ganti(){
    const tulis = document.getElementById('tulis')
    tulis.style.color = "pink"
}

