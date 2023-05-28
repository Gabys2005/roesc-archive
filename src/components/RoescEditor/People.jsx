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
			</div>
		</div>
	);
}
