import { useEffect, useState } from "react";

import SingleRow from "./SingleRow/SingleRow";

import { TableContainer, Table, TableBody, Paper } from "@material-ui/core";

import { compareNames } from "./compareNames";

const ContactList = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const url =
      "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";
    fetch(url)
      .then((response) => response.json())
      .then((json) => json.sort(compareNames))
      .then((sorted) => setFetchedData(sorted));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {fetchedData.map((person) => {
            return (
              <SingleRow
                key={person.id}
                id={person.id}
                firstName={person.first_name}
                lastName={person.last_name}
                avatar={person.avatar}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
