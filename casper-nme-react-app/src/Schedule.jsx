import PropTypes from "prop-types";

function Schedule({
  isFive = true,
  team = "None",
  games = 0
}) {

  return (
    <div>
      <p>Is above 500?: {isFive ? "yes" : "no"}</p>
      <p>playNext: {team}</p>
      <p>games: {games}</p>
    </div>
  );
}

Schedule.propTypes = {
  isFive: PropTypes.bool,
  team: PropTypes.string,
  games: PropTypes.number,
}

// Schedule.defaultProps = {
//   isFive: true,
//   team: "None",
//   games: 0,
// }


export default Schedule;