const weapons = ["Assault Rifle", "Bow", "Burst Rifle", "Flamethrower", "Grenade Launcher", "Minigun", "Paintball Gun	", "RPG", "Shotgun", "Sniper"]


function randomWeapon() {
	const random = Math.floor(Math.random() * weapons.length)

	const laweapon = weapons[random]

	document.getElementById("resultado").innerText = "> " + laweapon + " <"
}

document.querySelector(".maps-img").querySelectorAll("img").forEach(function(img) {
    img.onclick = function() {
        document.querySelector(".big").src = img.src
		document.querySelector(".big-div").style.display = "flex"
    }
})

document.querySelector(".big-div").addEventListener("click", async (e) => {
	if (
		e.target instanceof HTMLImageElement ||
		e.target instanceof HTMLButtonElement
	)
		return

	document.querySelector(".big-div").style.display = "none"
})