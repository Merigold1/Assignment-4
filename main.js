PORTOFOLIO_STORAGE = "portofolio_storage"
let bioData = [
    {
        id: 1,
        Nama: "Muhamad Raihan Ramadhansyah",
        Role: "Front-End Engineer",
        availability: "Full time",
        Usia: "19",
        Lokasi: "Rangkasbitung",
        Pengalaman: "0",
        email: "email@gmail.com"


    }];

function generateDataId() {
    return bioData[bioData.length - 1].id + 1
}

const nama = document.getElementById("Nama");
const role = document.getElementById("Role");
const availability = document.getElementById("availability");
const usia = document.getElementById("Usia");
const lokasi = document.getElementById("Lokasi");
const pengalaman = document.getElementById("Pengalaman");
const email = document.getElementById("email");
const edit = document.getElementById("edit-button");
const form = document.getElementById('input-form');
const displayNama = document.getElementById("bio-nama")
const displayRole = document.getElementById("bio-role")
const displayAvailability = document.getElementById("bio-availability")
const displayUsia = document.getElementById("bio-usia")
const displayLokasi = document.getElementById("bio-lokasi")
const displayPengalaman = document.getElementById("bio-pengalaman")
const displayEmail = document.getElementById("bio-email")

form.style.display = 'none'


function handleReadData() {

    const dataString = localStorage.getItem(PORTOFOLIO_STORAGE)
    const initialData = JSON.parse(dataString);

    // jika tidak ada data di local storage, maka memakai initial bioData di atas
    if (!initialData) {
        localStorage.setItem(PORTOFOLIO_STORAGE, JSON.stringify(bioData))
        initialData = bioData;
    }

    const currentData = initialData[0];

    displayNama.innerText = currentData.Nama
    displayRole.innerText = currentData.Role
    displayAvailability.innerText = currentData.availability
    displayUsia.innerText = currentData.Usia
    displayLokasi.innerText = currentData.Lokasi
    displayPengalaman.innerText = currentData.Pengalaman
    displayEmail.innerText = currentData.email


}

window.addEventListener("load", (_) => {
    handleReadData();
});

edit.addEventListener('click', function (_) {

    form.style.display = 'block'

    const currentName = displayNama.textContent.trim()
    const currentRole = displayRole.textContent.trim()
    const currentAvailability = displayAvailability.textContent.trim()
    const currentUsia = displayUsia.textContent.trim()
    const currentLokasi = displayLokasi.textContent.trim()
    const currentPengalaman = displayPengalaman.textContent.trim()
    const currentEmail = displayEmail.textContent.trim()

    nama.value = currentName
    role.value = currentRole
    availability.value = currentAvailability
    usia.value = currentUsia
    lokasi.value = currentLokasi
    pengalaman.value = currentPengalaman
    email.value = currentEmail


});


const submit = document.getElementById("input-form");

submit.addEventListener('submit', function (event) {
    event.preventDefault();


    displayNama.innerText = nama.value;
    displayRole.innerText = role.value;
    displayAvailability.innerText = availability.value;
    displayUsia.innerText = usia.value;
    displayLokasi.innerText = lokasi.value;
    displayPengalaman.innerText = pengalaman.value;
    displayEmail.innerText = email.value;



    // mengupdate data array object 
    
    const updateBioData =
    {
        id: generateDataId(),
        Nama: nama.value,
        Role: role.value,
        availability: availability.value,
        Usia: usia.value,
        Lokasi: lokasi.value,
        Pengalaman: pengalaman.value,
        email: email.value
    }

    bioData[0] = updateBioData;


    localStorage.setItem(
        PORTOFOLIO_STORAGE,
        JSON.stringify(bioData)
    )

    console.log(bioData)

    submit.style.display = 'none'
});
