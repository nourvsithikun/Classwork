const userProfileInfo = [
    {
        name: "Puthy Lyhong",
        position: "Content Creator",
        age: 18,
        profileImage: "./images/4.jpg"
    },
    {
        name: "Chour Sothirak",
        position: "Gambler",
        age: 18,
        profileImage: "./images/5.jpg"
    },
    {
        name: "Lun Koemtry",
        position: "Content Creator",
        age: 18,
        profileImage: "./images/2.jpg"
    },
    {
        name: "Lorm ChinaVathana",
        position: "Mananger",
        age: 17,
        profileImage: "./images/1.jpg"
    },
    {
        name: "Nen Makara",
        position: "Backend Developer",
        age: 18,
        profileImage: "./images/3.jpg"
    }
]

let userProfileCard="";
userProfileInfo.map((info)=>{

    userProfileCard = `
    <div style="border: 1px solid gray; padding: 10px; border-radius: 20px">
        
        <img src="${info.profileImage}" style="width:75px; height: 75px; border-radius: 50%;">
        
        <hr>
        <h1>Name: ${info.name}</h1>
        <h1>Age: ${info.age}</h1>
        <h1>Position: ${info.position}</h1>
    </div>
    `
    document.getElementById('userInfoDisplay').innerHTML += userProfileCard;
})