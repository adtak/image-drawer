import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { useMatches } from "react-router-dom";
import type { HandleType } from "../../App";

export default function Breadcrumbs() {
  const { crumbs } = useBreadcrumbs();
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNext fontSize="small" />}
    >
      {crumbs.map((crumb, index) => crumb({ index }))}
    </MuiBreadcrumbs>
  );
}

const useBreadcrumbs = () => {
  const handles = useMatches()
    .filter((match) => Boolean(match.handle))
    .map((match) => match.handle) as HandleType[];
  const crumbs = handles.map((handle) => handle.crumb);
  return { crumbs };
};
