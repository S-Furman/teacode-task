import { TableRow, TableCell, Checkbox, Avatar } from "@material-ui/core";
import { useState } from "react";

const SingleRow = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const personClickHandler = () => {
    setIsChecked(!isChecked);
    console.log(props.id);
  };
  return (
    <TableRow key={props.id} value={false}>
      <TableCell style={{ width: 10 }}>
        <Avatar
          alt={props.firstName + " " + props.lastName}
          src={props.avatar}
        />
      </TableCell>
      <TableCell onClick={personClickHandler}>
        {props.firstName} {props.lastName}
      </TableCell>

      <TableCell padding="checkbox">
        <Checkbox
          onClick={() => personClickHandler(!isChecked)}
          checked={isChecked}
        />
      </TableCell>
    </TableRow>
  );
};

export default SingleRow;
