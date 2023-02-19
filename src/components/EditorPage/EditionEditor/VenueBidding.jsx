import { useEffect } from "react";
import { useState } from "react";
import Collapsible from "../../Collapsible";

function VenueBidding({ data, change }) {
	const [venues, setVenues] = useState([]);

	useEffect(() => {
		setVenues(data.venue_bidding);
	}, [data.venue_bidding]);

	function newVenue() {
		change("venue_bidding")({ target: { value: [...venues, { city: "", venue: "" }] } });
	}

	function removeVenue(i) {
		change("venue_bidding")({ target: { value: venues.filter((r, i2) => i2 !== i) } });
	}

	function changeCity(i, newVal) {
		change("venue_bidding")({
			target: {
				value: venues.map((r, i2) => {
					if (i2 === i) {
						r.city = newVal;
					}
					return r;
				}),
			},
		});
	}

	function changeVenue(i, newVal) {
		change("venue_bidding")({
			target: {
				value: venues.map((r, i2) => {
					if (i2 === i) {
						r.venue = newVal;
					}
					return r;
				}),
			},
		});
	}

	return (
		<Collapsible title="Venue Bidding">
			{data.venue_bidding.map((r, i) => (
				<div key={i}>
					<div className="field has-addons is-horizontal" key={i}>
						<div className="field-body">
							<div className="field">
								<p className="control is-expanded">
									<input
										type="text"
										className="input"
										placeholder="City"
										value={r.city}
										onChange={(e) => changeCity(i, e.target.value)}
									/>
								</p>
							</div>
							<div className="field">
								<p className="control is-expanded">
									<input
										type="text"
										className="input"
										placeholder="Venue"
										value={r.venue}
										onChange={(e) => changeVenue(i, e.target.value)}
									/>
								</p>
							</div>
							<div className="field">
								<p className="control">
									<button className="button is-danger is-outlined" onClick={() => removeVenue(i)}>
										X
									</button>
								</p>
							</div>
						</div>
					</div>
					<hr></hr>
				</div>
			))}
			<button className="button is-primary" onClick={newVenue}>
				Add Another
			</button>
		</Collapsible>
	);
}

export default VenueBidding;
