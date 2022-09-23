import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function FilterByNames({
  allNames,
  filterInclude,
  filterExclude,
  onChange,
}) {
  const allFilters = [...filterInclude, ...filterExclude];

  return (
    <React.Fragment>
      {allNames.map((name) => (
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                size="small"
                color={filterExclude.includes(name) ? "secondary" : "primary"}
                onChange={onChange(name)}
              />
            }
            label={name}
            checked={allFilters.includes(name)}
          />
        </FormGroup>
      ))}
    </React.Fragment>
  );
}