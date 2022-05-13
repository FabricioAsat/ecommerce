import { useState } from "react";
import basePhoto from "../assets/boy.png";
import { getEmail, getName, getPass } from "../assets/infoUser";

const AccountPage = () => {
	const [visible, setVisible] = useState(false);
	const [showMore, setshowMore] = useState(false);

	const handleVisible = () => {
		setVisible(!visible);
	};
	const handleShowMore = () => {
		setshowMore(!showMore);
		setVisible(false);
	};

	return (
		<div className="grid grid-cols-1 gap-12">
			<picture className="flex flex-col items-center">
				<img src={basePhoto} alt="" className=" h-64 object-top object-cover select-none" />

				<h2 className="text-center font-bold text-4xl">{getName()}</h2>
			</picture>

			<div className="mx-4">
				<nav className="flex items-end">
					<h3 className="font-bold text-2xl">Acerca de {getName()}</h3>
					<button className="text-xs mx-4 pb-1" onClick={handleShowMore}>
						🔽
					</button>
				</nav>
				{showMore && (
					<div className="mx-4 my-4">
						<div className="flex">
							<h2 className="text-base font-bold ">
								Contraseña: {visible ? getPass() : "********"}
							</h2>
							<button className="mx-4" onClick={handleVisible}>
								👁‍🗨
							</button>
						</div>
						<h2 className="text-base font-bold  ">Mail: {getEmail()}</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default AccountPage;
