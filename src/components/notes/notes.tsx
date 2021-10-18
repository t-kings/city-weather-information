/**
 *
 * @description  Manage  notes for a particular  city
 * TODO: include a textarea field where the user can enter and save notes.
 * TODO: Users should also be able to edit and remove notes.
 */

import { CityPageParams } from "../../types";

export const Notes = ({ city }: CityPageParams) => {
  return <h1>Notes for {city}</h1>;
};
