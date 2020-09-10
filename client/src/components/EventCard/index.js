import React from "react";
import EventData from "../EventData";
import styled from "styled-components";

const accent = "var(--accent-color);";
const primary = "var(--primary-color);";

const Striped = styled.div`
  .striped {
    background-color: #ffffff;
    border-left: 5px solid;
    border-left-color: ${accent};
    padding: 15px 0;
  }

  .striped:hover {
    background-color: #f9f9f9;
    border-left: 5px solid;
    border-left-color: ${primary};
    padding: 15px 0;
  }
`;

<<<<<<< HEAD
function EventCard({ title, start, end, description, location, id, user, handleClick}) {
=======
function EventCard({
  title,
  start,
  end,
  description,
  location,
  id,
  handleBtnClick,
}) {
>>>>>>> 05c4158c9622fdbd4352d5f82cb60e17c319198c
  return (
    <Striped>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card p-4 striped event-card">
            <EventData
              title={title}
              start={start}
              end={end}
              description={description}
              location={location}
              id={id}
<<<<<<< HEAD
              user={user}
              handleClick={handleClick}
=======
              handleBtnClick={handleBtnClick}
>>>>>>> 05c4158c9622fdbd4352d5f82cb60e17c319198c
            />
          </div>
        </div>
      </div>
    </Striped>
  );
}
export default EventCard;
