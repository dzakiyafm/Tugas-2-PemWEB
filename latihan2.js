const h1 = document.createElement("h1")
h1.innerHTML = "saya sedang belajar DOM"
document.body.append(h1)

const img = document.createElement("img")
img.src = "haechan.jpg"
img.width = 221
document.body.append(img)

const form = document.createElement("form")
form.innerHTML = "<input type= 'text' placeholder='Masukkan Nama'>"
form.innerHTML += "<input type= 'submit' value = 'Kirim'>"
document.body.append(form)

const form2 = document.createElement("form")
document.body.append(form2)

const input = document.createElement("input")
input.setAttribute('type','text')
input.setAttribute('placeholder', 'Masukkan Nama Anda')

const tombol = document.createElement("input")
tombol.setAttribute('type', 'submit')
tombol.setAttribute('value', 'SIMPAN')

form2.append(input)
form2.append(tombol)