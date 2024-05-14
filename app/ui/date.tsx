import moment from "moment";
const Date = ({ date }: { date: string }) => {
	if (!date) return null;

	const momentDate = moment(date);
	return <time dateTime={date}>{momentDate.format("MMMM, D YYYY")}</time>;
};

export default Date;
