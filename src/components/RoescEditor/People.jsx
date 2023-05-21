import UserInput from "../Inputs/UserInput";

export default function People({ users, data, setValue }) {
	return (
		<div>
			<div className="box">
				<p>If a user is missing, you can add them in the Users Editor tab</p>
			</div>
			<div className="box">
				<UserInput
					multiple
					users={users}
					name="Owners"
					description="Current owners or owners at the time of cancellation"
					value={data.owners}
					setValue={(owners) => setValue("owners", owners)}
				/>
				<hr />
				<UserInput
					multiple
					users={users}
					name="Previous Owners"
					description="People who used to own this contest"
					value={data.previousOwners}
					setValue={(owners) => setValue("previousOwners", owners)}
				/>
				<hr />
				<UserInput
					multiple
					users={users}
					name="Developers"
					description="People who developed this contest"
					value={data.developers}
					setValue={(devs) => setValue("developers", devs)}
				/>
				<hr />
				<UserInput
					multiple
					users={users}
					name="Graphics Designers"
					description="People who made the graphics (logos, artworks, etc.) and videos for that RoESC"
					value={data.designers}
					setValue={(designers) => setValue("designers", designers)}
				/>
				<hr />
				<UserInput
					multiple
					users={users}
					name="Staff"
					description="ALL people who worked for this contest, except the owners"
					value={data.staff}
					setValue={(staff) => setValue("staff", staff)}
				/>
			</div>
		</div>
	);
}
