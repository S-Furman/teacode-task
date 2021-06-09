import { useEffect, useState } from "react";

import SingleRow from "./SingleRow/SingleRow";

import { TableContainer, Table, TableBody, Paper } from "@material-ui/core";

import { compareNames } from "./compareNames";

const ContactList = (props) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [toggledPeople, setToggledPeople] = useState([]);

  useEffect(() => {
    const url =
      "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.sort(compareNames))
      .then((sorted) => setFetchedData(sorted))
      .catch((error) => {
        console.error("fetch failed", error);
      });
  }, []);

  const personClickHandler = (id) => {
    const toggledPeopleCopy = [...toggledPeople];

    if (toggledPeopleCopy.includes(id)) {
      const index = toggledPeople.indexOf(id);
      toggledPeopleCopy.splice(index, 1);
    } else {
      toggledPeopleCopy.push(id);
    }
    setToggledPeople(toggledPeopleCopy);
  };

  useEffect(() => {
    console.log(toggledPeople);
  }, [toggledPeople]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {fetchedData.map((person) => {
            if (
              person.first_name.includes(props.searchValue) ||
              person.last_name.includes(props.searchValue)
            ) {
              return (
                <SingleRow
                  key={person.id}
                  id={person.id}
                  firstName={person.first_name}
                  lastName={person.last_name}
                  avatar={person.avatar}
                  click={() => personClickHandler(person.id)}
                />
              );
            } else {
              return null;
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
