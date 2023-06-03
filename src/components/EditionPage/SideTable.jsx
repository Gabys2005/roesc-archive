import { getMedia } from "../../modules/utils";
import MediaImage from "../MediaImage";

export default function SideTable({ data, roescData }) {
	return (
		<div className="table-container sideTable" style={{ float: "right", marginLeft: "1rem" }}>
			<table className="table is-bordered is-striped is-hoverable">
				<thead>
					<tr style={{ textAlign: "center" }}>
						<th colSpan={2}>
							{roescData.name} {data.edition}
						</th>
					</tr>
				</thead>
				<tbody>
					{getMedia(data.media, "logos").length > 0 ? (
						<tr>
							<td colSpan={2}>
								<MediaImage link={getMedia(data.media, "logos")[0].link} />
							</td>
						</tr>
					) : (
						""
					)}
				</tbody>
			</table>
		</div>
	);
}
