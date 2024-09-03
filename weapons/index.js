const weaponsList = [
    {
        name: "assault-rifle",
        fullName: "Assault Rifle",
        img: "/images/Assault_Rifle.webp",
        stats: {
            cost: "Free",
            damage: 13,
            cooldown: 0.1,
            ammo: "20/100"
        },
        maps: ["/images/arena.png", "/images/big-arena.png", "/images/construction.png", "/images/docks.png"]
    }
]
const params = new URL(window.location.href)
const weaponURL = params.searchParams.get("name")
const weapon = weaponsList.filter(w => w.name === weaponURL)[0]

document.querySelector(".weapon").innerHTML = weapon.fullName
document.querySelector(".miniatura").src = weapon.img

document.querySelector(".damage").innerText = weapon.stats.damage
document.querySelector(".cooldown").innerText = weapon.stats.cooldown + "s"
document.querySelector(".ammo").innerText = weapon.stats.ammo

weapon.maps.forEach(function(map) {
    document.querySelector(".maps-list").innerHTML+= `<img src="${map}">`
})