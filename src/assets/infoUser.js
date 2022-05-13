const infoUser = {
	name: "",
	pass: "",
	email: "",
	money: 0,
};

export function setName(value) {
	infoUser.name = value;
}
export function setPass(value) {
	infoUser.pass = value;
}
export function setEmail(value) {
	infoUser.email = value;
}
export function setMoney(value) {
	infoUser.money = value;
}

export function getName() {
	return infoUser.name;
}
export function getPass() {
	return infoUser.pass;
}
export function getEmail() {
	return infoUser.email;
}

export function getMoney() {
	return infoUser.money;
}
