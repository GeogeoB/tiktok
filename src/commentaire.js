function Commentaire({ userComments }) {
  function getReadableTimeDiff(date1, date2) {
    const diff = Math.abs(date2 - date1);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;

    if (diff >= year) {
      const count = Math.floor(diff / year);
      return `${count} an${count > 1 ? "s" : ""}`;
    } else if (diff >= month) {
      const count = Math.floor(diff / month);
      return `${count} mois`;
    } else if (diff >= week) {
      const count = Math.floor(diff / week);
      return `${count} semaine${count > 1 ? "s" : ""}`;
    } else if (diff >= day) {
      const count = Math.floor(diff / day);
      return `${count} jour${count > 1 ? "s" : ""}`;
    } else if (diff >= hour) {
      const count = Math.floor(diff / hour);
      return `${count} heure${count > 1 ? "s" : ""}`;
    } else if (diff >= minute) {
      const count = Math.floor(diff / minute);
      return `${count} minute${count > 1 ? "s" : ""}`;
    } else {
      const count = Math.floor(diff / second);
      return `${count} seconde${count > 1 ? "s" : ""}`;
    }
  }

  return (
    <div className="comments">
      <div className="pp_comments">
        <div className="pp_comments_circle">
          <img src={userComments.pp} alt="" />
        </div>
      </div>
      <div className="comments--right">
        <div className="comments--pseudo--date">
          <p className="comment-pseudo">{userComments.surnom}</p>
          <p className="comment-date">{"il y a " + getReadableTimeDiff(new Date(userComments.date), new Date())}</p>
        </div>
        <p>{userComments.comments}</p>
      </div>
    </div>
  );
}

export default Commentaire;
